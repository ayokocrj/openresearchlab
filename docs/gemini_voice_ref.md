# Gemini Multimodal Live API Reference

## Overview
The Gemini Multimodal Live API enables low-latency, bidirectional voice interactions. It uses a WebSocket connection to stream audio input (user) and receive audio output (model).

## Key Parameters
- **Model**: `gemini-2.5-flash-native-audio-preview-12-2025` (or similar latest version).
- **Config**:
  ```javascript
  const config = {
    responseModalities: ['AUDIO'], // Request audio output
    systemInstruction: "Your system prompt here...",
  };
  ```

## Server-Side (Node.js) Example Implementation
*Note: Browser implementation requires Web Audio API instead of `mic`/`speaker`.*

```javascript
import { GoogleGenAI, Modality } from '@google/genai';

// Connect
const session = await ai.live.connect({
  model: 'gemini-2.5-flash-native-audio-preview-12-2025',
  config: { responseModalities: [Modality.AUDIO] },
  callbacks: {
    onopen: () => console.log('Connected'),
    onmessage: (msg) => handleMessage(msg),
  }
});

// Send Audio (Input)
// Data must be base64 encoded PCM (usually 16kHz, 1 channel, 16-bit)
session.sendRealtimeInput({
  audio: {
    data: base64AudioData,
    mimeType: "audio/pcm;rate=16000"
  }
});

// Receive Audio (Output)
function handleMessage(message) {
  if (message.serverContent?.modelTurn?.parts) {
    for (const part of message.serverContent.modelTurn.parts) {
      if (part.inlineData) {
        // PCM Audio Buffer to be played
        playAudio(part.inlineData.data);
      }
    }
  }
}
```

## Browser Adaptation Strategy
1.  **Input**: Use `AudioContext` + `ScriptProcessor` or `AudioWorklet` to capture microphone stream. Downsample to 16kHz PCM if necessary (or send as is if supported).
2.  **Output**: Accumulate PCM chunks in a queue and schedule playback using `AudioContext.createBufferSource()`.
3.  **Auth**: Do NOT expose API keys in frontend. Use a Next.js API route to proxy the connection OR generate an ephemeral token server-side.
