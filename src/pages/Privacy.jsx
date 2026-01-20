import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Globe } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="relative overflow-hidden bg-[var(--color-void)] min-h-screen">
      <section className="relative pt-48 pb-32">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <Shield className="text-[var(--color-gold)] w-8 h-8" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--aegis-text-muted)]">Data Governance Protocol</span>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl font-bold text-[var(--aegis-text-primary)] tracking-tighter mb-16 text-gradient-white">PRIVACY<br />PROTOCOL</h1>

            <div className="glass-panel rounded-[3rem] p-10 md:p-16 border border-white/5 bg-[var(--color-charcoal)]/30 space-y-12 font-body">
              
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wide">01 — The Commitment</h2>
                <p className="text-[var(--aegis-text-secondary)] text-lg font-light leading-relaxed">
                  AEGIS AI Cooperative is built on trust architecture. We believe in radical transparency, user sovereignty, and the absolute minimization of data collection.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wide">02 — Data Collection</h2>
                <ul className="grid gap-4">
                  {[
                    { icon: Globe, text: 'Identity: Minimal contact details for inquiry fulfillment.' },
                    { icon: Eye, text: 'Telemetry: Non-identifying performance metrics.' },
                    { icon: Lock, text: 'Security: Technical logs for threat mitigation.' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[var(--aegis-text-muted)] font-light">
                      <item.icon size={18} className="text-[var(--color-accent)]" /> {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wide">03 — Distribution</h2>
                <p className="text-[var(--aegis-text-secondary)] text-lg font-light leading-relaxed">
                  We do not monetize your information. Data is shared only under explicit consent, direct legal mandate, or essential safety protocols.
                </p>
              </div>

              <div className="pt-12 border-t border-white/5">
                <p className="text-[var(--aegis-text-muted)] font-mono text-[10px] uppercase tracking-widest mb-4">Inquiries</p>
                <a href="mailto:hermes@aegisos.ai" className="text-[var(--aegis-text-primary)] font-display font-bold text-xl hover:text-[var(--color-accent)] transition-colors">hermes@aegisos.ai</a>
              </div>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}