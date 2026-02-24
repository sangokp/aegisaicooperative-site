import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const values = [
    {
      number: 'I',
      title: 'Stakeholder-Aligned',
      color: 'rust',
      description: 'We operate as a cooperative because our incentives should match yours. No venture pressure to compromise user interests.'
    },
    {
      number: 'II',
      title: 'Transparent',
      color: 'gold',
      description: 'Every AI action is logged, traceable, and explainable. You can see exactly what\'s happening and why.'
    },
    {
      number: 'III',
      title: 'Trust-First',
      color: 'sage',
      description: 'We build governance into systems from day one, not as an afterthought. Safety isn\'t a feature; it\'s the foundation.'
    },
    {
      number: 'IV',
      title: 'Human-Centered',
      color: 'rust',
      description: 'AI should augment human capability, not replace human judgment. Final authority always remains with people.'
    }
  ];

  return (
    <div className="bg-[var(--aegis-void)]">

      {/* Hero */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="small-caps text-xs text-[var(--aegis-rust)] mb-6 tracking-[0.2em]">
            Our Philosophy
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-[var(--aegis-text-primary)] mb-8">
            An engineering cooperative dedicated to building AI systems that serve people,{' '}
            <em className="text-[var(--aegis-rust)] not-italic">not extract from them.</em>
          </h1>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <hr className="border-t border-[var(--aegis-border)]" />
      </div>

      {/* Mission */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <p className="small-caps text-xs text-[var(--aegis-sage)] mb-6 tracking-[0.2em]">
              Our Mission
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-[var(--aegis-text-primary)] mb-8 leading-tight">
              Technology That Serves People
            </h2>
          </div>
          <div className="space-y-6 text-lg text-[var(--aegis-text-secondary)] leading-relaxed">
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
      <section className="py-16 md:py-24 bg-[var(--aegis-text-primary)] text-[var(--aegis-void)]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <blockquote className="font-display text-2xl md:text-3xl font-normal leading-relaxed italic">
            "Technology should empower communities, not replace them."
          </blockquote>
          <cite className="block mt-6 text-sm uppercase tracking-widest opacity-50 not-italic">
            AEGIS Cooperative Principle
          </cite>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <p className="small-caps text-xs text-[var(--aegis-gold)] mb-12 text-center tracking-[0.2em]">
          Our Values
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {values.map((value, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 md:p-10 border border-[var(--aegis-border)] bg-[var(--aegis-surface)]"
            >
              <p className={`small-caps text-xs text-[var(--aegis-${value.color})] mb-4 tracking-[0.15em]`}>
                {value.number}. {value.title}
              </p>
              <h3 className="font-display text-2xl font-medium text-[var(--aegis-text-primary)] mb-4">
                {value.title}
              </h3>
              <p className="text-[var(--aegis-text-secondary)] leading-relaxed">
                {value.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-[var(--aegis-border)]">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-[var(--aegis-text-primary)] mb-6 leading-tight">
            Join the Cooperative
          </h2>
          <p className="text-lg text-[var(--aegis-text-secondary)] mb-10 max-w-xl mx-auto">
            Interested in what we are building? We would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-[var(--aegis-text-primary)] text-[var(--aegis-void)] px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-[var(--aegis-rust)] transition-colors"
            >
              Start Conversation
            </Link>
            <Link
              to="/partners"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm uppercase tracking-widest font-semibold border border-[var(--aegis-border)] text-[var(--aegis-text-primary)] hover:border-[var(--aegis-rust)] hover:text-[var(--aegis-rust)] transition-colors"
            >
              Explore Alliances <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
