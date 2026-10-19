import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal as TerminalIcon, Send } from 'lucide-react';

interface LogEntry {
  type: 'input' | 'output' | 'error' | 'system';
  text: string;
}

export const TerminalApp: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<LogEntry[]>([
    { type: 'system', text: 'PortfolioOS Terminal v1.0 [macOS Bash Shell]' },
    { type: 'system', text: 'Type "help" to view available commands.' },
    { type: 'output', text: `Logged in as visitor@portfolioos:~ (${PORTFOLIO_DATA.owner.name})` }
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newLogs: LogEntry[] = [...logs, { type: 'input', text: `visitor@portfolioos:~$ ${inputVal}` }];
    setInputVal('');

    switch (cmd) {
      case 'help':
        newLogs.push({
          type: 'output',
          text: `Available Commands:\n  whoami        - Display owner profile & credentials\n  skills --list - Show technical competency matrix\n  projects      - List featured systems & software products\n  projects --recent - List recently built projects\n  contact       - Display contact channels\n  clear         - Clear terminal screen\n  date          - Show current system time`
        });
        break;
      case 'whoami':
        newLogs.push({
          type: 'output',
          text: `${PORTFOLIO_DATA.owner.name} (Alias: ${PORTFOLIO_DATA.owner.alias})\n${PORTFOLIO_DATA.owner.title}\nLocation: ${PORTFOLIO_DATA.owner.location}\nBio: ${PORTFOLIO_DATA.owner.bio}`
        });
        break;
      case 'projects':
        newLogs.push({
          type: 'output',
          text: PORTFOLIO_DATA.projects.map(p => `• [${p.category}] ${p.title}: ${p.subtitle}`).join('\n')
        });
        break;
      case 'projects --recent':
        newLogs.push({
          type: 'output',
          text: PORTFOLIO_DATA.projects.slice(0, 3).map(p => `• [${p.category}] ${p.title}: ${p.subtitle}`).join('\n')
        });
        break;
      case 'skills':
      case 'skills --list':
        newLogs.push({
          type: 'output',
          text: PORTFOLIO_DATA.skills.map(s => `${s.category}:\n` + s.skills.map(sk => `  - ${sk.name} (${sk.level}%)`).join('\n')).join('\n\n')
        });
        break;
      case 'contact':
        newLogs.push({
          type: 'output',
          text: `Email: ${PORTFOLIO_DATA.owner.email}\nLocation: ${PORTFOLIO_DATA.owner.location}`
        });
        break;
      case 'clear':
        setLogs([]);
        return;
      case 'date':
        newLogs.push({ type: 'output', text: new Date().toString() });
        break;
      default:
        newLogs.push({ type: 'error', text: `Command not found: "${cmd}". Type "help" for valid commands.` });
        break;
    }

    setLogs(newLogs);
  };

  return (
    <div className="h-full flex flex-col font-mono text-xs glass-panel rounded-2xl p-5 shadow-2xl relative overflow-hidden">
      <div className="glass-sheen" />
      <div className="flex items-center space-x-2 border-b border-white/10 pb-3 mb-3 text-cyan-300 relative z-10">
        <TerminalIcon className="w-4 h-4 text-cyan-400" />
        <span className="font-bold">visitor@portfolioos:~ (zsh · quantum-kernel)</span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 pr-2 scrollbar-thin relative z-10">
        {logs.map((log, idx) => (
          <div key={idx} className={log.type === 'error' ? 'text-rose-400 whitespace-pre-line' : log.type === 'input' ? 'text-cyan-300 font-bold' : 'text-slate-200 whitespace-pre-line leading-relaxed'}>
            {log.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleCommand} className="mt-4 pt-3 border-t border-white/10 flex items-center space-x-2 relative z-10">
        <span className="text-cyan-400 font-bold">visitor@portfolioos:~$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type a command (help, whoami, projects, skills)..."
          className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs placeholder:text-slate-500"
          autoFocus
        />
        <button type="submit" className="p-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition cursor-pointer shadow-md shadow-cyan-500/25">
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
