import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Sparkles, Send, Bot, User } from 'lucide-react';

interface ChatMessage {
  sender: 'ai' | 'user';
  text: string;
}

export const AiAssistantApp: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: `Hello! I am Golebileone Setlamelo's (Alias: Quinton) AI Copilot running on PortfolioOS. Ask me anything about Golebileone's projects, his work across Mabutsane district schools, his tech stack, or how to collaborate with him.`
    }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (query?: string) => {
    const textToSend = query || input;
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = { sender: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    if (!query) setInput('');

    setTimeout(() => {
      let aiReply = "";
      const q = textToSend.toLowerCase();

      if (q.includes('built') || q.includes('projects') || q.includes('what has quinton built') || q.includes('what has golebileone built')) {
        aiReply = `Golebileone Setlamelo (Quinton) has engineered several production systems including:\n• Edu-Suite Ecosystem (Deployed across 24 primary schools in Mabutsane District)\n• NexusKYC (Identity verification gateway)\n• MedTrack BW (Cold chain IoT tracking for health posts)\n• ElectroShield & BidReady360 for public sector compliance.`;
      } else if (q.includes('health') || q.includes('medical') || q.includes('medtrack')) {
        aiReply = `Golebileone's health tech work features MedTrack BW (real-time IoT vaccine & medicine supply chain visibility for rural clinics) and HealthLink-BW (FHIR-compliant EMR interoperability bridge connecting 18 clinics).`;
      } else if (q.includes('hire') || q.includes('contact') || q.includes('collaborate')) {
        aiReply = `You can hire or collaborate with Golebileone Setlamelo by sending a message via the Contact App or emailing him directly at ${PORTFOLIO_DATA.owner.email}. He is based in Mabutsane, Botswana, specializing in full-stack engineering and public sector digital transformation.`;
      } else if (q.includes('education') || q.includes('schools') || q.includes('bocra')) {
        aiReply = `Golebileone serves as Information Technology Officer across primary schools in Mabutsane District under BOCRA's Universal Access and Service Fund (UASF) within the Ministry of Child Welfare and Basic Education, deploying Edu-Suite and connecting students to digital learning.`;
      } else if (q.includes('skills') || q.includes('tech') || q.includes('stack')) {
        aiReply = `Golebileone's core technical expertise spans TypeScript, React, Next.js, Node.js, Python/FastAPI, PostgreSQL, Docker, Linux administration, and IoT telemetry architectures.`;
      } else {
        aiReply = `That is a great question! Golebileone Setlamelo (Alias: Quinton) is a Full-Stack Developer & Digital Transformation Specialist with 12+ years experience based in Mabutsane, Botswana. You can explore his Projects, Skills, and Experience apps for deeper details or email him at ${PORTFOLIO_DATA.owner.email}.`;
      }

      setMessages(prev => [...prev, { sender: 'ai', text: aiReply }]);
    }, 400);
  };

  const suggestedPrompts = [
    "What has Golebileone built?",
    "Show me his health-tech work",
    "How can I hire him?",
    "Tell me about his education work"
  ];

  return (
    <div className="h-full flex flex-col justify-between max-w-2xl mx-auto py-2">
      <div className="flex items-center space-x-3 border-b border-white/10 pb-4 mb-4">
        <Sparkles className="w-5 h-5 text-indigo-400" />
        <div>
          <h2 className="text-lg font-bold text-white">PortfolioOS AI Copilot</h2>
          <p className="text-xs text-slate-400">Contextual knowledge assistant</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 py-2 pr-2 scrollbar-thin">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex items-start space-x-3 ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${msg.sender === 'ai' ? 'glass-button text-cyan-300' : 'bg-cyan-500 text-black font-bold'}`}>
              {msg.sender === 'ai' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
            </div>
            <div className={`max-w-[80%] p-4 rounded-2xl text-xs leading-relaxed font-sans whitespace-pre-line ${
              msg.sender === 'ai'
                ? 'glass-card text-slate-100 shadow-lg'
                : 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-black font-medium shadow-lg'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="py-3 flex flex-wrap gap-2">
        {suggestedPrompts.map((prompt, pIdx) => (
          <button
            key={pIdx}
            onClick={() => handleSend(prompt)}
            className="px-3 py-1.5 rounded-full glass-pill text-xs text-cyan-200 hover:border-cyan-400/50 hover:text-white transition cursor-pointer"
          >
            {prompt}
          </button>
        ))}
      </div>

      <div className="pt-3 border-t border-white/10 flex items-center space-x-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask AI Copilot about Quinton's work..."
          className="flex-1 glass-input px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none"
        />
        <button
          onClick={() => handleSend()}
          className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black transition cursor-pointer shadow-lg shadow-cyan-500/25"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
