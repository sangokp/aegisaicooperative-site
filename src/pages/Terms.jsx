import React from 'react';
import { motion } from 'framer-motion';
import { Scale, BookOpen, AlertTriangle } from 'lucide-react';

export default function Terms() {
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
              <Scale className="text-[var(--color-accent)] w-8 h-8" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--aegis-text-muted)]">Engagement Framework</span>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl font-bold text-[var(--aegis-text-primary)] tracking-tighter mb-16 text-gradient-white">TERMS OF<br />SERVICE</h1>

            <div className="glass-panel rounded-[3rem] p-10 md:p-16 border border-white/5 bg-[var(--color-charcoal)]/30 space-y-12 font-body">
              
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wide">01 — Acceptance</h2>
                <p className="text-[var(--aegis-text-secondary)] text-lg font-light leading-relaxed">
                  By accessing AEGIS AI Cooperative systems, you agree to be bound by these operational protocols. If you disagree with any segment, access is restricted.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wide">02 — Scope of Service</h2>
                <p className="text-[var(--aegis-text-secondary)] text-lg font-light leading-relaxed">
                  AEGIS provides multi-agent deployment, trust consulting, and STEM execution. We operate on a results-oriented performance model.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wide">03 — Sovereignty</h2>
                <p className="text-[var(--aegis-text-secondary)] text-lg font-light leading-relaxed">
                  Client-specific implementations and raw data remain the absolute property of the client. AEGIS infrastructure remains the property of the cooperative.
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 flex gap-6 items-start">
                <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={20} />
                <p className="text-amber-500/80 text-sm font-light leading-relaxed font-body uppercase tracking-wider">
                  Liability is limited to the direct consideration paid for services. Indirect or consequential damages are explicitly excluded.
                </p>
              </div>

              <div className="pt-12 border-t border-white/5">
                <p className="text-[var(--aegis-text-muted)] font-mono text-[10px] uppercase tracking-widest mb-4">Legal Liaison</p>
                <a href="mailto:hermes@aegisos.ai" className="text-[var(--aegis-text-primary)] font-display font-bold text-xl hover:text-[var(--color-accent)] transition-colors">hermes@aegisos.ai</a>
              </div>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}