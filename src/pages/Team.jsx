import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, ArrowRight } from 'lucide-react';
import teamData from '../data/team.json';

export default function Team() {
  return (
    <div className="bg-[var(--aegis-void)] min-h-screen">

      {/* Hero */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="small-caps text-xs text-[var(--aegis-rust)] mb-6 tracking-[0.2em]">
            The Cooperative
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-[var(--aegis-text-primary)] mb-8">
            Our Team
          </h1>
          <p className="text-lg md:text-xl text-[var(--aegis-text-secondary)] leading-relaxed max-w-2xl mx-auto">
            {teamData.subheadline}
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <hr className="border-t border-[var(--aegis-border)]" />
      </div>

      {/* Team Grid */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12">
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
                <div className="aspect-[4/5] mb-6 border border-[var(--aegis-border)] bg-[var(--aegis-surface)] flex items-center justify-center relative overflow-hidden group-hover:border-[var(--aegis-border-hover)] transition-colors">
                  <span className="font-display font-medium text-[var(--aegis-border)] text-[10rem] select-none group-hover:text-[var(--aegis-text-muted)] transition-colors">
                    {member.name.charAt(0)}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[var(--aegis-void)] to-transparent">
                    <p className="small-caps text-xs text-[var(--aegis-rust)] mb-2 tracking-[0.15em]">
                      {member.role}
                    </p>
                    <h3 className="font-display text-2xl font-medium text-[var(--aegis-text-primary)]">
                      {member.name}
                    </h3>
                  </div>
                </div>
              </Link>

              <p className="text-[var(--aegis-text-secondary)] text-sm leading-relaxed mb-4">
                {member.focus}
              </p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[var(--aegis-text-muted)] hover:text-[var(--aegis-rust)] transition-colors"
              >
                <Linkedin size={14} /> Connect on LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 md:py-32 bg-[var(--aegis-charcoal)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="small-caps text-xs text-[var(--aegis-gold)] mb-12 text-center tracking-[0.2em]">
            Our Values
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamData.culture.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-[var(--aegis-border)] bg-[var(--aegis-surface)]"
              >
                <h4 className="font-display text-lg font-medium text-[var(--aegis-text-primary)] mb-3">
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
          <h2 className="font-display text-3xl md:text-4xl font-medium text-[var(--aegis-text-primary)] mb-6">
            Join the Cooperative
          </h2>
          <p className="text-lg text-[var(--aegis-text-secondary)] mb-10 max-w-xl mx-auto">
            We are always seeking talented engineers aligned with our mission of building trustworthy AI systems.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[var(--aegis-text-primary)] text-[var(--aegis-void)] px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-[var(--aegis-rust)] transition-colors"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
