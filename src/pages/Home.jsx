import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, ArrowRight } from 'lucide-react';
import companyData from '../data/company.json';
import partnershipsData from '../data/partnerships.json';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative bg-[var(--color-void)]">
      <div className="spotlight" />
      
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO - MONOLITHIC IMPACT
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Subtle Depth Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-[var(--color-accent)] opacity-[0.03] blur-[140px] rounded-full animate-float" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-[var(--color-gold)] opacity-[0.02] blur-[120px] rounded-full animate-float" style={{ animationDelay: '5s' }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md mb-12">
                <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-[var(--aegis-text-muted)] leading-none">Established 2026 • Terminal v2.0</span>
              </div>

              <h1 className="font-display text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.5vw] leading-[1.1] font-black tracking-tighter mb-12 text-[var(--aegis-text-primary)] text-glow max-w-[90vw] mx-auto">
                <span className="block">AI FOR EVERYONE</span>
                <span className="block text-[var(--aegis-text-secondary)]">OWNED BY EVERYONE</span>
              </h1>

              <p className="font-body text-xl md:text-2xl text-[var(--aegis-text-secondary)] max-w-2xl mx-auto mb-16 font-light leading-relaxed px-6">
                We are building a future where <span className="text-[var(--aegis-text-primary)]">artificial intelligence serves humanity</span>, not just corporations. Join the movement.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 px-6">
                <Link to="/contact" className="btn-premium group w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    Join the Cooperative <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
                <Link to={companyData.hero.cta.secondary.link} className="text-[var(--aegis-text-muted)] hover:text-[var(--aegis-text-primary)] font-display font-bold text-xs uppercase tracking-[0.3em] transition-colors">
                  Read Philosophy
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          THE PILLARS - NO-ICON EDITORIAL GRID
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-40 border-t border-white/5 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32 px-4">
            <div className="md:col-span-5">
              <h2 className="text-5xl md:text-7xl font-display font-bold text-[var(--aegis-text-primary)] mb-8 tracking-tighter leading-tight">OUR<br />MISSION</h2>
            </div>
            <div className="md:col-span-7 pt-4">
              <p className="text-2xl text-[var(--aegis-text-muted)] font-light font-body leading-relaxed">
                {companyData.grantServices.subheadline}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-32 px-4">
            {companyData.grantServices.services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="group flex flex-col"
              >
                <div className="flex items-baseline gap-6 mb-8">
                  <span className="text-[var(--color-accent)] font-mono text-xs font-bold tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                  <div className="h-[1px] flex-grow bg-white/5 group-hover:bg-[var(--color-accent)]/30 transition-colors" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-display font-bold text-[var(--aegis-text-primary)] mb-6 tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-lg text-[var(--aegis-text-muted)] font-body font-light leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="mt-auto space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--aegis-text-muted)]">
                      <div className="w-1 h-1 rounded-full bg-[var(--color-accent)]" /> {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          THE EDGE - MINIMALIST DIFFERENCE
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-40 bg-white/[0.01] relative overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-32 items-center px-4">
            <div>
              <h2 className="text-6xl md:text-8xl font-display font-bold text-[var(--aegis-text-primary)] mb-16 tracking-tighter leading-[0.85]">
                ENGINEERED<br />SINCERITY
              </h2>
              <div className="space-y-16">
                {companyData.differentiators.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <h4 className="text-xs font-mono font-bold text-[var(--color-gold)] mb-4 uppercase tracking-[0.4em]">{item.title}</h4>
                    <p className="text-xl text-[var(--aegis-text-muted)] font-body font-light leading-relaxed group-hover:text-[var(--aegis-text-secondary)] transition-colors">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--color-accent)]/10 blur-[120px] rounded-full animate-pulse" />
              <div className="relative aspect-square glass-panel rounded-[4rem] p-16 flex flex-col justify-center items-center text-center border border-white/5">
                <div className="text-[12vw] font-display font-black text-[var(--aegis-text-primary)]/5 absolute">AEGIS</div>
                <Zap className="w-12 h-12 text-[var(--color-gold)] mb-10 relative z-10" />
                <h3 className="text-4xl font-display font-bold text-[var(--aegis-text-primary)] mb-6 relative z-10 tracking-tight leading-none text-center">Cooperative<br />Architecture</h3>
                <div className="w-12 h-[1px] bg-white/20 mb-6" />
                <p className="text-[var(--aegis-text-muted)] font-body font-light text-sm tracking-widest uppercase relative z-10">System Status: Optimal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          ALLIANCES - BENTO MINIMALISM
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-40 relative z-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12 px-4">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-[var(--aegis-text-primary)] tracking-tighter leading-none">{partnershipsData.headline}</h2>
            <p className="text-xl text-[var(--aegis-text-muted)] max-w-md font-light font-body">{partnershipsData.subheadline}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
            {partnershipsData.models.map((model, index) => (
              <motion.div
                key={model.id}
                whileHover={{ y: -8 }}
                className="p-16 rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl transition-all duration-700 hover:border-white/10"
              >
                <div className="text-[10px] font-mono text-[var(--color-accent)] uppercase tracking-[0.4em] mb-12">Deployment Type 0{index + 1}</div>
                <h3 className="text-4xl font-display font-bold mb-8 text-[var(--aegis-text-primary)] tracking-tight">{model.title}</h3>
                <p className="mb-12 text-[var(--aegis-text-muted)] font-body font-light text-xl leading-relaxed">
                  {model.description}
                </p>
                <Link to={model.cta.link} className="inline-flex items-center gap-4 text-[var(--aegis-text-primary)] font-mono text-xs uppercase tracking-[0.3em] group">
                  {model.cta.text} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          FOOTER CALL - THE TERMINAL
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-40 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-6xl md:text-9xl font-display font-black text-[var(--aegis-text-primary)]/5 mb-12 tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-normal md:whitespace-nowrap uppercase text-center max-w-[14ch] md:max-w-none">INITIALIZE TRANSITION</h2>
          <div className="max-w-3xl mx-auto relative z-20 px-4">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 text-[var(--aegis-text-primary)] tracking-tighter leading-[0.9]">READY TO ALIGN?</h2>
            <p className="text-xl text-[var(--aegis-text-muted)] mb-16 font-light font-body max-w-lg mx-auto">{companyData.cta.subheadline}</p>
            <Link to={companyData.cta.button.link} className="btn-premium inline-block">
              {companyData.cta.button.text}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
