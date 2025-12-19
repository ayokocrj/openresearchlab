
import React from 'react';
import { Rocket, Target, BarChart3, TrendingUp } from 'lucide-react';

const Roadmap: React.FC = () => {
  const phases = [
    {
      title: 'Phase 1: The Smart Funnel',
      timeline: 'Months 0-3 (Current)',
      action: 'Use Nodebase to deliver lead-gen contracts. Document where AI fails.',
      goal: 'Document the "Jagged Frontier" failures and fix them in code. Build proprietary SDR asset.',
      icon: Rocket,
      color: 'text-blue-400',
      borderColor: 'border-blue-500/30'
    },
    {
      title: 'Phase 2: The Service Bureau',
      timeline: 'Months 3-6',
      action: 'Scale SDR Agent service to 10+ clients. Never sell the software.',
      goal: 'Generate $10k-$20k MRR. Use incoming data to refine the "Helmet" layer logic.',
      icon: BarChart3,
      color: 'text-indigo-400',
      borderColor: 'border-indigo-500/30'
    },
    {
      title: 'Phase 3: Rocketable Acquisition',
      timeline: 'Year 1+',
      action: 'Acquire human-heavy service agency (Translation/Support).',
      goal: 'Day 1: Install Nodebase. Replace 80% labor. Realize 90% margins. The Moonshot.',
      icon: TrendingUp,
      color: 'text-green-400',
      borderColor: 'border-green-500/30'
    }
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <header>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Service-as-Software Flywheel</h2>
        <p className="text-gray-400 text-lg">Phased execution roadmap for the O'Shaughnessy Moonshot.</p>
      </header>

      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-indigo-500 before:to-green-500">
        {phases.map((phase, i) => (
          <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-800 bg-gray-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <phase.icon className={`${phase.color}`} size={20} />
            </div>
            {/* Card */}
            <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border ${phase.borderColor} bg-gray-900/50 backdrop-blur-sm transition-all hover:bg-gray-900`}>
              <div className="flex items-center justify-between space-x-2 mb-2">
                <div className={`font-bold text-lg ${phase.color}`}>{phase.title}</div>
                <time className="font-mono text-xs text-gray-500">{phase.timeline}</time>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Action</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{phase.action}</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Goal</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{phase.goal}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
