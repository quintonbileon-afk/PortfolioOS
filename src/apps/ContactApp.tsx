import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, MapPin, Shield } from 'lucide-react';

export const ContactApp: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 1200);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-4xl mx-auto py-2">
      {/* Info Column */}
      <div className="md:col-span-5 glass-card p-6 rounded-2xl flex flex-col justify-between space-y-6 relative overflow-hidden">
        <div className="glass-sheen" />
        <div className="relative z-10">
          <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs font-bold mb-2">
            <Shield className="w-3.5 h-3.5" />
            <span>SECURE TRANSMISSION</span>
          </div>
          <h2 className="text-xl font-bold text-white mb-2 font-display">Get in Touch</h2>
          <p className="text-xs text-slate-200 leading-relaxed">
            Interested in digital transformation consulting, full-stack software development, or public sector ICT systems? Connect directly with Golebileone (Quinton).
          </p>
        </div>

        <div className="space-y-3 text-xs relative z-10">
          <div className="flex items-center space-x-3 glass-card p-3 rounded-xl">
            <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-slate-200 font-mono truncate">{PORTFOLIO_DATA.owner.email}</span>
          </div>

          <div className="flex items-center space-x-3 glass-card p-3 rounded-xl">
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-slate-200">{PORTFOLIO_DATA.owner.location}</span>
          </div>
        </div>

        <div className="text-[10px] font-mono text-slate-400 relative z-10">
          TLS 1.3 · Quantum Encrypted Handshake
        </div>
      </div>

      {/* Form Column */}
      <div className="md:col-span-7 glass-card p-6 rounded-2xl flex flex-col justify-center relative overflow-hidden">
        <div className="glass-sheen" />
        {isSent ? (
          <div className="text-center py-10 space-y-4 relative z-10">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-base font-bold text-white font-display">Message Relayed Successfully</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Your transmission has been logged. Quinton will respond to your email address shortly.
            </p>
            <button
              onClick={() => { setIsSent(false); setFormState({ name: '', email: '', message: '' }); }}
              className="px-4 py-2 glass-button text-white text-xs font-medium cursor-pointer"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div>
              <label className="block text-xs font-mono font-medium text-slate-300 mb-1">Your Name / Organization</label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="e.g. Dr. Mokaleng"
                className="w-full glass-input px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-medium text-slate-300 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="e.g. mokaleng@gov.bw"
                className="w-full glass-input px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-medium text-slate-300 mb-1">Message / Inquiry</label>
              <textarea
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Describe your project or consultation request..."
                className="w-full glass-input px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-3 rounded-xl glass-button text-white font-semibold text-xs flex items-center justify-center space-x-2 transition cursor-pointer disabled:opacity-50 hover:border-cyan-400/50"
            >
              {isSending ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                  <span>Encrypting & Relaying...</span>
                </>
              ) : (
                <>
                  <span>Transmit Secure Message</span>
                  <Send className="w-3.5 h-3.5 text-cyan-400" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
