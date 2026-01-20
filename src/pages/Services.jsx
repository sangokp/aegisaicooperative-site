import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import servicesData from '../data/services.json';

export default function Services() {
  return (
    <div className="relative overflow-hidden bg-[var(--color-void)]">
      
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO - CAPABILITIES
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-64 pb-32">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-[var(--color-accent)] opacity-[0.02] blur-[140px] rounded-full pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-display text-[12vw] md:text-[9vw] font-black text-white tracking-tighter mb-12 leading-[0.8]">
                ELITE<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">CAPABILITY</span>
              </h1>
              <p className="font-body text-xl md:text-3xl text-white/40 max-w-2xl font-light leading-relaxed">
                {servicesData.subheadline}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SERVICES LIST - EDITORIAL FOCUS
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 relative z-10">
        <div className="container-custom">
          <div className="flex flex-col gap-px bg-white/5 border-y border-white/5">
            {servicesData.services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="bg-[var(--color-void)] py-24 md:py-32 group relative"
              >
                <div className="grid md:grid-cols-12 gap-12 items-start">
                  <div className="md:col-span-1">
                    <span className="font-mono text-xs text-[var(--color-accent)] font-bold tracking-[0.3em] opacity-40">0{index + 1}</span>
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter leading-none group-hover:text-[var(--color-accent)] transition-colors duration-500">
                      {service.title}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-xl text-white/40 font-body font-light leading-relaxed mb-12">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-x-8 gap-y-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-white/20">
                          <div className="w-1 h-1 rounded-full bg-[var(--color-accent)]" /> {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          PROCESS - THE PHASES
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-40 bg-white/[0.01]">
        <div className="container-custom">
          <div className="grid md:grid-cols-12 gap-24 items-start">
            <div className="md:col-span-4 sticky top-40">
              <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none mb-8">THE<br />PROTOCOL</h2>
              <div className="w-16 h-[1px] bg-[var(--color-accent)]" />
            </div>
            
            <div className="md:col-span-8 space-y-32">
              {servicesData.process.steps.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="group"
                >
                  <div className="flex items-baseline gap-6 mb-10">
                    <span className="font-display font-black text-8xl text-white/[0.03] group-hover:text-[var(--color-accent)]/10 transition-colors duration-700 leading-none">
                      {phase.step}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight uppercase">{phase.title}</h3>
                  </div>
                  <p className="text-2xl text-white/40 font-light font-body leading-relaxed pl-4 border-l border-white/5 ml-4">
                    {phase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          FINAL CALL
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-40">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto glass-panel rounded-[4rem] p-24 border border-white/5">
            <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 text-white tracking-tighter leading-[0.85] uppercase">READY TO<br />ENGINEER?</h2>
            <p className="text-xl text-white/40 mb-16 font-light font-body max-w-lg mx-auto">Collaborate with our lead architects to build your sovereign intelligence infrastructure.</p>
            <Link to="/contact" className="btn-premium inline-flex items-center gap-2">
              Initialize Consultation <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}