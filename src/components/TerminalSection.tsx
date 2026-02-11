import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CommandOutput {
  command: string;
  output: string[];
  isError?: boolean;
}

// Commands to auto-cycle through
const autoCycleCommands = ['whoami', 'skills', 'stats', 'tools', 'achievements', 'contact', 'neofetch'];

const TerminalSection = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [commandIndex, setCommandIndex] = useState(-1);
  const [cycleIndex, setCycleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, () => string[]> = {
    help: () => [
      '╭──────────────────────────────────────────╮',
      '│         AVAILABLE COMMANDS               │',
      '├──────────────────────────────────────────┤',
      '│  help         Show this help message     │',
      '│  whoami       Display current user info  │',
      '│  skills       View full capability matrix│',
      '│  tools        Show security arsenal      │',
      '│  achievements Hall of fame entries       │',
      '│  contact      Get contact information    │',
      '│  socials      Show social media links    │',
      '│  stats        Display hunting statistics │',
      '│  clear        Clear terminal             │',
      '│  neofetch     Display system info        │',
      '│  matrix       Start matrix rain          │',
      '╰──────────────────────────────────────────╯',
    ],
    whoami: () => [
      '┌────────────────────────────────────────────┐',
      '│  RAINKODE                                  │',
      '│  ETHICAL HACKER // BUG HUNTER              │',
      '│                                            │',
      '│  Specialization: Web Application Security  │',
      '│  Status: Available for Private Programs    │',
      '│  Mode: Active Hunter - Always Grinding     │',
      '└────────────────────────────────────────────┘'
    ],
    skills: () => [
      '╔══════════════════════════════════════════════════════════════╗',
      '║            SKILLS & EXPERTISE - CAPABILITY MATRIX            ║',
      '╠══════════════════════════════════════════════════════════════╣',
      '║                                                              ║',
      '║  [OFFENSIVE SECURITY]                                        ║',
      '║  ▓▓▓▓▓▓▓▓▓░ Web Application Pentesting          95%         ║',
      '║  ▓▓▓▓▓▓▓▓▓░ API Security Testing                90%         ║',
      '║  ▓▓▓▓▓▓▓▓░░ Network Penetration                 80%         ║',
      '║  ▓▓▓▓▓▓▓░░░ Mobile App Security                 70%         ║',
      '║                                                              ║',
      '║  [VULNERABILITY CLASSES]                                     ║',
      '║  ▓▓▓▓▓▓▓▓▓░ XSS (Stored/Reflected/DOM)          90%         ║',
      '║  ▓▓▓▓▓▓▓▓▓░ SQL Injection                       92%         ║',
      '║  ▓▓▓▓▓▓▓▓▓░ SSRF / CSRF                         88%         ║',
      '║  ▓▓▓▓▓▓▓▓▓░ Authentication Bypass               95%         ║',
      '║  ▓▓▓▓▓▓▓▓▓░ IDOR / BAC                          90%         ║',
      '║                                                              ║',
      '║  [TOOLS & FRAMEWORKS]                                        ║',
      '║  ▓▓▓▓▓▓▓▓▓▓ Burp Suite                          98%         ║',
      '║  ▓▓▓▓▓▓▓▓▓░ Nuclei / Custom Templates           90%         ║',
      '║  ▓▓▓▓▓▓▓▓░░ SQLMap / Custom Scripts             88%         ║',
      '║  ▓▓▓▓▓▓▓▓░░ Metasploit Framework                82%         ║',
      '║                                                              ║',
      '║  OVERALL ASSESSMENT: 90% AVG                                 ║',
      '╚══════════════════════════════════════════════════════════════╝',
    ],
    tools: () => [
      '╔═════════════════════════════════════════════╗',
      '║           SECURITY ARSENAL                  ║',
      '╠═════════════════════════════════════════════╣',
      '║  RECON       │  Nmap, Shodan, Amass         ║',
      '║  SCANNING    │  Nuclei, Nikto, Masscan      ║',
      '║  EXPLOITING  │  Burp Suite, SQLMap          ║',
      '║  FUZZING     │  FFUF, Wfuzz, Feroxbuster    ║',
      '║  SCRIPTING   │  Python, Bash, Go            ║',
      '║  FRAMEWORK   │  Metasploit, Cobalt Strike   ║',
      '╚═════════════════════════════════════════════╝'
    ],
    achievements: () => [
      '┌─────────────────────────────────────────┐',
      '│  🏆 RECOGNITION & MILESTONES            │',
      '├─────────────────────────────────────────┤',
      '│  ✓ 2x Hall of Fame entries              │',
      '│  ✓ First critical vulnerability found   │',
      '│  ✓ Active on multiple platforms         │',
      '│  ✓ Building reputation consistently     │',
      '├─────────────────────────────────────────┤',
      '│  🎯 GOALS:                              │',
      '│  → 50+ valid reports                    │',
      '│  → More Hall of Fame entries            │',
      '│  → $25K+ total bounty                   │',
      '└─────────────────────────────────────────┘'
    ],
    contact: () => [
      '╭─────────────────────────────────────────╮',
      '│  CONTACT INFORMATION                    │',
      '├─────────────────────────────────────────┤',
      '│  Email:      rainkode@protonmail.com    │',
      '│  HackerOne:  @rainkode                  │',
      '│  Twitter/X:  @rainkode174818            │',
      '╰─────────────────────────────────────────╯'
    ],
    socials: () => [
      '┌───────────────────────────────────────────────┐',
      '│  SOCIAL LINKS                                 │',
      '├───────────────────────────────────────────────┤',
      '│  → HackerOne: hackerone.com/rainkode          │',
      '│  → Twitter/X: x.com/rainkode174818            │',
      '│  → Email: rainkode@protonmail.com             │',
      '└───────────────────────────────────────────────┘'
    ],
    stats: () => [
      '┌─────────────────────────────────────────┐',
      '│        HUNTING STATISTICS               │',
      '├─────────────────────────────────────────┤',
      '│  Total Reports:      23                 │',
      '│  Valid Vulns:        17                 │',
      '│  Hall of Fame:       2                  │',
      '│  Programs:           12+                │',
      '│  Total Bounty:       $8K+               │',
      '│  Status:             GRINDING           │',
      '└─────────────────────────────────────────┘'
    ],
    neofetch: () => [
      '       ██████████████           rainkode@security',
      '     ████████████████           ─────────────────────',
      '   ████            ████         OS: Kali Linux',
      '  ████  ██████████  ████        Host: Classified',
      ' ████  ████████████  ████       Kernel: 6.x-security',
      ' ████  ████████████  ████       Shell: zsh 5.9',
      ' ████  ████████████  ████       Terminal: alacritty',
      '  ████  ██████████  ████        CPU: Classified',
      '   ████            ████         Memory: Classified',
      '     ████████████████           Uptime: 24/7',
      '       ██████████████           ',
      '                                ▓▓▓ Hunting Mode: ON'
    ],
    matrix: () => [
      'Initiating Matrix protocol...',
      '>>> Look at the background ;)'
    ],
    clear: () => [],
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    const commandFn = commands[trimmedCmd];
    if (commandFn) {
      setHistory(prev => [...prev, { command: cmd, output: commandFn() }]);
    } else if (trimmedCmd) {
      setHistory(prev => [
        ...prev,
        {
          command: cmd,
          output: [`bash: ${trimmedCmd}: command not found. Type 'help' for available commands.`],
          isError: true
        }
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput('');
      setCommandIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const commands = history.map(h => h.command);
      if (commands.length > 0) {
        const newIndex = commandIndex < commands.length - 1 ? commandIndex + 1 : commandIndex;
        setCommandIndex(newIndex);
        setInput(commands[commands.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandIndex > 0) {
        const commands = history.map(h => h.command);
        const newIndex = commandIndex - 1;
        setCommandIndex(newIndex);
        setInput(commands[commands.length - 1 - newIndex] || '');
      } else {
        setCommandIndex(-1);
        setInput('');
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, typingText]);

  // Auto-cycle through commands
  useEffect(() => {
    const typeCommand = async (cmd: string) => {
      setIsTyping(true);
      setTypingText('');

      // Type each character with delay
      for (let i = 0; i <= cmd.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 80));
        setTypingText(cmd.slice(0, i));
      }

      // Small pause after typing
      await new Promise(resolve => setTimeout(resolve, 300));

      // Execute command
      const commandFn = commands[cmd];
      if (commandFn) {
        // Only show one command at a time
        setHistory([{ command: cmd, output: commandFn() }]);
      }

      setTypingText('');
      setIsTyping(false);
    };

    // Initial command on mount
    const initialTimeout = setTimeout(() => {
      typeCommand(autoCycleCommands[0]);
    }, 1000);

    // Cycle interval (60 seconds)
    const cycleInterval = setInterval(() => {
      setCycleIndex(prev => {
        const nextIndex = (prev + 1) % autoCycleCommands.length;
        typeCommand(autoCycleCommands[nextIndex]);
        return nextIndex;
      });
    }, 60000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(cycleInterval);
    };
  }, []);

  return (
    <section className="py-12 px-4 md:px-8 bg-background/80 backdrop-blur-sm">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground tracking-widest">INTERACTIVE_TERMINAL</span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative bg-black border border-border overflow-hidden rounded-lg shadow-[0_0_30px_rgba(139,92,246,0.05),inset_0_0_60px_rgba(0,0,0,0.8)]"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 p-4 border-b border-border bg-black/90 backdrop-blur-sm z-10 relative">
            <div className="w-3 h-3 rounded-full bg-muted-foreground/50" />
            <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
            <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
            <span className="ml-4 text-muted-foreground text-xs font-mono">root@rainkode:~ — bash</span>
            <span className="ml-auto text-xs text-muted-foreground font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Auto-cycling • {autoCycleCommands.length} commands
            </span>
          </div>

          {/* Terminal content */}
          <div
            ref={terminalRef}
            className="min-h-[500px] p-6 font-mono text-sm overflow-hidden flex flex-col"
            style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0.98) 0%, rgba(10,10,15,0.98) 100%)'
            }}
          >
            {/* Command output area - auto-sizes to content */}
            <div className="flex-1 flex flex-col justify-center py-4">
              {history.map((entry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center"
                >
                  <div className="flex items-center gap-2 mb-4 self-start">
                    <span className="text-primary">root@rainkode</span>
                    <span className="text-muted-foreground">:</span>
                    <span className="text-muted-foreground">~</span>
                    <span className="text-muted-foreground">$</span>
                    <span className="text-foreground ml-2">{entry.command}</span>
                  </div>
                  <pre className={`whitespace-pre font-mono text-xs sm:text-sm md:text-base leading-relaxed ${entry.isError ? 'text-red-400' : 'text-foreground'}`}>
                    {entry.output.join('\n')}
                  </pre>
                </motion.div>
              ))}
            </div>

            {/* Input line - at bottom */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-4 border-t border-border mt-auto">
              <span className="text-primary shrink-0">root@rainkode</span>
              <span className="text-muted-foreground shrink-0">:</span>
              <span className="text-muted-foreground shrink-0">~</span>
              <span className="text-muted-foreground shrink-0">$</span>
              <span className="ml-2 text-foreground">{isTyping ? typingText : input}</span>
              <span className="typing-cursor" />
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => !isTyping && setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="absolute opacity-0 pointer-events-auto"
                autoComplete="off"
                spellCheck="false"
                disabled={isTyping}
              />
            </form>
          </div>

          {/* Bottom terminal bar */}
          <div className="p-3 bg-black/95 border-t border-border font-mono text-xs flex justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-primary">▶</span>
              <span>{isTyping ? 'Auto-cycling commands...' : 'Interactive mode enabled'}</span>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="hidden sm:inline">Auto: 60s</span>
              <span>↑↓ History</span>
              <span>Enter Execute</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalSection;
