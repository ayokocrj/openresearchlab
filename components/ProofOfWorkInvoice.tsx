import React from 'react';
import { CheckCircle2, FileText, Calendar, Building, CreditCard, Clock, Terminal } from 'lucide-react';

const ProofOfWorkInvoice: React.FC<{ className?: string }> = ({ className = '' }) => {
    return (
        <div className={`relative group ${className}`}>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-green-500/10 blur-2xl rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>

            {/* Invoice Card */}
            <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden max-w-sm ml-auto mr-auto md:mr-0 transform transition-all duration-300 hover:scale-[1.02] hover:border-green-500/30">

                {/* Header - Verified Status */}
                <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-400">Proof_Verified</span>
                    </div>
                    <span className="font-mono text-[10px] text-gray-500">ID: #OCT-2025-005</span>
                </div>

                {/* Invoice Body */}
                <div className="p-6 space-y-6">

                    {/* Parties */}
                    <div className="flex justify-between items-start gap-4">
                        <div>
                            <div className="text-[9px] font-mono text-gray-500 uppercase tracking-wider mb-1">Issuer_Node</div>
                            <div className="font-bold text-xs text-white leading-tight">Roland Caryl Jr.</div>
                            <div className="text-[10px] text-gray-400">Bento AI Services</div>
                        </div>
                        <div className="text-right">
                            <div className="text-[9px] font-mono text-gray-500 uppercase tracking-wider mb-1">Client_Node</div>
                            <div className="font-bold text-xs text-white">Smart Funnel</div>
                            <div className="text-[10px] text-gray-400">Ref: Dylan</div>
                        </div>
                    </div>

                    <div className="h-px w-full bg-white/10"></div>

                    {/* Line Items */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center group/item">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-green-500/30 transition-colors">
                                    <Terminal size={14} className="text-gray-400 group-hover/item:text-green-400 transition-colors" />
                                </div>
                                <div>
                                    <div className="font-bold text-xs text-white">Phase Pilote: Auto</div>
                                    <div className="text-[10px] text-gray-500">Make, Webhooks, Prompts</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-xs text-white">937,50 €</div>
                                <div className="text-[9px] text-gray-500">Fixed</div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center group/item">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-green-500/30 transition-colors">
                                    <Clock size={14} className="text-gray-400 group-hover/item:text-green-400 transition-colors" />
                                </div>
                                <div>
                                    <div className="font-bold text-xs text-white">Efficiency Ratio</div>
                                    <div className="text-[10px] text-gray-500">62.5h / 100h Planned</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-xs text-green-400">62.5%</div>
                                <div className="text-[10px] text-gray-500">Load</div>
                            </div>
                        </div>
                    </div>

                    {/* Mission Context */}
                    <div className="bg-green-500/5 p-4 rounded-lg border border-green-500/10 relative overflow-hidden">

                        <div className="flex items-start gap-3 relative z-10">
                            <div className="mt-0.5">
                                <CheckCircle2 size={12} className="text-green-500" />
                            </div>
                            <div>
                                <span className="block text-[9px] font-black uppercase tracking-widest text-green-500 mb-2">Mission_Log</span>
                                <p className="text-[10px] italic text-gray-400 leading-relaxed font-mono">
                                    "This revenue event validates the 'Post-Labor' hypothesis. By deploying autonomous logic into the infrastructure, we reduced human labor costs by 37.5%, proving the viability of the Agentic Enterprise."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Total Footer */}
                    <div className="flex items-end justify-between pt-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Date</span>
                            <span className="font-bold text-xs text-white">Oct 23, 2025</span>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">Total Paid</span>
                            <span className="text-2xl font-black text-white tracking-tighter">937,50 €</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProofOfWorkInvoice;
