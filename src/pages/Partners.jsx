import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Globe, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  ArtifactEnterprise, 
  ArtifactAlliance, 
  ArtifactInfrastructure,
  ArtifactMission
} from '../components/BespokeIcons';

export default function Partners() {
  return (
    <div className="relative overflow-hidden bg-[var(--color-void)]">
      
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO - STRATEGIC ALLIANCES
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-48 pb-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl px-4 md:px-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-display text-6xl md:text-8xl font-bold text-[var(--aegis-text-primary)] tracking-tighter mb-8 text-gradient-white leading-[0.9]">
                STRATEGIC<br />ALLIANCES
              </h1>
              <p className="font-body text-xl md:text-2xl text-[var(--aegis-text-secondary)] max-w-2xl font-light leading-relaxed">
                AEGIS partners with enterprises, grant-funded non-profits, and visionary organizations to deploy verified intelligence systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          MODELS - BENTO GRID
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 md:px-0">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel-hover rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-12 border border-white/5 bg-[var(--color-charcoal)]/30 relative overflow-hidden"
            >
              <div className="mb-8">
                <ArtifactEnterprise className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-6 tracking-tight">Enterprise Deployment</h3>
              <p className="text-[var(--aegis-text-muted)] mb-8 font-body font-light text-lg">
                High-security, accountable AI systems designed for organizational scale with integrated human oversight.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-[var(--aegis-text-secondary)] font-body text-sm">
                  <Check size={16} className="text-[var(--color-accent)]" /> Multi-layer safety verification
                </li>
                <li className="flex items-center gap-3 text-[var(--aegis-text-secondary)] font-body text-sm">
                  <Check size={16} className="text-[var(--color-accent)]" /> Custom adversarial testing
                </li>
                <li className="flex items-center gap-3 text-[var(--aegis-text-secondary)] font-body text-sm">
                  <Check size={16} className="text-[var(--color-accent)]" /> Result-based performance metrics
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel-hover rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-12 border border-white/5 bg-[var(--color-charcoal)]/30 relative overflow-hidden"
            >
              <div className="mb-8">
                <ArtifactAlliance className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-6 tracking-tight">Non-Profit Execution</h3>
              <p className="text-[var(--aegis-text-muted)] mb-8 font-body font-light text-lg">
                Converting STEM and innovation grants into tangible, high-impact AI programs for 501(c)(3) entities.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-[var(--aegis-text-secondary)] font-body text-sm">
                  <Check size={16} className="text-[var(--color-gold)]" /> Transparent grant impact tracking
                </li>
                <li className="flex items-center gap-3 text-[var(--aegis-text-secondary)] font-body text-sm">
                  <Check size={16} className="text-[var(--color-gold)]" /> End-to-end STEM program design
                </li>
                <li className="flex items-center gap-3 text-[var(--aegis-text-secondary)] font-body text-sm">
                  <Check size={16} className="text-[var(--color-gold)]" /> Verified social impact auditing
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          FEATURED ALLIANCE - 4A
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-40 bg-white/[0.01] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto px-4 md:px-0">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--color-gold)] mb-12 text-center">Exclusive Technical Partner</h2>
            
            <div className="glass-panel rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-20 border border-white/10 relative overflow-hidden">
              <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
                <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <ArtifactInfrastructure className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">Arizona Asian American Association (4A)</h3>
                  <p className="text-lg md:text-xl text-[var(--aegis-text-secondary)] font-light leading-relaxed mb-10 font-body">
                    AEGIS serves as the primary technical engine for 4A&apos;s STEM infrastructure. We bridge the gap between philanthropic funding and technical delivery, ensuring every grant dollar fuels authentic community innovation.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-12">
                    {['STEM Infrastructure', 'Grant Fulfillment', 'AI Literacy'].map(tag => (
                      <span key={tag} className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono uppercase tracking-widest text-[var(--aegis-text-secondary)]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href="https://azasianamerican.com/" target="_blank" rel="noopener noreferrer" className="btn-premium inline-flex items-center gap-2 w-full sm:w-auto justify-center">
                    Access 4A Network <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          PROCESS - THE PROTOCOL
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-40 relative z-10">
        <div className="container-custom">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-24 tracking-tight text-gradient-white text-center">THE ALLIANCE PROTOCOL</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-4 md:px-0">
            {[
              { id: '01', title: 'Discovery', desc: 'Sizing the mission and aligning on critical compliance frameworks.' },
              { id: '02', title: 'Pilot', desc: 'Controlled deployment in sandboxed environments with human oversight.' },
              { id: '03', title: 'Scaling', desc: 'Progressive autonomy backed by immutable audit logs.' }
            ].map((step) => (
              <div key={step.id} className="relative group">
                <div className="text-[15vw] md:text-[10vw] font-display font-black text-white/[0.03] absolute top-[-30%] md:top-[-20%] left-0 pointer-events-none group-hover:text-[var(--color-accent)]/10 transition-colors duration-700">{step.id}</div>
                <div className="relative pt-12">
                  <h4 className="text-2xl font-display font-bold text-white mb-4 uppercase tracking-wide">{step.title}</h4>
                  <p className="text-[var(--aegis-text-muted)] font-body font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          FINAL CALL
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-40 border-t border-white/5 bg-[var(--color-charcoal)]/20">
        <div className="container-custom text-center px-4 md:px-0">
          <div className="max-w-2xl mx-auto">
            <ArtifactMission className="w-16 h-16 mx-auto mb-10" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight uppercase">Initialize Contact</h2>
            <p className="text-xl text-[var(--aegis-text-muted)] mb-12 font-light font-body">Discuss enterprise architecture or strategic grant fulfillment with our lead engineers.</p>
            <Link to="/contact" className="btn-premium inline-block w-full sm:w-auto">
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
