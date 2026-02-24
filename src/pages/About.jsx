import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const values = [
    {
      number: '01',
      title: 'Stakeholder-Aligned',
      description: 'We operate as a cooperative because our incentives should match yours. No venture pressure to compromise user interests.'
    },
    {
      number: '02',
      title: 'Transparent',
      description: 'Every AI action is logged, traceable, and explainable. You can see exactly what\'s happening and why.'
    },
    {
      number: '03',
      title: 'Trust-First',
      description: 'We build governance into systems from day one, not as an afterthought. Safety isn\'t a feature; it\'s the foundation.'
    },
    {
      number: '04',
      title: 'Human-Centered',
      description: 'AI should augment human capability, not replace human judgment. Final authority always remains with people.'
    }
  ];

  return (
    <div className="bg-[var(--aegis-void)]">

      {/* Hero */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="section-label">Our Philosophy</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-[var(--aegis-text-primary)] mt-4 mb-8 tracking-tight">
            An engineering cooperative dedicated to building AI systems that serve people,{' '}
            <span className="gradient-text-blue">not extract from them.</span>
          </h1>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="divider" />
      </div>

      {/* Mission */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <span className="section-label">Our Mission</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--aegis-text-primary)] mt-4 mb-8 leading-tight tracking-tight">
              Technology That Serves People
            </h2>
          </div>
          <div className="space-y-6 text-[var(--aegis-text-secondary)] leading-relaxed">
            <p>
              Most AI today is designed to extract value from you: your data, your attention, your agency. We are building the opposite.
            </p>
            <p>
              AEGIS AI Cooperative exists to create AI systems that communities and organizations control, that are accountable, and that actually serve your goals. We build practical tools for STEM education, grant fulfillment, and community advancement.
            </p>
            <p>
              As a cooperative, our incentives are aligned with yours. We succeed when the communities we serve succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--aegis-engine)]" />
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-[var(--aegis-text-primary)]">
            &ldquo;Technology should empower communities, not replace them.&rdquo;
          </blockquote>
          <cite className="block mt-6 text-sm font-mono uppercase tracking-widest text-[var(--aegis-text-muted)] not-italic">
            AEGIS Cooperative Principle
          </cite>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <span className="section-label">Our Values</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--aegis-text-primary)] mt-4 leading-tight tracking-tight">
              Principles We Ship By
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card-noir card-noir-glow p-8 md:p-10"
            >
              <span className="font-mono text-xs text-[var(--aegis-accent)] tracking-wider mb-4 block">
                {value.number}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--aegis-text-primary)] mb-3">
                {value.title}
              </h3>
              <p className="text-[var(--aegis-text-secondary)] text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-[var(--aegis-border)]">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--aegis-text-primary)] mb-6 leading-tight tracking-tight">
            Join the Cooperative
          </h2>
          <p className="text-lg text-[var(--aegis-text-secondary)] mb-10 max-w-xl mx-auto">
            Interested in what we are building? We would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-premium inline-flex items-center justify-center gap-2 py-4"
            >
              Start Conversation
            </Link>
            <Link
              to="/partners"
              className="btn-outline-premium inline-flex items-center justify-center gap-2 py-4"
            >
              Explore Alliances <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
