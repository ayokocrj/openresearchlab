
import React, { useState } from 'react';
import {
  LayoutDashboard,
  Cpu,
  Briefcase,

  Compass,
  ShieldAlert,
  ChevronRight,
  Zap,
  Menu,
  X
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import NodebaseBlueprint from './components/NodebaseBlueprint';
import ApplicationPortfolio from './components/ApplicationPortfolio';

import Roadmap from './components/Roadmap';
import GovernanceHelmet from './components/GovernanceHelmet';
import ParticleBackground from './components/ParticleBackground';
import VoiceSensoryAgent from './components/VoiceSensoryAgent';

type View = 'dashboard' | 'blueprint' | 'portfolio' | 'roadmap' | 'helmet';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'The Manifesto', icon: LayoutDashboard },
    { id: 'blueprint', label: 'Nodebase UI', icon: Cpu },
    { id: 'portfolio', label: 'Grant Portfolio', icon: Briefcase },

    { id: 'roadmap', label: 'Flywheel', icon: Compass },
    { id: 'helmet', label: 'Governance', icon: ShieldAlert },
  ] as const;

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden selection:bg-white/20 selection:text-white relative">
      {/* Global Particle Continuity */}
      <ParticleBackground />

      {/* Global Voice Sensory Agent */}
      <VoiceSensoryAgent />

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-black/80 backdrop-blur-md z-50 flex items-center px-6 border-b border-white/10 justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-400 rounded-lg flex items-center justify-center">
            <Zap size={18} className="text-black fill-black" />
          </div>
          <span className="font-bold tracking-tighter text-sm uppercase italic">SYNAPSE<span className="text-gray-400">.OS</span></span>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-white/70 hover:text-white transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Futuristic Metallic */}
      <aside className={`
        fixed md:relative top-0 left-0 h-full w-64 bg-black/95 md:bg-black/40 backdrop-blur-md border-r border-white/10 
        flex flex-col shrink-0 z-50 transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-8 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-400 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              <Zap size={22} className="text-black fill-black" />
            </div>
            <span className="font-bold tracking-tighter text-xl uppercase italic">SYNAPSE<span className="text-gray-400">.OS</span></span>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden text-white/50 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveView(item.id);
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-4 px-5 py-4 rounded-xl transition-all duration-300 group ${activeView === item.id
                ? 'bg-white/10 text-white border border-white/20 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]'
                : 'text-gray-500 hover:text-gray-200 hover:bg-white/5'
                }`}
            >
              <item.icon size={18} className={activeView === item.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'} />
              <span className="font-bold text-[10px] uppercase tracking-[0.2em]">{item.label}</span>
              {activeView === item.id && <ChevronRight size={14} className="ml-auto text-white/40" />}
            </button>
          ))}
        </nav>

        <div className="p-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
            <div className="flex items-center space-x-2 text-[10px] mono text-gray-500 mb-3 uppercase font-black tracking-widest">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse"></div>
              <span>Nodes Online</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Latency</span>
              <span className="text-white mono text-xs font-bold">14ms</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative z-10 custom-scrollbar pt-16 md:pt-0">
        {activeView === 'dashboard' ? (
          <Dashboard />
        ) : (
          <div className="max-w-6xl mx-auto p-6 md:p-12 lg:p-20 pb-40">
            {activeView === 'blueprint' && <NodebaseBlueprint />}
            {activeView === 'portfolio' && <ApplicationPortfolio />}
            {activeView === 'roadmap' && <Roadmap />}
            {activeView === 'helmet' && <GovernanceHelmet />}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
