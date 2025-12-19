import React, { useState, useEffect, useRef } from 'react';
import { ShieldAlert, Zap, User, AlertCircle, RefreshCw, XCircle, CheckCircle, Power, Activity, Lock } from 'lucide-react';

interface DecisionLog {
  id: string;
  timestamp: string;
  action: string;
  confidence: number;
  status: 'EXECUTED' | 'FLAGGED' | 'BLOCKED' | 'APPROVED' | 'REJECTED';
}

interface QueuedItem {
  id: string;
  action: string;
  reason: string;
  confidence: number;
}

const GovernanceHelmet: React.FC = () => {
  const [safetyThreshold, setSafetyThreshold] = useState<number>(85);
  const [logs, setLogs] = useState<DecisionLog[]>([]);
  const [queue, setQueue] = useState<QueuedItem[]>([]);
  const [isEmergencyStopped, setIsEmergencyStopped] = useState<boolean>(false);
  const logContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logs
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  // Simulation Logic
  useEffect(() => {
    if (isEmergencyStopped) return;

    const interval = setInterval(() => {
      // 1. Generate random action
      const actions = [
        "Analyzing Market Sentiment",
        "Drafting Outreach Email",
        "Calibrating Neural Weights",
        "Scanning Competitor API",
        "Executing Trade Order",
        "Synthesizing Research Paper",
        "Allocating Cloud Resources"
      ];
      const action = actions[Math.floor(Math.random() * actions.length)];
      const confidence = Math.floor(Math.random() * 20) + 80; // 80-100 random range
      const id = Math.random().toString(36).substr(2, 9);
      const timestamp = new Date().toLocaleTimeString();

      // 2. Helmet Logic
      if (confidence < safetyThreshold) {
        // Intercept!
        setQueue(prev => [...prev, {
          id,
          action,
          reason: `Confidence (${confidence}%) below threshold (${safetyThreshold}%)`,
          confidence
        }]);
        setLogs(prev => [...prev.slice(-19), {
          id,
          timestamp,
          action,
          confidence,
          status: 'FLAGGED'
        }]);
      } else {
        // Execute
        setLogs(prev => [...prev.slice(-19), {
          id,
          timestamp,
          action,
          confidence,
          status: 'EXECUTED'
        }]);
      }

    }, 2000); // New event every 2 seconds

    return () => clearInterval(interval);
  }, [safetyThreshold, isEmergencyStopped]);

  const handleApprove = (item: QueuedItem) => {
    setQueue(prev => prev.filter(q => q.id !== item.id));
    setLogs(prev => [...prev, {
      id: item.id,
      timestamp: new Date().toLocaleTimeString(),
      action: item.action,
      confidence: item.confidence,
      status: 'APPROVED'
    }]);
  };

  const handleReject = (item: QueuedItem) => {
    setQueue(prev => prev.filter(q => q.id !== item.id));
    setLogs(prev => [...prev, {
      id: item.id,
      timestamp: new Date().toLocaleTimeString(),
      action: item.action,
      confidence: item.confidence,
      status: 'REJECTED'
    }]);
  };

  const toggleEmergencyStop = () => {
    setIsEmergencyStopped(!isEmergencyStopped);
    if (!isEmergencyStopped) {
      setLogs(prev => [...prev, {
        id: 'SYSTEM',
        timestamp: new Date().toLocaleTimeString(),
        action: 'EMERGENCY STOP ACTIVATED',
        confidence: 100,
        status: 'BLOCKED'
      }]);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">
            <Lock className="text-indigo-400" />
            The Helmet Layer
          </h2>
          <p className="text-gray-400 text-lg">Active Governance Command Center.</p>
        </div>

        <button
          onClick={toggleEmergencyStop}
          className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center space-x-2 border-2 ${isEmergencyStopped
            ? 'bg-red-600 border-red-500 text-white animate-pulse shadow-[0_0_30px_rgba(220,38,38,0.5)]'
            : 'bg-black border-red-900/50 text-red-500 hover:bg-red-950/30'
            }`}
        >
          <Power size={20} />
          <span>{isEmergencyStopped ? 'SYSTEM HALTED' : 'EMERGENCY STOP'}</span>
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* LEFT COLUMN: Controls & Visualization (4 cols) */}
        <div className="lg:col-span-4 space-y-6">

          {/* Threshold Control */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-200 flex items-center gap-2">
                <ShieldAlert size={18} className="text-indigo-400" />
                Safety Threshold
              </h3>
              <span className="mono text-2xl font-bold text-indigo-400">{safetyThreshold}%</span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={safetyThreshold}
              onChange={(e) => setSafetyThreshold(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              disabled={isEmergencyStopped}
            />
            <p className="mt-3 text-xs text-gray-500">
              Actions with confidence below <span className="text-indigo-400 font-bold">{safetyThreshold}%</span> will be intercepted for human review.
            </p>
          </div>

          {/* Visualization Circle */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden h-64">
            <div className={`relative z-10 w-32 h-32 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${isEmergencyStopped
              ? 'border-red-900 bg-red-950/20'
              : 'border-indigo-500/30 bg-indigo-900/10 shadow-[0_0_40px_rgba(79,70,229,0.2)]'
              }`}>
              {isEmergencyStopped ? (
                <Lock size={40} className="text-red-500" />
              ) : (
                <Activity size={40} className="text-indigo-400 animate-pulse" />
              )}

              {!isEmergencyStopped && (
                <div className="absolute inset-0 rounded-full border-t-2 border-indigo-400 animate-spin"></div>
              )}
            </div>

            <div className="mt-6 text-center">
              <span className={`text-xs font-bold uppercase tracking-widest ${isEmergencyStopped ? 'text-red-500' : 'text-green-500'}`}>
                {isEmergencyStopped ? 'OFFLINE' : 'SYSTEM ACTIVE'}
              </span>
            </div>
          </div>

        </div>

        {/* MIDDLE COLUMN: Live Decision Stream (4 cols) */}
        <div className="lg:col-span-4 flex flex-col h-[500px] bg-black border border-gray-800 rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-gray-800 bg-gray-900/50 flex justify-between items-center">
            <h3 className="font-bold text-sm text-gray-400 uppercase tracking-wider">Live Neural Stream</h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs text-gray-500">REALTIME</span>
            </div>
          </div>

          <div ref={logContainerRef} className="flex-1 overflow-y-auto p-4 space-y-2 font-mono text-xs custom-scrollbar">
            {logs.length === 0 && <div className="text-gray-600 text-center mt-10">Waiting for agent activity...</div>}

            {logs.map((log) => (
              <div
                key={log.id}
                className={`p-3 rounded border-l-2 ${log.status === 'EXECUTED' ? 'border-green-500 bg-green-900/5 text-gray-300' :
                  log.status === 'FLAGGED' ? 'border-yellow-500 bg-yellow-900/10 text-yellow-200' :
                    log.status === 'APPROVED' ? 'border-blue-500 bg-blue-900/10 text-blue-200' :
                      log.status === 'REJECTED' ? 'border-red-500 bg-red-900/10 text-red-300 line-through opacity-50' :
                        'border-red-600 bg-red-900/20 text-red-500'
                  }`}
              >
                <div className="flex justify-between opacity-50 mb-1">
                  <span>{log.timestamp}</span>
                  <span>ID: {log.id}</span>
                </div>
                <div className="font-bold mb-1">{log.action}</div>
                <div className="flex justify-between items-center">
                  <span>Confidence: {log.confidence}%</span>
                  <span className="font-bold text-[10px] px-2 py-0.5 rounded bg-black/20">{log.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Priority Queue (4 cols) */}
        <div className="lg:col-span-4 flex flex-col h-[500px] bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-gray-800 bg-gray-800/50 flex justify-between items-center">
            <h3 className="font-bold text-sm text-white flex items-center gap-2">
              <User size={16} />
              Priority Queue
            </h3>
            <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">{queue.length}</span>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
            {queue.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 opacity-50">
                <CheckCircle size={40} className="mb-2" />
                <p>All clear. No intercepts.</p>
              </div>
            ) : (
              queue.map((item) => (
                <div key={item.id} className="bg-black/40 border border-yellow-500/30 rounded-xl p-4 animate-in slide-in-from-right duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-yellow-500 text-xs font-bold uppercase">Intercepted</span>
                    <span className="text-gray-500 text-xs mono">{item.id}</span>
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1">{item.action}</h4>
                  <p className="text-xs text-gray-400 mb-4">{item.reason}</p>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleReject(item)}
                      className="flex items-center justify-center gap-1 bg-red-950/30 hover:bg-red-900/50 text-red-400 text-xs font-bold py-2 rounded-lg border border-red-900/50 transition-colors"
                    >
                      <XCircle size={14} /> REJECT
                    </button>
                    <button
                      onClick={() => handleApprove(item)}
                      className="flex items-center justify-center gap-1 bg-green-950/30 hover:bg-green-900/50 text-green-400 text-xs font-bold py-2 rounded-lg border border-green-900/50 transition-colors"
                    >
                      <CheckCircle size={14} /> APPROVE
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default GovernanceHelmet;

