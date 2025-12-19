import React from 'react';
import { Database, Clock, Lock, ShieldCheck, Zap, Server, Activity, FileText } from 'lucide-react';
import ProofOfWorkInvoice from './ProofOfWorkInvoice';

const NodebaseBlueprint: React.FC = () => {
  const advantages = [
    {
      title: 'Inngest Integration',
      desc: 'Allows long-running agents that persist for days. Google/N8N agents timeout; Nodebase waits for the client email response.',
      icon: Clock,
      color: 'bg-white/5 border-white/10 text-white shadow-[0_0_30px_rgba(255,255,255,0.05)]',
      glow: 'shadow-[0_0_20px_rgba(255,165,0,0.2)]',
      ref: 'Protocol: Durable_Execution'
    },
    {
      title: 'Sovereign Logic',
      desc: 'You own the Context Engineering. Don\'t teach Google how to automate a law firm; keep that IP in your self-hosted instance.',
      icon: Lock,
      color: 'bg-white/5 border-white/10 text-white shadow-[0_0_30px_rgba(255,255,255,0.05)]',
      glow: 'shadow-[0_0_20px_rgba(99,102,241,0.2)]',
      ref: 'Ref: Context_Ownership'
    },
    {
      title: 'The Helmet Layer',
      desc: 'A Safe Sandbox where agents fail without risk. Governance nodes intercept Jagged Edges before they impact production.',
      icon: ShieldCheck,
      color: 'bg-white/5 border-white/10 text-white shadow-[0_0_30px_rgba(255,255,255,0.05)]',
      glow: 'shadow-[0_0_20px_rgba(16,185,129,0.2)]',
      ref: 'Concept: Psychological_Safety (Lakhani)'
    },
    {
      title: 'Unconstrained Memory',
      desc: 'Memory persists across months, not just sessions. True organizational context stored in our proprietary graph.',
      icon: Database,
      color: 'bg-white/5 border-white/10 text-white shadow-[0_0_30px_rgba(255,255,255,0.05)]',
      glow: 'shadow-[0_0_20px_rgba(139,92,246,0.2)]',
      ref: 'Ref: Organizational_Hippocampus'
    }
  ];

  return (
    <div className="min-h-full bg-black/20 text-white p-8 relative overflow-hidden font-sans selection:bg-white/20 perspective-1000">

      {/* HERO BACKGROUND - MIRRORING DASHBOARD.TSX */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] z-0 pointer-events-none mix-blend-screen opacity-20">
        <div className="relative w-full h-full animate-spin-slow">
          <svg className="w-full h-full" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="250" cy="200" rx="200" ry="120" stroke="white" strokeWidth="0.5" className="opacity-30" />
            <ellipse cx="200" cy="300" rx="200" ry="120" stroke="white" strokeWidth="0.5" className="opacity-30" transform="rotate(-60 200 300)" />
            <ellipse cx="300" cy="300" rx="200" ry="120" stroke="white" strokeWidth="0.5" className="opacity-30" transform="rotate(60 300 300)" />
            <circle cx="250" cy="250" r="280" stroke="white" strokeWidth="0.2" strokeDasharray="4 8" className="opacity-20" />
          </svg>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full blur-xl animate-pulse"></div>
      </div>

      {/* Header Section */}
      <header className="relative z-50 mb-20 border-b border-white/10 pb-12 pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center gap-3 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 font-black italic">Research_Topic: Agentic_Sovereignty</span>
              </div>
              <div className="h-[1px] flex-1 bg-white/20 w-16"></div>
              <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">Fig 1.0</span>
            </div>

            <h2 className="font-bold text-6xl md:text-8xl leading-[0.9] tracking-tighter text-white uppercase mix-blend-exclusion antialiased text-silver drop-shadow-2xl mb-8">
              The Anti-Google <br />
              <span className="text-white">Stack.</span>
            </h2>
            <p className="font-serif italic text-white/50 text-2xl max-w-2xl leading-relaxed tracking-wide">
              "Nodebase is not a product for sale. It is our <span className="text-white not-italic">Proprietary Execution Engine</span>."
            </p>
          </div>

          {/* Abstract / Strategy Badge */}
          <div className="hidden lg:block relative group">
            <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-10 transition-opacity rounded-xl"></div>
            <div className="w-72 bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                <Activity size={14} className="text-white" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">System_Status</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-gray-400 mb-2">
                <span>Frontier_Mapping</span>
                <span className="text-white animate-pulse">Active</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-gray-400">
                <span>Total_Agents</span>
                <span>12</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-gray-400 mt-2 pt-2 border-t border-white/5">
                <span>Commercial_Uplink</span>
                <span className="text-green-400 font-bold">ACTIVE (Client_01)</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 pb-20">

        {/* LEFT COLUMN: THE PROBLEM (Why Off-the-Shelf Fails) */}
        <div className="lg:col-span-5 space-y-12">
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 backdrop-blur-2xl relative group overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

            <h3 className="font-serif italic text-3xl text-white/90 mb-10 leading-tight">
              <span className="block text-[10px] font-sans font-black text-red-500/80 uppercase tracking-[0.3em] mb-4">Problem_Vector</span>
              Why Off-the-Shelf Fails
            </h3>

            {/* List */}
            <div className="space-y-10 relative z-10">
              {[
                { label: 'Make/Zapier', problem: 'Charge per execution. Designed for constraints.', color: 'text-red-400', icon: 'M' },
                { label: 'Vertex AI', problem: 'Data feeds the frontier model. Zero IP sovereignty.', color: 'text-red-400', icon: 'V' },
                { label: 'Public Tools', problem: '30-minute timeouts kill agentic workflows.', color: 'text-red-400', icon: 'X' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group/item">
                  <div className={`w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-black/40 border border-white/10 font-mono font-bold text-xs text-white group-hover/item:border-red-500/30 transition-colors`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className={`text-[10px] font-black mb-2 uppercase tracking-[0.2em] text-white/70 group-hover/item:text-red-400 transition-colors`}>{item.label}</div>
                    <div className="text-gray-400 font-light text-lg leading-relaxed">{item.problem}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Comparison Graph */}
            <div className="mt-12 pt-10 border-t border-white/10 relative z-10">
              <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest mb-6">Timeout_Analysis (Fig 1.2)</div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] mono text-gray-400 uppercase tracking-wider"><span>Vertex_AI</span> <span>30m</span></div>
                  <div className="h-1 bg-white/10 w-full">
                    <div className="h-full bg-red-500 w-[10%] shadow-[0_0_10px_red]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] mono text-white uppercase tracking-wider"><span>Nodebase (Inngest)</span> <span>72h+</span></div>
                  <div className="h-1 bg-white/10 w-full">
                    <div className="h-full bg-white w-full animate-[shimmer_3s_infinite] shadow-[0_0_20px_white]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Block */}
            <div className="mt-10 p-6 bg-black/80 rounded-xl border border-white/10 font-mono text-xs text-gray-400 shadow-inner">
              <div className="text-[10px] text-white/20 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">src/core/engine.ts</div>
              <div><span className="text-indigo-400">class</span> <span className="text-white">NodebaseEngine</span> {'{'}</div>
              <div className="pl-4 mt-1"><span className="text-gray-600 italic">// Sovereignty ensured via self-hosting</span></div>
              <div className="pl-4"><span className="text-purple-400">const</span> <span className="text-white">persistence</span> = <span className="text-purple-400">true</span>;</div>
              <div className="pl-4"><span className="text-purple-400">const</span> <span className="text-white">jaggedFrontierGuard</span> = <span className="text-purple-400">new</span> <span className="text-green-400">Helmet</span>();</div>
              <div>{'}'}</div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: THE SOLUTION (Proprietary Advantage) */}
        <div className="lg:col-span-7 space-y-10">

          {/* VIDEO EMBED: LIVE DEMO */}
          <div className="relative group overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
            {/* Header Bar */}
            <div className="absolute top-0 left-0 w-full h-12 bg-white/5 border-b border-white/10 flex items-center justify-between px-6 z-20 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 font-black">Live_Feed: Nodebase_Engine_v1</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity size={12} className="text-white/40" />
                <span className="font-mono text-[10px] text-white/40">REC</span>
              </div>
            </div>

            {/* Video Container */}
            <div className="relative w-full aspect-video mt-12">
              <iframe
                src="https://www.loom.com/embed/4d712e637e374bde8ab48bf28b09a3dd"
                frameBorder="0"
                allowFullScreen
                className="absolute inset-0 w-full h-full mix-blend-lighten opacity-90 group-hover:opacity-100 transition-opacity"
              ></iframe>
              {/* Scanline Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_4px,3px_100%] opacity-20"></div>
            </div>
          </div>

          {/* Static Invoice Integration */}
          <div className="flex justify-end -mt-8 relative z-30">
            <ProofOfWorkInvoice className="shadow-[0_20px_60px_rgba(0,0,0,0.5)]" />
          </div>

          <div className="flex items-center justify-between border-b border-white/10 pb-8 mb-2">
            <h3 className="font-serif italic text-4xl text-white leading-tight">
              <span className="block text-[10px] font-sans font-black text-indigo-400 uppercase tracking-[0.3em] mb-4">Solution_Vector</span>
              The Proprietary Advantage
            </h3>
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest hidden md:block">Ref: Agentic_Enterprise_Doc_v2025</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((adv, i) => (
              <div key={i} className={`p-8 rounded-[2rem] border bg-black/20 backdrop-blur-sm relative group hover:-translate-y-2 transition-transform duration-500 ${adv.color}`}>

                {/* Citation Badge */}
                <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] font-mono text-white/40 uppercase tracking-wider group-hover:text-white transition-colors group-hover:bg-white/10">
                  {adv.ref}
                </div>

                <div className="flex items-center gap-5 mb-8 relative z-10 pt-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border bg-black/40 group-hover:scale-110 transition-transform duration-500 ${adv.color} ${adv.glow}`}>
                    <adv.icon size={24} />
                  </div>
                </div>

                <h4 className="font-black text-sm uppercase tracking-[0.1em] text-white mb-4">{adv.title}</h4>
                <p className="text-gray-400 font-light text-lg leading-relaxed relative z-10 border-t border-white/5 pt-6 group-hover:text-gray-200 transition-colors">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Banner - Unconstrained Memory (Highlighted) */}
          <div className="mt-8 relative group overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 backdrop-blur-xl">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="p-10 flex flex-col md:flex-row items-center gap-10 relative z-10">

              <div className="relative">
                <div className="absolute inset-0 bg-indigo-500 blur-[60px] opacity-20 animate-pulse-slow"></div>
                <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center shrink-0 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] relative z-10">
                  <Database size={36} className="text-white" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-3">
                  <h4 className="font-black text-2xl text-white uppercase tracking-tight">Unconstrained Memory</h4>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[8px] text-white/60 uppercase tracking-[0.2em] font-bold mt-1">Proprietary_Graph</span>
                </div>
                <p className="text-xl text-gray-400 font-light leading-relaxed max-w-xl italic">
                  "Memory persists across months. True organizational context stored in our proprietary graph."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  );
};

export default NodebaseBlueprint;
