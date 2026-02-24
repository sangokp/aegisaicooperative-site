import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, ArrowRight } from 'lucide-react';
import teamData from '../data/team.json';

export default function Team() {
  return (
    <div className="bg-[var(--aegis-void)] min-h-screen">

      {/* Hero */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="section-label">The Cooperative</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-[var(--aegis-text-primary)] mt-4 mb-8 tracking-tight">
            Our Team
          </h1>
          <p className="text-lg md:text-xl text-[var(--aegis-text-secondary)] leading-relaxed max-w-2xl">
            {teamData.subheadline}
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="divider" />
      </div>

      {/* Team Grid */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-3 gap-8">
          {teamData.members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/team/${member.id}`} className="block">
                <div className="aspect-[4/5] mb-6 rounded-xl border border-[var(--aegis-border)] bg-[var(--aegis-engine)] flex items-center justify-center relative overflow-hidden group-hover:border-[var(--aegis-border-active)] transition-all group-hover:shadow-[var(--aegis-glow-sm)]">
                  <span className="font-display font-extrabold text-[var(--aegis-charcoal)] text-[10rem] select-none group-hover:text-[var(--aegis-accent-muted)] transition-colors">
                    {member.name.charAt(0)}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[var(--aegis-void)] via-[var(--aegis-void)]/80 to-transparent">
                    <span className="font-mono text-xs text-[var(--aegis-accent)] tracking-wider block mb-2">
                      {member.role}
                    </span>
                    <h3 className="font-display text-xl font-bold text-[var(--aegis-text-primary)]">
                      {member.name}
                    </h3>
                  </div>
                </div>
              </Link>

              <p className="text-[var(--aegis-text-secondary)] text-sm leading-relaxed mb-3">
                {member.focus}
              </p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[var(--aegis-text-muted)] hover:text-[var(--aegis-accent)] transition-colors"
              >
                <Linkedin size={14} /> Connect on LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 md:py-32 bg-[var(--aegis-engine)] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="text-center mb-16">
            <span className="section-label">Our Values</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--aegis-text-primary)] mt-4 tracking-tight">
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teamData.culture.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-noir p-8"
              >
                <h4 className="font-display text-lg font-bold text-[var(--aegis-text-primary)] mb-3">
                  {value.title}
                </h4>
                <p className="text-[var(--aegis-text-secondary)] text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--aegis-text-primary)] mb-6 tracking-tight">
            Join the Cooperative
          </h2>
          <p className="text-lg text-[var(--aegis-text-secondary)] mb-10 max-w-xl mx-auto">
            We are always seeking talented engineers aligned with our mission of building trustworthy AI systems.
          </p>
          <Link
            to="/contact"
            className="btn-premium inline-flex items-center gap-2 py-4"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
