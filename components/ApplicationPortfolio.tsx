import React, { useState } from 'react';
import { Briefcase, Building, GraduationCap, Rocket, Globe, FileText, ExternalLink, ChevronDown, CheckCircle2, Target, ArrowRight, Lock } from 'lucide-react';
import ProofOfWorkInvoice from './ProofOfWorkInvoice';
import GovernanceConsole from './GovernanceConsole';

const ApplicationPortfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>('executive_summary');

  const toggleSection = (id: string) => {
    setActiveSection(activeSection === id ? null : id);
  };

  const bids = [
    {
      title: "Oxford Martin School",
      subtitle: "Target Program: AI & Work",
      icon: Building,
      color: "bg-blue-500/10 border-blue-500/20 text-blue-400",
      glow: "shadow-[0_0_30px_rgba(59,130,246,0.15)]",
      status: "Strategic Objective",
      quote: "Seeking to solve the 'AI Divide' by operationalizing Agentic SOPs for the global SME economy. A solutions-focused research program applying GenAI to empirical challenges.",
      meta: [
        { label: "Target", value: "Research Fellowship / Grant" },
        { label: "Mechanism", value: "Novel use of sovereign N8N engines for empirical data" }
      ]
    },
    {
      title: "Mistral AI Global Leaders",
      subtitle: "Paris Cohort (Pending)",
      icon: Globe,
      color: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
      glow: "shadow-[0_0_30px_rgba(234,179,8,0.15)]",
      status: "Application in Preparation",
      quote: "Bridging foundational research and real-world impact. Deploying agentic workflows on high-performance open-source models.",
      meta: [
        { label: "Track", value: "Fine-tuning & Agentic Orchestration" },
        { label: "Validation", value: "Moat.ai MVP & Smart Funnel Revenue" }
      ]
    },
    {
      title: "Oxford MSc AI for Business",
      subtitle: "Governance Structure",
      icon: GraduationCap,
      color: "bg-purple-500/10 border-purple-500/20 text-purple-400",
      glow: "shadow-[0_0_30px_rgba(168,85,247,0.15)]",
      status: "Academic Target",
      quote: "Not applying to learn AI, but to govern an autonomous organization. Seeking the academic framework to manage the impact of 'AI Factories' on labor.",
      meta: [
        { label: "Goal", value: "From Centaur (Sequential) to Cyborg (Simultaneous)" },
        { label: "Thesis", value: "Formalizing the 'AI Factory' Methodology" }
      ]
    },
    {
      title: "O'Shaughnessy Fellowship",
      subtitle: "$100K Moonshot Grant",
      icon: Rocket,
      color: "bg-red-500/10 border-red-500/20 text-red-400",
      glow: "shadow-[0_0_30px_rgba(239,68,68,0.15)]",
      status: "Project Proposal",
      quote: "Building the prototype for the one-person, $10M revenue company. Replacing administrative process with sovereign software entirely.",
      meta: [
        { label: "Pitch", value: "The Agentic Enterprise: Operationalizing the 'One-Person Unicorn'." },
        { label: "Vision", value: "Post-Labor Corporation Prototype" }
      ]
    }
  ];

  const videos = [
    { id: '6b2ef8fb5f7b4b28b525753f145fb249', title: 'Repo Acquisition 001' },
    { id: '67a1a673af28422fb6a36be8543a8c33', title: 'Repo Acquisition 002' },
    { id: '4d712e637e374bde8ab48bf28b09a3dd', title: 'Repo Acquisition 003' }
  ];

  const roadmapPhases = [
    {
      phase: "Phase 1: Bootstrap",
      time: "Months 1-3",
      focus: "Scale Smart Funnel & Productize N8N Workflows",
      items: ["Package N8N Lead Qual. as productized service [EXECUTED: $4,500 Setup Fee Sold]", "Generate 'Field Notes' data"]
    },
    {
      phase: "Phase 2: Lab Infrastructure",
      time: "Months 4-9",
      focus: "Research Publication & Academic Alignment",
      items: ["Publish 'Jagged Frontier' findings", "Submit Oxford & Fellowship applications", "Re-engage Dr. Lakhani with empirical data"]
    },
    {
      phase: "Phase 3: Rocketable Flight",
      time: "Months 10+",
      focus: "Asset Acquisition & Autonomous Operation",
      items: ["Acquire first fully autonomous asset", "Replace human functions with Lab's pre-built agents", "Achieve 'One-Person, $10M' status"]
    }
  ];

  return (
    <div className="min-h-full bg-black/20 text-white p-8 relative overflow-hidden font-sans selection:bg-white/20 perspective-1000">

      {/* Background Ambience */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] z-0 pointer-events-none mix-blend-screen opacity-10">
        <div className="relative w-full h-full animate-spin-slow">
          <svg className="w-full h-full" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="240" stroke="white" strokeWidth="0.1" strokeDasharray="2 4" />
            <ellipse cx="250" cy="250" rx="180" ry="100" stroke="white" strokeWidth="0.2" className="opacity-30" />
          </svg>
        </div>
      </div>

      {/* Header Section */}
      <header className="relative z-10 mb-20 border-b border-white/10 pb-12 pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center gap-3 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                <FileText size={12} className="text-white/60" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 font-black italic">Strategic_Paper_2025</span>
              </div>
              <div className="h-[1px] flex-1 bg-white/20 w-16"></div>
              <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">Version 1.0</span>
            </div>

            <h1 className="font-bold text-5xl md:text-7xl leading-[0.9] tracking-tighter text-white uppercase mix-blend-exclusion antialiased text-silver drop-shadow-2xl mb-8">
              The Agentic <br />
              <span className="text-white">Enterprise.</span>
            </h1>

            <p className="font-serif italic text-white/60 text-xl max-w-2xl leading-relaxed">
              "Operationalizing Autonomous Systems through the Open Research Lab Model."
            </p>
            <div className="mt-8 flex items-center gap-6 border-l-2 border-white/20 pl-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-white/10 overflow-hidden p-1">
                  <img src="/university-of-oxford-logo-1.webp" alt="Oxford University" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="font-serif italic text-white/80 text-lg leading-none mb-1">Caryl Obam</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">Undergraduate Student in Information Technology System Analysis and Design</p>
                </div>
              </div>
              <div className="h-8 w-[1px] bg-white/10"></div>
              <div>
                <p className="font-serif italic text-white/60 text-sm leading-none mb-1">Oxford University</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-green-400">Current Status: Active Student</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="relative z-10 max-w-5xl mx-auto mb-12">
        <div className="flex gap-4 justify-center md:justify-start">
          <button
            onClick={() => setActiveSection('executive_summary')}
            className={`px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeSection === 'executive_summary'
              ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]'
              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
          >
            Portfolio_Overview
          </button>

          <button
            onClick={() => setActiveSection('governance')}
            className={`px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeSection === 'governance'
              ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]'
              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
          >
            Governance_Console
          </button>
        </div>
      </div>

      {/* 1. EXECUTIVE SUMMARY (ABSTRACT) */}
      {activeSection === 'executive_summary' && (
        <>
          <div className="relative z-10 max-w-4xl mb-24 mx-auto md:mx-0">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden group">
              {/* Abstract Decor */}
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <FileText size={100} className="text-white" />
              </div>

              <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Abstract
              </h3>
              <p className="font-serif text-lg leading-relaxed text-gray-300 mb-6 relative z-10">
                The global digital economy is transitioning from the <span className="text-white font-medium italic">"Copilot"</span> era to the <span className="text-white font-medium italic">"Agentic"</span> era. This report articulates a rigorous strategic pivot from Moat.ai to an Open Research Lab—a hybrid operational model inspired by the "AI maximalist" holding company structure.
              </p>
              <p className="font-serif text-lg leading-relaxed text-gray-300 relative z-10">
                Our central thesis posits that the "Jagged Frontier" of AI capabilities creates a transient arbitrage opportunity for organizations that can encapsulate tasks into autonomous "AI Factories," effectively converting service revenue into software margins.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                {['Agentic Systems', 'Institutional Economics', 'Sovereign AI', 'Labor Automation'].map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-black/40 border border-white/10 rounded text-[10px] uppercase tracking-wider text-gray-400 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 2. THE FUNDING BIDS (GRANT PORTFOLIO) */}
          <div className="relative z-10 mb-32">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-12">
              <div className="flex items-center gap-4">
                <Target size={20} className="text-indigo-400" />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-indigo-400 font-bold block">Strategic Targets</span>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Active Applications & Objectives</h3>
                </div>
              </div>
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest hidden md:block">Status: In Preparation</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {bids.map((bid, i) => (
                <div key={i} className={`p-8 rounded-[2rem] border bg-black/40 backdrop-blur-md relative group hover:-translate-y-2 transition-transform duration-500 overflow-hidden ${bid.color.split(' ')[1]}`}>
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 ${bid.color.split(' ')[0]}`}></div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border bg-black/50 ${bid.color} ${bid.glow}`}>
                        <bid.icon size={20} />
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono uppercase tracking-widest text-white/50 mb-1">
                          <Lock size={8} /> {bid.status}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-serif italic text-2xl text-white mb-1">{bid.title}</h3>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-6">{bid.subtitle}</div>

                    <blockquote className="border-l-2 border-white/10 pl-4 py-1 mb-8">
                      <p className="text-sm font-light leading-relaxed text-gray-300 italic">"{bid.quote}"</p>
                    </blockquote>

                    <div className="space-y-3 pt-6 border-t border-white/5">
                      {bid.meta.map((m, j) => (
                        <div key={j} className="flex justify-between items-center text-[10px] font-mono">
                          <span className="text-gray-500 uppercase tracking-wider">{m.label}</span>
                          <span className="text-white/80 text-right max-w-[60%]">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. THE ACADEMIC PAPER CONTENT (COLLAPSIBLE) */}
          <div className="relative z-10 max-w-5xl mx-auto pt-8 mb-32">
            <div className="mb-12 text-center md:text-left border-l-4 border-indigo-500 pl-8">
              <h2 className="font-bold text-4xl text-white uppercase tracking-tighter mix-blend-exclusion text-silver mb-4">Research & Strategy</h2>
              <p className="font-serif italic text-gray-400">
                Primary Source: "The Agentic Enterprise" (Draft v1.0)
              </p>
            </div>

            <div className="space-y-2">
              {/* Macro-Strategic Thesis */}
              <div className="border border-white/10 rounded-sm overflow-hidden bg-black/40">
                <button
                  onClick={() => toggleSection('macro')}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors group"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <span className="font-mono text-indigo-500 text-xs">01</span>
                    <span className="font-bold text-xl text-white uppercase tracking-tight group-hover:text-silver transition-colors">The Macro-Strategic Thesis</span>
                  </div>
                  <ChevronDown size={20} className={`text-white/40 transition-transform ${activeSection === 'macro' ? 'rotate-180' : ''}`} />
                </button>
                {activeSection === 'macro' && (
                  <div className="px-8 py-8 border-t border-white/10 bg-black/60 font-serif text-gray-300 leading-relaxed space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-8">
                      <div>
                        <p className="mb-4">
                          <strong className="text-white font-sans text-xs uppercase tracking-wider block mb-2">From Augmentation to Autonomy</strong>
                          To understand the strategic necessity of this pivot, one must first ground the operational model in the academic rigor of modern AI strategy. The philosophy driving the Open Research Lab is deeply rooted in the work of Dr. Karim Lakhani at Harvard Business School, particularly his concepts of the "Jagged Frontier," the "AI Factory," and the metaphor of the "Bicycle for the Mind."
                        </p>
                        <p className="pl-6 border-l-2 border-indigo-500/30 text-white/80 italic">
                          "Unlike a traditional startup, which is pressured to project perfection to investors, a Research Lab is expected to experiment, fail, and iterate."
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div className="bg-white/5 p-4 rounded text-[10px] font-mono text-gray-400">
                          <strong className="block text-white mb-2 uppercase">Key Concepts</strong>
                          <ul className="space-y-1">
                            <li>• Jagged Frontier</li>
                            <li>• AI Factory</li>
                            <li>• Psychological Safety</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Strategic Pivot */}
              <div className="border border-white/10 rounded-sm overflow-hidden bg-black/40">
                <button
                  onClick={() => toggleSection('pivot')}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors group"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <span className="font-mono text-indigo-500 text-xs">02</span>
                    <span className="font-bold text-xl text-white uppercase tracking-tight group-hover:text-silver transition-colors">The Strategic Pivot</span>
                  </div>
                  <ChevronDown size={20} className={`text-white/40 transition-transform ${activeSection === 'pivot' ? 'rotate-180' : ''}`} />
                </button>
                {activeSection === 'pivot' && (
                  <div className="px-8 py-8 border-t border-white/10 bg-black/60 font-serif text-gray-300 leading-relaxed space-y-6">
                    <p>
                      <strong className="text-white font-sans text-xs uppercase tracking-wider block mb-2">From Moat.ai to Open Research Lab</strong>
                      The pivot shifts the business model from selling shovels to selling digging. It moves from a B2C/B2B SaaS model to a high-leverage "Holding Company" model. The "Open Research Lab" branding allows the founder to be a "Researcher-Entrepreneur," a persona highly valued by Dr. Lakhani and the OSV selection committee.
                    </p>
                  </div>
                )}
              </div>

              {/* Technical Architecture */}
              <div className="border border-white/10 rounded-sm overflow-hidden bg-black/40">
                <button
                  onClick={() => toggleSection('tech')}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors group"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <span className="font-mono text-indigo-500 text-xs">03</span>
                    <span className="font-bold text-xl text-white uppercase tracking-tight group-hover:text-silver transition-colors">Technical Architecture</span>
                  </div>
                  <ChevronDown size={20} className={`text-white/40 transition-transform ${activeSection === 'tech' ? 'rotate-180' : ''}`} />
                </button>
                {activeSection === 'tech' && (
                  <div className="px-8 py-8 border-t border-white/10 bg-black/60 font-serif text-gray-300 leading-relaxed space-y-6">
                    <p>
                      <strong className="text-white font-sans text-xs uppercase tracking-wider block mb-2">The 'Nate Herk' Automation Protocol</strong>
                      To operationalize this vision, the Open Research Lab utilizes a specific technical stack centered on N8N, Make, and Large Language Models (LLMs). This corresponds to the "Data Pipeline" component of the AI Factory.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      {[
                        { phase: "Phase 1", title: "Mapping", desc: "Process Mapping & Trigger Identification" },
                        { phase: "Phase 2", title: "Orchestration", desc: "N8N Architecture (The Nervous System)" },
                        { phase: "Phase 3", title: "Context", desc: "Context Engineering & Vector Storage" }
                      ].map((p, i) => (
                        <div key={i} className="p-4 bg-white/5 border border-white/10 rounded">
                          <div className="text-[9px] font-mono text-indigo-400 uppercase mb-1">{p.phase}</div>
                          <div className="font-bold text-white text-sm mb-2">{p.title}</div>
                          <p className="text-xs text-gray-400 leading-tight">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 4. EXECUTION ROADMAP */}
          <div className="relative z-10 mb-32">
            <div className="flex items-center justify-between border-b border-white/10 pb-8 mb-12">
              <h3 className="font-bold text-4xl text-white uppercase tracking-tighter mix-blend-exclusion text-silver">
                Execution Roadmap <br />
                <span className="text-white/40 text-2xl tracking-normal normal-case font-serif italic">The Entrepreneurial Path</span>
              </h3>
            </div>

            <div className="relative">
              {/* Connector Line */}
              <div className="absolute top-[2rem] left-0 md:left-1/2 w-1 md:w-full h-full md:h-1 bg-white/10 -z-10 transform md:-translate-x-1/2"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {roadmapPhases.map((phase, i) => (
                  <div key={i} className="relative group">
                    <div className="mb-6 flex flex-col items-center text-center">
                      <div className="w-4 h-4 rounded-full bg-black border-2 border-indigo-500 relative z-10 mb-4 group-hover:scale-150 transition-transform duration-300">
                        <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-50"></div>
                      </div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-bold mb-1">{phase.time}</div>
                      <h4 className="text-xl font-bold text-white mb-2">{phase.phase}</h4>
                      <p className="text-xs font-serif italic text-gray-400 max-w-[200px]">{phase.focus}</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md min-h-[160px] group-hover:bg-white/10 transition-colors">
                      <ul className="space-y-3">
                        {phase.items.map((item, j) => (
                          <li key={j} className="flex gap-3 text-xs text-gray-300">
                            <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Commercial Validation Insert */}
          <div className="relative z-10 mb-32 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full"></div>
              <ProofOfWorkInvoice className="relative z-10" />
              <p className="text-center mt-6 text-xs font-mono text-white/30 uppercase tracking-widest">Fig 1.4: Empirical Revenue Data</p>
            </div>
          </div>

          {/* 5. TECHNICAL PROVENANCE (VIDEOS) */}
          <div className="relative z-10">
            <div className="flex items-center justify-between border-b border-white/10 pb-8 mb-12">
              <h3 className="font-bold text-4xl text-white uppercase tracking-tighter mix-blend-exclusion text-silver">
                Technical Provenance <br />
                <span className="text-white/40 text-2xl tracking-normal normal-case font-serif italic">Foundational Assets & Acquisitions</span>
              </h3>
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest hidden md:block">Ref: Github_Audits_2024</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videos.map((vid, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-video bg-black/50 border border-white/10 rounded-xl overflow-hidden mb-4 group-hover:border-white/30 transition-colors shadow-2xl">
                    <iframe
                      src={`https://www.loom.com/embed/${vid.id}`}
                      frameBorder="0"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                    ></iframe>
                    <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">{vid.title}</span>
                    <ExternalLink size={12} className="text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>


        </>
      )}
      {/* Governance Section */}
      {activeSection === 'governance' && (
        <div className="relative z-10 max-w-5xl mx-auto pt-8 mb-32">
          <GovernanceConsole />
        </div>
      )}

    </div>
  );
};

export default ApplicationPortfolio;

