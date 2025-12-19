
import React, { useState } from 'react';
import {
  ArrowRight,
  Database,
  ShieldCheck,
  Terminal,
  Zap,
  BookOpen,
  ArrowUpRight,
  ShieldAlert,
  Search,
  Layout,
  Globe,
  Binary,
  // Added Users icon import to fix the "Cannot find name 'Users'" error
  Users,
  CheckCircle2
} from 'lucide-react';
import ProofOfWorkInvoice from './ProofOfWorkInvoice';

const Dashboard: React.FC = () => {
  const [leadCount, setLeadCount] = useState(1500);

  return (
    <div className="bg-transparent text-white selection:bg-white/20">
      {/* 1. HERO SECTION: THE AI DIVIDE */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black/20 text-white perspective-1000">
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] z-0 pointer-events-none mix-blend-screen opacity-40">
          <div className="relative w-full h-full animate-spin-slow">
            <svg className="w-full h-full" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="250" cy="200" rx="160" ry="100" stroke="white" strokeWidth="0.5" className="opacity-40" />
              <ellipse cx="200" cy="300" rx="160" ry="100" stroke="white" strokeWidth="0.5" className="opacity-40" transform="rotate(-60 200 300)" />
              <ellipse cx="300" cy="300" rx="160" ry="100" stroke="white" strokeWidth="0.5" className="opacity-40" transform="rotate(60 300 300)" />
              <circle cx="250" cy="250" r="220" stroke="white" strokeWidth="0.2" strokeDasharray="4 8" className="opacity-30" />
              <circle cx="250" cy="250" r="120" stroke="white" strokeWidth="0.2" strokeDasharray="12 12" className="opacity-20" />
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full blur-xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 pt-40 pb-20 flex flex-col justify-center min-h-[95vh] pointer-events-none text-center">
          <div className="max-w-7xl mx-auto pointer-events-auto">
            <div className="inline-flex items-center gap-3 mb-10 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
              <span className="mono text-[10px] uppercase tracking-[0.4em] font-black text-white/60 italic">Most Important Document of 2025</span>
            </div>
            <p className="font-serif italic text-white/50 text-2xl md:text-3xl mb-12 tracking-wide leading-relaxed">Bridging the AI Frontier for the 99%.</p>
            <h1 className="font-bold text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.9] tracking-tighter text-white mb-16 uppercase mix-blend-exclusion antialiased text-silver drop-shadow-2xl py-4">
              Where vision finds <br className="hidden md:block" />
              capital. And capital <br className="hidden md:block" />
              finds purpose.
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-16 mt-16">
              <p className="text-gray-400 text-2xl max-w-xl leading-tight font-light tracking-tight">
                The "Future of Work" isn't distributed evenly. We are operationalizing the SOPs to democratize <span className="text-white italic">Agentic AI</span> for the global SME economy.
              </p>
              <div className="flex gap-8">
                <button className="bg-white text-black px-14 py-7 rounded-full font-black hover:bg-neutral-200 transition-all flex items-center group uppercase tracking-[0.2em] text-xs shadow-[0_20px_60px_rgba(255,255,255,0.1)]">
                  View the Experiment <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" size={20} />
                </button>
                <button className="border border-white/20 text-white px-14 py-7 rounded-full font-black hover:bg-white/10 transition-all uppercase tracking-[0.2em] text-xs backdrop-blur-md">
                  Partner with the Lab
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE RESEARCH MISSION: THE EXPERIMENTATION PLATFORM */}
      <section className="py-48 bg-black/40 backdrop-blur-md border-y border-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-32">
            <div className="w-full lg:w-1/3">
              <span className="mono text-[10px] text-indigo-400 uppercase tracking-[0.6em] font-black block mb-10">The_Experimentation_Platform</span>
              <h2 className="font-serif italic text-5xl md:text-7xl text-white/90 leading-[1.0] tracking-tight">A Living Laboratory for the Future of Work.</h2>
              <div className="mt-12 p-6 bg-white/5 border-l-2 border-indigo-500 rounded-r-2xl">
                <p className="text-sm italic text-gray-400">"Theory predicts displacement. We generate the empirical data required for governance."</p>
              </div>
            </div>
            <div className="w-full lg:w-2/3 space-y-20">
              <p className="text-4xl text-gray-300 leading-[1.1] font-light tracking-tight italic">
                We are the <span className="text-white underline underline-offset-[12px] decoration-white/20">Ground Truth</span> testbed for the Agentic Economy. We deploy autonomous agents into real-world SME workflows to measure:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24 pt-20 border-t border-white/10">
                {[
                  { label: "Economic Displacement", icon: Globe, desc: "Rigorous longitudinal studies comparing the Cost of Human Labor vs. the Cost of Agentic Compute." },
                  { label: "The Jagged Frontier", icon: Binary, desc: "Precisely mapping the failure points of LLMs in messy, high-stakes commercial SME environments." },
                  { label: "Algorithmic Governance", icon: ShieldCheck, desc: "Developing auditable decision-paths for autonomous router agents—moving beyond the black box." },
                  { label: "Labor Decoupling", icon: Users, desc: "Testing the hypothesis of the 'Post-Labor Corporation' where output scales independently of headcount." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="mb-6 flex items-center gap-4">
                      <item.icon size={20} className="text-indigo-400 group-hover:scale-110 transition-transform" />
                      <h4 className="font-black text-white uppercase tracking-[0.2em] text-[10px] mono group-hover:text-silver">{item.label}</h4>
                    </div>
                    <p className="text-gray-400 font-light leading-relaxed text-xl group-hover:text-gray-200 transition-colors">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE ENGINE: NODEBASE */}
      <section className="py-48 bg-[#030303] relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.03),transparent_60%)]"></div>
        {/* Distant Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none"></div>

        <div className="max-w-[85rem] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">

            {/* LEFT COL: THE ACADEMIC THESIS */}
            <div className="lg:col-span-5 space-y-16 pt-12">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px] bg-indigo-500"></div>
                  <span className="mono text-[10px] text-indigo-400 uppercase tracking-[0.4em] font-black">Thesis_Layer_01</span>
                </div>
                <h3 className="text-6xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.85] text-white pr-12 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  The Anti-Google <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-600">Stack.</span>
                </h3>
                <p className="text-xl text-gray-500 mt-8 font-light italic leading-relaxed border-l-2 border-indigo-500/20 pl-6">
                  "Nodebase is not a product for sale. It is our <span className="text-white font-medium">Proprietary Execution Engine</span>."
                </p>
              </div>

              <div className="space-y-4">
                {/* Card 1: Durable Execution */}
                <div className="p-8 bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all duration-500 rounded-xl group/card relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/card:opacity-30 transition-opacity">
                    <Zap size={48} />
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="mt-1 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_red]"></div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-2">Why Off-the-Shelf Fails</h4>
                      <p className="text-sm text-gray-500 leading-relaxed font-mono">
                        Public pools (Zapier, Vertex AI) have <span className="text-red-400">30-minute timeouts</span> that kill agentic workflows. Our Inngest-powered orchestration ensures agents persist for days, waiting for human emails.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2: Sovereign Logic */}
                <div className="p-8 bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all duration-500 rounded-xl group/card relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/card:opacity-30 transition-opacity">
                    <Database size={48} />
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_indigo]"></div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-2">Sovereign Logic</h4>
                      <p className="text-sm text-gray-500 leading-relaxed font-mono">
                        We own the Context Engineering layer. Don't teach Google how to automate your law firm; <span className="text-indigo-400">keep that IP</span> in your self-hosted instance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3: The Helmet */}
                <div className="p-8 bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all duration-500 rounded-xl group/card relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/card:opacity-30 transition-opacity">
                    <ShieldAlert size={48} />
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="mt-1 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_green]"></div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-2">The Helmet</h4>
                      <p className="text-sm text-gray-500 leading-relaxed font-mono">
                        A "Psychological Safety" layer (Lakhani). Governance nodes intercept jagged edges before they impact production. The <span className="text-green-400">"Training Wheels"</span> for the Enterprise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COL: THE ENGINE VISUALIZATION (HIGH DEPTH) */}
            <div className="lg:col-span-7 h-[800px] relative perspective-[2000px]">
              {/* Floating Glass Container */}
              <div className="w-full h-full bg-[#080808]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl relative overflow-hidden transform rotate-y-[-2deg] transition-transform duration-1000 hover:rotate-y-[0deg]">

                {/* UI Header */}
                <div className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-black/20">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                    </div>
                    <div className="h-6 w-[1px] bg-white/10 mx-4"></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest">Nodebase_Engine</span>
                      <span className="text-[8px] font-mono text-gray-500">v1.5.0 (Sovereign)</span>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded text-[9px] text-indigo-400 font-mono tracking-wider flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></div>
                    LIVE_CONNECTION
                  </div>
                </div>

                {/* Main Canvas */}
                <div className="absolute inset-0 top-16 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:20px_20px]">

                  {/* Blurred Distant Nodes (Parallax Layer) */}
                  <div className="absolute inset-0 pointer-events-none opacity-20 blur-[2px] scale-90">
                    <div className="absolute top-[200px] right-[100px] w-40 h-24 bg-white/5 border border-white/5 rounded-xl"></div>
                    <div className="absolute bottom-[100px] left-[100px] w-32 h-20 bg-white/5 border border-white/5 rounded-xl"></div>
                  </div>

                  {/* Grid Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                    <defs>
                      <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                        <stop offset="50%" stopColor="#6366f1" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="300" x2="1000" y2="300" stroke="url(#grid-grad)" strokeWidth="1" />
                    <line x1="0" y1="500" x2="1000" y2="500" stroke="url(#grid-grad)" strokeWidth="1" />
                  </svg>

                  {/* Connection Paths */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <path d="M180 300 C 250 300, 250 300, 320 300" stroke="white" strokeWidth="2" strokeOpacity="0.1" fill="none" />
                    <path d="M480 300 C 550 300, 550 400, 620 500" stroke="white" strokeWidth="2" strokeOpacity="0.1" fill="none" />

                    {/* Animated Data Packets */}
                    <circle r="3" fill="#6366f1">
                      <animateMotion dur="3s" repeatCount="indefinite" path="M180 300 C 250 300, 250 300, 320 300" />
                    </circle>
                    <circle r="3" fill="#6366f1">
                      <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M480 300 C 550 300, 550 400, 620 500" />
                    </circle>
                  </svg>

                  {/* ACTIVE NODES */}

                  {/* Node 1: Webhook */}
                  <div className="absolute top-[260px] left-[60px] w-48 bg-[#0F0F0F] border border-white/10 rounded-xl shadow-2xl p-5 hover:border-indigo-500/50 transition-colors cursor-pointer group/node">
                    <div className="absolute -top-3 left-4 px-2 py-0.5 bg-[#0F0F0F] border border-white/10 rounded text-[9px] text-gray-400 font-mono tracking-wider uppercase font-bold group-hover/node:text-indigo-400 group-hover/node:border-indigo-500/50 transition-colors">Trigger</div>
                    <div className="flex justify-between items-center mb-4 mt-2">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                        <Zap size={18} className="text-white/40 group-hover/node:text-indigo-400 transition-colors" />
                      </div>
                    </div>
                    <div className="font-bold text-sm text-gray-200">Webhook_In</div>
                    <div className="text-[10px] font-mono text-gray-600 mt-1">/api/v1/smart_funnel</div>
                  </div>

                  {/* Node 2: The Agent (Central) */}
                  <div className="absolute top-[240px] left-[320px] w-64 bg-[#121212] border border-indigo-500/30 rounded-2xl shadow-[0_0_50px_rgba(99,102,241,0.1)] p-6 z-20 hover:scale-105 transition-transform duration-300">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 rounded-full text-[10px] text-white font-bold tracking-widest shadow-lg shadow-indigo-500/30">AI_WORKER</div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 shadow-inner">
                        <ShieldCheck size={24} className="text-indigo-400" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">Lead_Qualifier</div>
                        <div className="text-[10px] font-mono text-indigo-400">gpt-4o-2024-05-13</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {/* Context Visualizer */}
                      <div className="bg-black/40 rounded-lg p-3 border border-white/5 space-y-2">
                        <div className="flex justify-between text-[9px] text-gray-500 uppercase font-mono">
                          <span>Context_Window</span>
                          <span className="text-white">14.2k / 128k</span>
                        </div>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full w-[12%] bg-indigo-500"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-[10px] text-gray-500 font-mono">Status:</span>
                        <span className="text-[10px] text-green-400 font-mono animate-pulse">Running_Reasoning_Chain...</span>
                      </div>
                    </div>
                  </div>

                  {/* Node 3: Governance */}
                  <div className="absolute top-[440px] left-[620px] w-52 bg-[#0F0F0F] border border-white/10 rounded-xl shadow-2xl p-5 hover:border-green-500/50 transition-colors cursor-pointer group/node">
                    <div className="absolute -top-3 left-4 px-2 py-0.5 bg-[#0F0F0F] border border-white/10 rounded text-[9px] text-gray-400 font-mono tracking-wider uppercase font-bold group-hover/node:text-green-400 group-hover/node:border-green-500/50 transition-colors">The_Helmet</div>
                    <div className="flex justify-between items-center mb-4 mt-2">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                        <ShieldAlert size={18} className="text-white/40 group-hover/node:text-green-400 transition-colors" />
                      </div>
                    </div>
                    <div className="font-bold text-sm text-gray-200">Governance_Log</div>
                    <div className="text-[10px] font-mono text-gray-600 mt-1">Audit_Trail: #88219</div>
                  </div>

                  {/* Code Snippet Overlay (Decoration) */}
                  <div className="absolute top-10 right-10 w-64 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-4 font-mono text-[9px] text-gray-500 leading-relaxed pointer-events-none opacity-60">
                    <div className="mb-2 text-white/20 border-b border-white/5 pb-1">src/agents/negotiator.ts</div>
                    <span className="text-purple-400">const</span> <span className="text-blue-400">decision</span> = <span className="text-purple-400">await</span> agent.<span className="text-yellow-400">run</span>(&#123;<br />
                    &nbsp;&nbsp;context: <span className="text-green-400">'smart_funnel'</span>,<br />
                    &nbsp;&nbsp;guardrails: <span className="text-blue-400">true</span>,<br />
                    &nbsp;&nbsp;model: <span className="text-green-400">'claude-3-5-sonnet'</span><br />
                    &#125;);
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE PIVOT: FROM TOOLING TO OPERATIONS */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-black border-y border-white/5">
        <div className="bg-[#f0f0f0] text-black p-12 md:p-24 flex flex-col justify-center">
          <span className="mono text-[10px] font-black uppercase tracking-[0.8em] mb-8 text-black/40">The Legacy State</span>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-10 leading-[0.8] italic pr-24">The <br />Wrapper <br />Trap.</h3>
          <p className="text-3xl text-black/60 leading-snug font-light mb-24 max-w-xl tracking-tighter">
            Building "Copilots" for humans is a solved problem. Frontier models have commoditized the enabler layer. Selling shovel seats in a race to the bottom is strategic suicide.
          </p>
          <div className="w-40 h-[1.5px] bg-black/10"></div>
        </div>
        <div className="bg-black text-white p-12 md:p-24 flex flex-col justify-center relative overflow-hidden border-l border-white/10">
          <div className="absolute inset-0 bg-white/5 blur-[250px] rounded-full translate-x-1/2 translate-y-1/2 opacity-30"></div>
          <span className="mono text-[10px] font-black uppercase tracking-[0.8em] mb-8 text-white/40">Strategic_Pivot</span>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-10 leading-[0.8] text-silver italic pr-24">The <br />Agentic <br />Operator.</h3>
          <p className="text-3xl text-white/70 leading-snug font-light mb-24 max-w-xl tracking-tighter">
            We don't sell software seats. We operate "AI Employees". We convert messy, human-heavy SME operations into clean, auditable software margins via the Lab's execution engine.
          </p>
          <div className="w-40 h-[1.5px] bg-white/10"></div>
        </div>
      </section>

      {/* 5. METHODOLOGY: THE TRANSFORMATION PYRAMID */}
      <section className="py-48 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="mono text-[10px] text-white/40 uppercase tracking-[0.8em] font-black block mb-12">The_Execution_Framework</span>
          <h3 className="text-6xl md:text-7xl font-bold uppercase tracking-tight mb-40 text-silver italic leading-none px-8">Transformation Pyramid</h3>

          <div className="relative flex flex-col items-center">
            {[
              { label: "04 Innovation", sub: "Business Model: The Post-Labor Corp", color: "bg-white text-black border-white shadow-[0_0_60px_rgba(255,255,255,0.1)]", w: "w-56", h: "min-h-28" },
              { label: "03 Execution", sub: "Process Automation: Active SME Ops", color: "bg-neutral-200 text-black border-neutral-200", w: "w-[400px]", h: "min-h-32" },
              { label: "02 Enabler", sub: "Infrastructure: Sovereign Agent Engine", color: "bg-neutral-500 text-black border-neutral-500", w: "w-[650px]", h: "min-h-36" },
              { label: "01 Foundation", sub: "Culture: The Lab SOP Mindset", color: "bg-neutral-800 text-white border-neutral-800", w: "w-[900px]", h: "min-h-44" }
            ].map((layer, idx) => (
              <div key={idx} className={`${layer.w} ${layer.h} ${layer.color} border flex flex-col items-center justify-center transition-all duration-500 hover:scale-[1.04] hover:z-30 cursor-default group relative shadow-2xl p-6`}>
                <span className="text-[11px] mono uppercase tracking-[0.4em] font-black opacity-40 mb-3">{layer.label}</span>
                <span className="font-bold text-xl md:text-2xl uppercase tracking-tighter italic text-center leading-tight">{layer.sub}</span>
                {idx === 0 && (
                  <div className="absolute -top-32 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <span className="text-[10px] font-black text-white mono animate-pulse tracking-[0.5em] uppercase whitespace-nowrap">Target_Innovation_Zone</span>
                    <div className="w-[1.5px] h-16 bg-white/40 mt-4"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* New Section: Strategic Acquisitions Pipeline */}
          <div className="mt-40 border-t border-white/10 pt-20">
            <span className="mono text-[10px] text-indigo-400 uppercase tracking-[0.8em] font-black block mb-20 animate-pulse">Active_Acquisitions_Pipeline</span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {/* Asset 01 */}
              <div className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-indigo-500/50 transition-all group hover:-translate-y-2 duration-500">
                <div className="flex justify-between items-start mb-8">
                  <span className="mono text-[9px] text-white/30 uppercase tracking-widest group-hover:text-indigo-400 transition-colors">Asset_01 // Nodebase_Core</span>
                  <Terminal size={20} className="text-white/20 group-hover:text-indigo-400 transition-colors" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 italic">Workflow Engine</h4>
                <p className="text-xs text-gray-500 mono uppercase tracking-wider mb-8">Source: N8N Closed Source Clone</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] mono uppercase text-white/40">
                    <span>Ingestion_Status</span>
                    <span>98%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 w-[98%] shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                  </div>
                </div>
              </div>

              {/* Asset 02 */}
              <div className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-indigo-500/50 transition-all group hover:-translate-y-2 duration-500 delay-100">
                <div className="flex justify-between items-start mb-8">
                  <span className="mono text-[9px] text-white/30 uppercase tracking-widest group-hover:text-indigo-400 transition-colors">Asset_02 // CS_Automaton</span>
                  <ShieldCheck size={20} className="text-white/20 group-hover:text-indigo-400 transition-colors" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 italic">B2B Support Ops</h4>
                <p className="text-xs text-gray-500 mono uppercase tracking-wider mb-8">Source: Support Platform</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] mono uppercase text-white/40">
                    <span>Ingestion_Status</span>
                    <span>45%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 w-[45%]"></div>
                  </div>
                </div>
              </div>

              {/* Asset 03 */}
              <div className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-indigo-500/50 transition-all group hover:-translate-y-2 duration-500 delay-200">
                <div className="flex justify-between items-start mb-8">
                  <span className="mono text-[9px] text-white/30 uppercase tracking-widest group-hover:text-indigo-400 transition-colors">Asset_03 // Product_Gen</span>
                  <Layout size={20} className="text-white/20 group-hover:text-indigo-400 transition-colors" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 italic">AI Site Builder</h4>
                <p className="text-xs text-gray-500 mono uppercase tracking-wider mb-8">Source: Lovable Clone</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] mono uppercase text-white/40">
                    <span>Ingestion_Status</span>
                    <span>12%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 w-[12%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-20 text-gray-500 italic text-lg max-w-2xl mx-auto font-light">
              "We acquire legacy SaaS codebases not to sell them, but to <span className="text-white font-normal">cannibalize their logic</span> into the Nodebase engine."
            </p>
          </div>
        </div>
      </section>

      {/* 6. PROOF OF WORK: ROI SIMULATOR */}
      <section className="py-48 bg-black/40 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
            <div className="space-y-20">
              <div>
                <span className="mono text-[10px] text-white/40 uppercase tracking-[0.8em] font-black block mb-10">Arbitrage_Measurement</span>
                <h3 className="text-7xl font-bold tracking-tighter uppercase leading-[0.85] italic text-silver">Feel the <br />Margins.</h3>
              </div>
              <p className="text-3xl text-gray-500 leading-tight font-light max-w-xl tracking-tight">
                Empirical data shows the divergence between human agency scaling and compute-based autonomy. This is the structural arbitrage we are documenting.
              </p>

              <div className="p-16 bg-white/5 rounded-[3rem] border border-white/10 space-y-16 backdrop-blur-xl">
                <div className="space-y-10">
                  <div className="flex justify-between font-black mono text-[11px] uppercase tracking-[0.6em]">
                    <span>Scaling_Units (Leads)</span>
                    <span className="text-white text-3xl tracking-tighter italic">{leadCount.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="50000"
                    step="100"
                    value={leadCount}
                    onChange={(e) => setLeadCount(Number(e.target.value))}
                  />
                </div>
              </div>

              <ProofOfWorkInvoice className="absolute -right-8 top-0 transform rotate-6 hover:rotate-0 transition-transform duration-300 z-20" />

            </div>

            <div className="bg-black border border-white/10 p-10 md:p-12 rounded-[3rem] space-y-12 shadow-[0_50px_150px_rgba(0,0,0,0.6)] relative overflow-hidden backdrop-blur-3xl">
              <div className="absolute top-0 right-0 p-16 opacity-[0.05]"><Binary size={400} /></div>

              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <span className="mono text-[10px] text-white/30 uppercase font-black tracking-[0.5em]">Human_Agency_Cost (Linear)</span>
                  <span className="font-bold text-2xl md:text-3xl text-red-500/50 tracking-tighter italic">${(leadCount * 18).toLocaleString()}</span>
                </div>
                <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden">
                  <div className="bg-red-700/60 h-full transition-all duration-700 ease-out shadow-[0_0_30px_rgba(220,38,38,0.2)]" style={{ width: `${Math.min(100, (leadCount / 50000) * 100)}%` }}></div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <span className="mono text-[10px] text-white/30 uppercase font-black tracking-[0.5em]">Lab_Compute_Cost (Logarithmic)</span>
                  <span className="font-bold text-2xl md:text-3xl text-white tracking-tighter italic">${Math.round(800 + Math.log10(leadCount) * 600).toLocaleString()}</span>
                </div>
                <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden">
                  <div className="bg-white/60 h-full transition-all duration-700 ease-out shadow-[0_0_30px_rgba(255,255,255,0.2)]" style={{ width: `${(Math.log10(leadCount) / Math.log10(50000)) * 75}%` }}></div>
                </div>
              </div>

              <div className="pt-10 border-t border-white/10 flex flex-wrap items-end justify-between gap-4">
                <div className="min-w-0">
                  <span className="block mono text-[10px] text-white/20 uppercase font-black tracking-[0.5em] mb-2">Profit_Arbitrage</span>
                  <span className="text-3xl md:text-5xl font-bold text-white tracking-tighter italic drop-shadow-lg break-all">
                    ${Math.max(0, (leadCount * 18) - (800 + Math.log10(leadCount) * 600)).toLocaleString()}
                  </span>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <div className="px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] rounded-xl shadow-2xl whitespace-nowrap">Software_Margins</div>
                  <div className="px-5 py-2 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-xl whitespace-nowrap">Service_Arbitrage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FIELD NOTES: BROADCASTING THE EXPERIMENT */}
      <section className="py-48">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-40 gap-16">
            <div className="max-w-2xl">
              <span className="mono text-[10px] text-white/40 uppercase tracking-[0.8em] font-black block mb-10">Public_Scholarship</span>
              <h3 className="text-6xl font-bold uppercase tracking-tighter text-silver leading-[0.85] italic">Broadcasting <br />the Experiment.</h3>
            </div>
            <p className="text-gray-500 text-3xl max-w-md border-l-2 border-white/10 pl-16 font-light leading-tight tracking-tighter">
              A Research Lab must publish to influence the standard. We document the messy reality of the <span className="text-white">Jagged Frontier</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              { type: "Empirical_Note", title: "The Day the Router Failed: Lessons from the Jagged Frontier", icon: BookOpen, date: "Q4_2024" },
              { type: "Technical_SOP", title: "Open Sourcing the Governance Node and Audit Logic", icon: Terminal, date: "Q4_2024" },
              { type: "Case_Study", title: "Bicycle for the SME: Operational Proof of Agentic ROI", icon: Search, date: "Q1_2025" }
            ].map((n, i) => (
              <div key={i} className="group cursor-pointer flex flex-col h-full bg-white/5 p-16 rounded-[3.5rem] border border-white/5 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-700 hover:shadow-2xl">
                <div className="aspect-square bg-black border border-white/10 rounded-3xl mb-16 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-all duration-700">
                  <n.icon size={80} className="text-white/10 group-hover:text-white transition-all duration-700 opacity-40 group-hover:opacity-100" />
                  <div className="absolute top-10 right-10 mono text-[10px] text-white/30 font-black tracking-widest">{n.date}</div>
                </div>
                <span className="mono text-[10px] text-indigo-400 uppercase font-black block mb-8 tracking-[0.6em]">{n.type}</span>
                <h4 className="text-4xl font-bold leading-[1.05] group-hover:text-silver transition-all pr-12 tracking-tighter italic">{n.title}</h4>
                <div className="mt-auto pt-12 flex items-center gap-4">
                  <div className="w-12 h-[1.5px] bg-white/20 group-hover:w-full transition-all duration-1000"></div>
                  <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. THE COALITION: THE ASK */}
      <section className="py-72 bg-white text-black relative overflow-hidden group">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none flex items-center justify-center">
          <Binary size={1200} className="text-black group-hover:rotate-12 group-hover:scale-110 transition-all duration-1500" />
        </div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-20 leading-[0.8] italic">
            A Call for <br />Principal Investigators.
          </h3>
          <p className="text-4xl text-black/60 mb-24 max-w-3xl mx-auto leading-[1.1] font-light tracking-tighter italic">
            We have the engine. We have the data. We have the ambition. We are seeking partners to lead this "Experimentation Platform" into a full-scale research program.
          </p>
          <button className="bg-black text-white px-24 py-10 rounded-full font-black text-3xl hover:bg-neutral-900 transition-all shadow-[0_40px_100px_rgba(0,0,0,0.4)] uppercase tracking-[0.4em] italic">
            Request Dossier
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-40 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-32 mb-40">
            <div className="flex flex-col gap-16">
              <div className="flex items-center gap-8">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                  <Zap size={30} className="text-black fill-black" />
                </div>
                <span className="font-bold tracking-tighter text-4xl uppercase italic">Open Research Lab</span>
              </div>
              <p className="text-gray-500 text-base mono uppercase tracking-[0.6em] font-black max-w-sm leading-relaxed italic">
                Bridging the Gap between <br />Theory and Execution.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-32 lg:gap-56">
              <div className="space-y-10">
                <h5 className="mono text-[10px] text-white/30 uppercase font-black tracking-[0.6em]">PLATFORM</h5>
                <ul className="space-y-8 text-xs font-black uppercase tracking-[0.3em] text-gray-500">
                  <li><a href="#" className="hover:text-white transition-colors">OS_Architecture</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Operational_SOPs</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Governance_Nodes</a></li>
                </ul>
              </div>
              <div className="space-y-10">
                <h5 className="mono text-[10px] text-white/30 uppercase font-black tracking-[0.6em]">ACADEMIC</h5>
                <ul className="space-y-8 text-xs font-black uppercase tracking-[0.3em] text-gray-500">
                  <li><a href="#" className="hover:text-white transition-colors">Grant_Access</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">PI_Inquiries</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Empirical_Logs</a></li>
                </ul>
              </div>
              <div className="hidden md:block space-y-10">
                <h5 className="mono text-[10px] text-white/30 uppercase font-black tracking-[0.6em]">NETWORK</h5>
                <div className="flex items-center gap-5 group cursor-default">
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] transition-all animate-pulse"></div>
                  <span className="text-[11px] mono font-black text-gray-500 uppercase tracking-[0.2em] italic">Grid_Active // Paris-Oxford</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-16">
            <span className="text-[11px] mono text-white/10 uppercase tracking-[1.0em] italic font-black">©2024 OPEN_RESEARCH_LAB // POST_LABOR_OS_V1.5</span>
            <div className="flex gap-20">
              <a href="#" className="text-white/10 hover:text-white transition-all transform hover:scale-125"><ArrowUpRight size={28} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
