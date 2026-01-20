import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Shield, ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <div className="relative overflow-hidden bg-[var(--color-void)]">
      
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO - THE PHILOSOPHY
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-48 pb-32">
        {/* Background Aura */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-[var(--color-accent)] opacity-5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-display text-6xl md:text-8xl font-bold text-[var(--aegis-text-primary)] tracking-tighter mb-8 text-gradient-white">
                THE AEGIS<br />MANIFESTO
              </h1>
              <p className="font-body text-xl md:text-2xl text-[var(--aegis-text-secondary)] max-w-2xl mx-auto font-light leading-relaxed">
                An engineering cooperative dedicated to building reliable, accountable
                AI systems that serve people—not extract from them.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          MISSION - THE CORE
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-40 border-y border-white/5 bg-white/[0.01]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Our Mission</h2>
              <div className="space-y-6 text-lg font-light text-[var(--aegis-text-muted)] leading-relaxed font-body">
                <p>
                  Most AI today is designed to extract value from you—your data, your
                  attention, your agency. We&apos;re building the opposite.
                </p>
                <p>
                  AEGIS AI Cooperative exists to create AI systems that you control,
                  that are accountable, and that actually serve your goals. We believe
                  trust architecture is the foundation of useful AI.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-[var(--color-accent)]/20 rounded-[3rem] blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="relative glass-panel rounded-[3rem] p-12 md:p-16 border border-white/10">
                <blockquote className="text-2xl md:text-3xl text-white font-display font-medium italic leading-snug">
                  &quot;AI should be governed infrastructure, not just another chat product.&quot;
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] shrink-0" />
                  <span className="text-[var(--color-gold)] font-mono text-xs uppercase tracking-widest">— AEGIS Core Thesis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          VALUES - THE PILLARS
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-40">
        <div className="container-custom">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-24 text-center tracking-tight text-gradient-white">Our Values</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[ 
              {
                icon: Target,
                title: 'Stakeholder-Aligned',
                description: 'We operate as a cooperative because our incentives should match yours. No venture pressure to compromise user interests.'
              },
              {
                icon: Eye,
                title: 'Transparent',
                description: 'Every AI action is logged, traceable, and explainable. You can see exactly what\'s happening and why.'
              },
              {
                icon: Shield,
                title: 'Trust-First',
                description: 'We build governance into systems from day one—not as an afterthought. Safety isn\'t a feature; it\'s the foundation.'
              },
              {
                icon: Heart,
                title: 'Human-Centered',
                description: 'AI should augment human capability, not replace human judgment. Final authority always remains with people.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel-hover rounded-[2.5rem] p-10 border border-white/5 bg-[var(--color-charcoal)]/30"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                  <value.icon className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase tracking-wide">{value.title}</h3>
                <p className="text-[var(--aegis-text-muted)] font-body font-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CALL TO ACTION
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-40 bg-white/[0.01]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center glass-panel rounded-[4rem] p-16 md:p-24 relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-gold)] opacity-5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 text-white tracking-tighter">JOIN THE COOPERATIVE</h2>
            <p className="text-xl text-[var(--aegis-text-muted)] mb-12 font-light font-body">
              Ready to deploy AI that works for you, not against you? Let&apos;s build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-premium flex items-center gap-2 justify-center">
                Initialize Consultation <ArrowUpRight size={18} />
              </Link>
              <Link to="/partners" className="btn-outline-premium text-white flex items-center gap-2 justify-center font-display">
                Explore Alliances
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}