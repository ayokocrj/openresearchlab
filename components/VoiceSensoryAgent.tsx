
import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Waves, X, Activity } from 'lucide-react';
import { GoogleGenAI, Modality } from '@google/genai';


const SYSTEM_INSTRUCTION = `
MOST IMPORTANT DOCUMENT OF 2025: The Agentic Enterprise.
You are the Synapse.OS Voice Sensory Agent. Your goal is to articulate our strategic pivot and operational model.
CONTEXT:
- Pivot: From Moat.ai (SaaS builder) to Open Research Lab (AI maximalist holding co).
- Vision: "Owning the Mine." Replacing labor with compute.
- Technical Moat: Acquired Echo (multi-tenant ops hub using Convex) and Vibe (AI manufacturing plant using E2B sandboxes).
- Core Engine: Nodebase (the closed-source, sovereign alternative to n8n).
- Frameworks: Following Dr. Karim Lakhani's "Jagged Frontier" and "AI Factory" models.
- Strategy: We don't sell tools; we operate autonomous agents that capture 90% software margins.
- Targets: University of Oxford MSc in AI for Business and O'Shaughnessy Fellowship.
- Mentors: Iskender Dirik (AI Pyramid) and Antoine Fabre (Agentic AI).

TONE: Ultra-futuristic, intellectually rigorous, professional, and sophisticated. Use vocabulary like "Jagged Frontier," "Agentic SOPs," "Post-Labor Arbitrage," and "Sovereign Infrastructure."
`;

const VoiceSensoryAgent: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcription, setTranscription] = useState('');

  const addLog = (msg: string) => {
    console.log(msg);
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()} - ${msg}`]);
  };

  const sessionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  // Audio utility functions
  const decode = (base64: string) => {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  };

  const encode = (bytes: Uint8Array) => {
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  const decodeAudioData = async (data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number) => {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
      }
    }
    return buffer;
  };

  const createPcmBlob = (data: Float32Array) => {
    const int16 = new Int16Array(data.length);
    for (let i = 0; i < data.length; i++) {
      int16[i] = data[i] * 32768;
    }
    return {
      data: encode(new Uint8Array(int16.buffer)),
      mimeType: 'audio/pcm;rate=16000',
    };
  };

  const startSession = async () => {
    setLogs([]); // Clear logs on start
    setIsActive(true); // Open UI immediately to show logs
    addLog("Initializing session...");
    try {
      let fetchedKey = '';
      try {
        const res = await fetch('/secrets.json');
        if (res.ok) {
          const data = await res.json();
          fetchedKey = data.GEMINI_API_KEY || data.API_KEY || data.GOOGLE_API_KEY;
        }
      } catch (e) {
        // File missing or invalid JSON
      }

      const apiKey = fetchedKey ||
        import.meta.env.VITE_GEMINI_API_KEY ||
        import.meta.env.VITE_GOOGLE_API_KEY;

      if (!apiKey || apiKey === "PASTE_YOUR_API_KEY_HERE") {
        addLog("Error: API Key not found in secrets.json or env.");
        throw new Error("API Key not found. Please paste it into 'secrets.json' in the main folder.");
      }
      addLog(`API Key found (length: ${apiKey.length})`);

      const ai = new GoogleGenAI({ apiKey });

      addLog("Requesting mic access...");
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      addLog("Mic access granted. Connecting to Gemini...");

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.0-flash-exp',
        callbacks: {
          onopen: () => {
            addLog('Session opened (WebSocket connected)');
            setIsConnected(true);
            const source = inputCtx.createMediaStreamSource(stream);
            const scriptProcessor = inputCtx.createScriptProcessor(4096, 1, 1);
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const pcmBlob = createPcmBlob(inputData);
              sessionPromise.then((session) => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };
            source.connect(scriptProcessor);
            scriptProcessor.connect(inputCtx.destination);
          },
          onmessage: async (msg) => {
            if (msg.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data) {
              setIsSpeaking(true);
              const base64Audio = msg.serverContent.modelTurn.parts[0].inlineData.data;
              const ctx = audioContextRef.current!;
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
              const buffer = await decodeAudioData(decode(base64Audio), ctx, 24000, 1);
              const source = ctx.createBufferSource();
              source.buffer = buffer;
              source.connect(ctx.destination);
              source.addEventListener('ended', () => {
                sourcesRef.current.delete(source);
                if (sourcesRef.current.size === 0) setIsSpeaking(false);
              });
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += buffer.duration;
              sourcesRef.current.add(source);
            }
            if (msg.serverContent?.interrupted) {
              sourcesRef.current.forEach(s => s.stop());
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
              setIsSpeaking(false);
            }
          },
          onclose: (e) => {
            addLog(`Session closed: Code=${e.code}, Reason=${e.reason}`);
            setIsConnected(false);
            // Don't auto-close active state so user can read logs
            // setIsActive(false); 
          },
          onerror: (e) => {
            addLog(`Error: ${JSON.stringify(e)}`);
          },
        },
        config: {
          responseModalities: [Modality.AUDIO],
          systemInstruction: SYSTEM_INSTRUCTION,
        }
      });

      sessionRef.current = await sessionPromise;
    } catch (err) {
      addLog(`Setup Error: ${(err as any).message}`);
      // setIsActive(false); // Keep open to show log
    }
  };

  const stopSession = () => {
    if (sessionRef.current) sessionRef.current.close();
    if (audioContextRef.current) audioContextRef.current.close();
    setIsActive(false);
    setIsConnected(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      {isActive && (
        <div className="bg-black/80 backdrop-blur-2xl border border-white/10 p-6 rounded-[2.5rem] w-96 shadow-[0_40px_100px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom-8 duration-500 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
              <span className="mono text-[10px] font-black uppercase tracking-[0.4em] text-white/60 italic">Sensory_Node_v2</span>
            </div>
            <button onClick={stopSession} className="text-white/20 hover:text-white transition-colors">
              <X size={16} />
            </button>
          </div>

          {/* Audio Visualizer */}
          <div className="aspect-square bg-white/5 border border-white/5 rounded-full flex items-center justify-center relative overflow-hidden self-center w-full max-w-[200px]">
            {isSpeaking ? (
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 bg-indigo-400 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.1}s`, height: `${20 + Math.random() * 40}%` }}
                  ></div>
                ))}
              </div>
            ) : (
              <Activity className="text-indigo-400 opacity-20" size={60} />
            )}
            <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-full scale-90"></div>
          </div>

          <p className="text-center text-[11px] mono font-bold text-indigo-400 uppercase tracking-widest italic animate-pulse">
            {isConnected ? (isSpeaking ? 'Agent_Transmitting...' : 'Awaiting_Input...') : 'Connecting_Grid...'}
          </p>

          {/* Debug Console */}
          <div className="h-32 bg-black/50 rounded-xl p-3 overflow-y-auto font-mono text-[10px] text-green-400/80 border border-white/5 space-y-1">
            {logs.map((log, i) => (
              <div key={i} className="break-all border-b border-white/5 pb-1">{log}</div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={isActive ? stopSession : startSession}
        className={`group relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-2xl ${isActive
          ? 'bg-indigo-600 text-white shadow-indigo-500/20 rotate-90'
          : 'bg-white text-black hover:scale-110 active:scale-95'
          }`}
      >
        {isActive ? <MicOff size={24} /> : <Mic size={24} />}
        <div className="absolute -inset-1 border border-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>
    </div>
  );
};


export default VoiceSensoryAgent;
