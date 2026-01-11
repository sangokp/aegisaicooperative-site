import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import teamData from '../data/team.json';

export default function Team() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-heading mb-6"
            >
              {teamData.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="section-subheading mx-auto"
            >
              {teamData.subheadline}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white/40">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {teamData.members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  {/* Avatar placeholder */}
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--accent)]/30 to-[var(--accent)]/10 flex items-center justify-center">
                    <span className="text-4xl font-bold text-[var(--accent)]">
                      {member.name.charAt(0)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-100 mb-1">{member.name}</h3>
                  <p className="text-[var(--accent)] font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-zinc-100/60 mb-4">{member.focus}</p>
                  <p className="text-sm text-zinc-100/70 mb-4">{member.bio}</p>

                  <a
                    href={member.linkedin}
                    className="inline-flex items-center gap-2 text-sm text-zinc-100/60 hover:text-[var(--accent)] transition-colors"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-zinc-100">{teamData.culture.headline}</h2>
            <p className="text-zinc-100/70 text-lg leading-relaxed mb-10">
              We're a distributed team that believes in deep work and clear communication.
              We move fast on what matters and take time to get important things right.
              No meeting culture—we document decisions and ship working software.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {teamData.culture.values.map((value, index) => (
                <div key={index} className="p-6 rounded-xl border border-[var(--accent)]/10 bg-white/50">
                  <h4 className="font-semibold mb-2 text-zinc-100">{value.title}</h4>
                  <p className="text-sm text-zinc-100/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-white/40">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-zinc-100">Work with us</h2>
            <p className="text-zinc-100/70 mb-8">
              Interested in what we're building? Let's talk about how we can help
              your organization implement trust-first AI.
            </p>
            <Link to="/contact" className="btn-primary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
