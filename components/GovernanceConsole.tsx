import React from 'react';
import { Shield, Lock, AlertTriangle, Eye, Activity, FileText, Slash, Terminal } from 'lucide-react';

const GovernanceConsole: React.FC = () => {
    return (
        <div className="space-y-8">

            {/* HEADER: The Doctrine */}
            <div className="text-center space-y-4 mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mx-auto">
                    <Shield size={14} className="text-indigo-400" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60">Protocol: Human_Sovereignty</span>
                </div>
                <h3 className="font-serif italic text-4xl text-white">The Governance Console</h3>
                <p className="text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
                    "We do not build autonomous agents without building the braking systems first.
                    This console provides the <span className="text-white">Audit Log</span>, <span className="text-white">Constitutional Guardrails</span>, and <span className="text-white">Kill Switch</span> required for institutional deployment."
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* MODULE 1: THE CONSTITUTION (System Prompt Rules) */}
                <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                        <FileText size={100} />
                    </div>

                    <div className="flex items-center gap-3 mb-6 relative z-10">
                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                            <Terminal size={20} className="text-indigo-400" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white uppercase tracking-wider text-sm">The Constitution</h4>
                            <div className="text-[10px] font-mono text-gray-500">System_Prompt_Level_0</div>
                        </div>
                    </div>

                    <div className="space-y-4 font-mono text-xs relative z-10">
                        <div className="p-4 bg-black/60 rounded-lg border border-white/5 text-gray-400">
                            <span className="text-purple-400">const</span> <span className="text-white text-opacity-80">PRIME_DIRECTIVES</span> = {'{'}
                            <div className="pl-4 py-2 space-y-2">
                                <div className="flex gap-2">
                                    <span className="text-gray-600">01.</span>
                                    <span className="text-green-400">"No_External_Comms_Without_Encryption"</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-gray-600">02.</span>
                                    <span className="text-green-400">"Budget_Cap_Per_Run: $0.50"</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-gray-600">03.</span>
                                    <span className="text-green-400">"Kill_Switch_Override: TRUE"</span>
                                </div>
                            </div>
                            {'}'}
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-indigo-400/60 pl-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
                            <span>Enforced via Helmet Layer</span>
                        </div>
                    </div>
                </div>

                {/* MODULE 2: HUMAN SWITCHBOARD (Audit Log) */}
                <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                        <Eye size={100} />
                    </div>

                    <div className="flex items-center gap-3 mb-6 relative z-10">
                        <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                            <Activity size={20} className="text-yellow-400" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white uppercase tracking-wider text-sm">Human Switchboard</h4>
                            <div className="text-[10px] font-mono text-gray-500">Live_Intervention_Log</div>
                        </div>
                    </div>

                    <div className="space-y-3 relative z-10">
                        {[
                            { time: '10:42:01', event: 'Budget Exceeded ($0.55)', action: 'PAUSED', role: 'System' },
                            { time: '10:45:30', event: 'Human Override', action: 'APPROVED', role: 'Admin_01' },
                            { time: '11:12:10', event: 'Routine Check', action: 'PASS', role: 'System' }
                        ].map((log, i) => (
                            <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5 hover:border-yellow-500/30 transition-colors">
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-mono text-gray-500">{log.time}</span>
                                    <span className="text-xs font-bold text-white">{log.event}</span>
                                </div>
                                <div className="text-right">
                                    <span className={`text-[9px] font-black px-2 py-0.5 rounded ${log.action === 'PAUSED' ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'} uppercase`}>{log.action}</span>
                                    <span className="block text-[9px] text-gray-600 mt-1">{log.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* MODULE 3: THE KILL SWITCH */}
            <div className="relative group rounded-3xl overflow-hidden border border-red-900/30 bg-black/40 backdrop-blur-xl">
                <div className="absolute inset-0 bg-red-900/5 group-hover:bg-red-900/10 transition-colors duration-500"></div>
                <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">

                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <AlertTriangle size={24} className="text-red-500" />
                            <h4 className="text-xl font-bold text-white uppercase tracking-widest">Emergency Protocol</h4>
                        </div>
                        <p className="text-gray-400 text-sm max-w-md">
                            The "Break Glass" mechanism. Instantly revokes all API keys, terminates active N8N workflows, and locks the Nodebase.
                        </p>
                    </div>

                    <button className="relative group/btn">
                        <div className="absolute inset-0 bg-red-600 blur-xl opacity-20 group-hover/btn:opacity-40 transition-opacity"></div>
                        <div className="relative px-8 py-4 bg-red-950/50 border-2 border-red-500 text-red-500 font-black uppercase tracking-[0.2em] rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center gap-4 shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                            <Slash size={20} />
                            <span>Kill_Switch_Engage</span>
                        </div>
                    </button>

                </div>
            </div>

        </div>
    );
};

export default GovernanceConsole;
