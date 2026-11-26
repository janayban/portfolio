import React, { useState, useRef, useEffect } from 'react';
import { TERMINAL_PRESETS } from '../data/portfolioData';
import { Terminal as TerminalIcon, Copy, Check, CornerDownLeft } from 'lucide-react';

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<string[]>([
    "ivan@cca-secbox:~$ init --profile john-ivan-miranda",
    "[SYS] Terminal initialized. Identity: John Ivan Miranda (janayban)",
    "[SYS] Type a command or click a preset chip below to inspect telemetry.",
  ]);
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickCommands = ['whoami', 'stack', 'status', 'certs', 'contact', 'clear'];

  const executeCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setHistory([
        "ivan@cca-secbox:~$ clear",
        "[SYS] Buffer cleared. Ready for input."
      ]);
      setInputVal('');
      return;
    }

    if (cleanCmd === 'help') {
      setHistory((prev) => [
        ...prev,
        `ivan@cca-secbox:~$ ${cleanCmd}`,
        "Available commands:",
        "  whoami   - View identity, university, and security focus",
        "  stack    - Dump security and development toolchain",
        "  status   - Check career availability",
        "  certs    - List competition championships and badges",
        "  contact  - Communication endpoints",
        "  clear    - Clear current terminal buffer",
      ]);
      setInputVal('');
      return;
    }

    const output = TERMINAL_PRESETS[cleanCmd];
    if (output) {
      setHistory((prev) => [...prev, ...output]);
    } else {
      setHistory((prev) => [
        ...prev,
        `ivan@cca-secbox:~$ ${cleanCmd}`,
        `bash: command not found: ${cleanCmd}. Try 'help' or click a preset chip.`
      ]);
    }
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const copyTerminalOutput = () => {
    navigator.clipboard.writeText(history.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-xl border border-slate-800 bg-obsidian-surface shadow-xl overflow-hidden font-mono text-xs">
      
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-700"></span>
            <span className="w-2 h-2 rounded-full bg-slate-700"></span>
            <span className="w-2 h-2 rounded-full bg-cyan-cyber/80"></span>
          </div>
          <span className="text-slate-400 text-[11px] ml-1 flex items-center gap-1.5">
            <TerminalIcon className="w-3 h-3 text-cyan-cyber" />
            ivan@cca-secbox:~ [bash]
          </span>
        </div>

        <button
          type="button"
          onClick={copyTerminalOutput}
          className="text-slate-400 hover:text-slate-200 p-1 rounded hover:bg-slate-800 transition-colors"
          title="Copy terminal buffer"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-signal" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Quick Command Chips */}
      <div className="flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-950/60 border-b border-slate-800/80 overflow-x-auto text-[11px]">
        <span className="text-slate-400 text-[10px] mr-1 hidden sm:inline">PRESETS:</span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => executeCommand(cmd)}
            className="px-2 py-0.5 rounded border border-slate-800 bg-obsidian text-slate-300 hover:text-cyan-cyber hover:border-cyan-cyber/40 transition-all cursor-pointer whitespace-nowrap text-[10px]"
          >
            ${cmd}
          </button>
        ))}
      </div>

      {/* Terminal Output Body */}
      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
        className="p-3.5 h-56 sm:h-60 overflow-y-auto space-y-1 leading-relaxed text-slate-300 bg-obsidian-surface/60 cursor-text"
      >
        {history.map((line, idx) => {
          const isCommand = line.startsWith('ivan@');
          const isSys = line.startsWith('[SYS]');
          const isHighlight = line.includes('Champion') || line.includes('[AWARD]') || line.includes('Available');
          const isError = line.includes('not found');

          return (
            <div
              key={idx}
              className={`${
                isCommand
                  ? 'text-cyan-cyber font-medium pt-0.5'
                  : isSys
                  ? 'text-slate-400'
                  : isHighlight
                  ? 'text-emerald-signal font-medium'
                  : isError
                  ? 'text-rose-400'
                  : 'text-slate-200'
              }`}
            >
              {line}
            </div>
          );
        })}

        {/* Active Input Line */}
        <div className="flex items-center gap-1.5 pt-1 text-cyan-cyber">
          <span className="text-slate-400 select-none">ivan@cca-secbox:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type command..."
            className="flex-1 bg-transparent text-slate-100 placeholder-slate-400 focus:outline-none font-mono text-xs caret-cyan-cyber"
            autoComplete="off"
            spellCheck="false"
          />
          <button
            type="button"
            onClick={() => executeCommand(inputVal)}
            className="p-0.5 text-slate-400 hover:text-cyan-cyber"
            title="Execute"
          >
            <CornerDownLeft className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Terminal Footer Indicator */}
      <div className="px-3.5 py-1 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-signal"></span>
          Daemon: Active • Zero-Trust Mode
        </span>
        <span className="hidden sm:inline">Astro 5 • React 19 • TypeScript</span>
      </div>
    </div>
  );
}
