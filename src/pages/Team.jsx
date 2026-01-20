import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, ArrowUpRight } from 'lucide-react';
import teamData from '../data/team.json';

export default function Team() {
  return (
    <div className="relative overflow-hidden bg-[var(--color-void)] min-h-screen">
      
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO - THE MINDS
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-48 pb-32">
        <div className="absolute top-0 left-[10%] w-[40vw] h-[40vw] bg-[var(--color-gold)] opacity-5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-6xl md:text-8xl font-bold text-[var(--aegis-text-primary)] tracking-tighter mb-8 text-gradient-white uppercase">
              THE<br />ENGINEERS
            </h1>
            <p className="font-body text-xl md:text-2xl text-[var(--aegis-text-secondary)] max-w-2xl mx-auto font-light leading-relaxed">
              {teamData.subheadline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          TEAM GRID
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 relative z-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {teamData.members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={`/team/${member.id}`} className="block">
                  <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden glass-panel border border-white/5 mb-8 transition-all duration-500 group-hover:border-white/20 group-hover:shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-charcoal)] group-hover:scale-105 transition-transform duration-700">
                      <span className="font-display font-black text-white/5 text-[12rem] md:text-[15rem] select-none transition-colors duration-500 group-hover:text-white/10">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute bottom-8 left-8 right-8 z-20">
                      <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-[var(--color-accent)] text-xs font-mono uppercase tracking-widest">View Profile</span>
                        <ArrowUpRight size={12} className="text-[var(--color-accent)]" />
                      </div>
                      <h3 className="text-3xl font-display font-bold text-[var(--aegis-text-primary)] mb-1 tracking-tight">{member.name}</h3>
                      <p className="text-[var(--color-accent)] font-mono text-[10px] uppercase tracking-widest">{member.role}</p>
                    </div>
                  </div>
                </Link>

                <div className="px-4">
                  <p className="text-[var(--aegis-text-muted)] font-body font-light text-sm leading-relaxed mb-6">
                    Focus: {member.focus} — {member.bio}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--aegis-text-muted)] hover:text-white transition-colors"
                  >
                    <Linkedin size={14} /> Network Node <ArrowUpRight size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CULTURE - THE OPERATING SYSTEM
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-40 bg-white/[0.01] border-y border-white/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-[var(--aegis-text-primary)] mb-12 tracking-tight text-center">THE OPERATING SYSTEM</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teamData.culture.values.map((value, index) => (
                <div key={index} className="p-8 rounded-[2rem] glass-panel border border-white/5 bg-[var(--color-charcoal)]/30">
                  <h4 className="font-display font-bold text-[var(--aegis-text-primary)] mb-4 uppercase tracking-wide text-sm">{value.title}</h4>
                  <p className="text-[var(--aegis-text-muted)] font-body font-light text-xs leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          JOIN CALL
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-40">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--aegis-text-primary)] mb-8 tracking-tight">MISSION READY?</h2>
            <p className="text-xl text-[var(--aegis-text-muted)] mb-12 font-light font-body">We are always scouting for high-level technical talent aligned with our cooperative mission.</p>
            <Link to="/contact" className="btn-premium">
              Connect With Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}