import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import partnershipsData from '../data/partnerships.json';

export default function Partners() {
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
            Alliances
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-[var(--aegis-text-primary)] mb-8">
            {partnershipsData.headline}
          </h1>
          <p className="text-lg md:text-xl text-[var(--aegis-text-secondary)] leading-relaxed max-w-2xl">
            {partnershipsData.subheadline}
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <hr className="border-t border-[var(--aegis-border)]" />
      </div>

      {/* Partnership Models */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {partnershipsData.models.map((model, index) => (
            <motion.article
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 md:p-12 border border-[var(--aegis-border)] bg-[var(--aegis-surface)] hover:border-[var(--aegis-border-hover)] transition-colors"
            >
              <p className="small-caps text-xs text-[var(--aegis-rust)] mb-6 tracking-[0.15em]">
                Partnership Model {index + 1}
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-[var(--aegis-text-primary)] mb-4">
                {model.title}
              </h3>
              <p className="text-[var(--aegis-text-secondary)] leading-relaxed mb-8">
                {model.description}
              </p>
              <Link
                to={model.cta.link}
                className="inline-flex items-center gap-3 text-[var(--aegis-text-primary)] text-sm uppercase tracking-widest font-medium group"
              >
                {model.cta.text}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Featured Partner */}
      <section className="py-24 md:py-32 bg-[var(--aegis-charcoal)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="small-caps text-xs text-[var(--aegis-gold)] mb-12 text-center tracking-[0.2em]">
            {partnershipsData.featured.badge}
          </p>

          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-display text-3xl md:text-4xl font-medium text-[var(--aegis-text-primary)] mb-6">
              {partnershipsData.featured.name}
            </h3>
            <p className="text-lg text-[var(--aegis-text-secondary)] leading-relaxed mb-4">
              {partnershipsData.featured.focus}
            </p>
            <p className="text-[var(--aegis-text-secondary)] leading-relaxed mb-10 max-w-2xl mx-auto">
              {partnershipsData.featured.description}
            </p>

            <a
              href={partnershipsData.featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--aegis-rust)] text-sm border-b border-[var(--aegis-rust)] hover:text-[var(--aegis-accent-hover)] hover:border-[var(--aegis-accent-hover)] transition-colors"
            >
              {partnershipsData.featured.cta} <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <p className="small-caps text-xs text-[var(--aegis-sage)] mb-12 text-center tracking-[0.2em]">
          {partnershipsData.engagement.headline}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {partnershipsData.engagement.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-5xl font-medium text-[var(--aegis-border)] mb-6">
                {step.step}
              </div>
              <h4 className="font-display text-xl font-medium text-[var(--aegis-text-primary)] mb-4">
                {step.title}
              </h4>
              <p className="text-[var(--aegis-text-secondary)] leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-[var(--aegis-border)]">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-[var(--aegis-text-primary)] mb-6 leading-tight">
            Explore Partnership
          </h2>
          <p className="text-lg text-[var(--aegis-text-secondary)] mb-10 max-w-xl mx-auto">
            Learn how AEGIS can serve as the technical execution arm for your community or organization.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[var(--aegis-text-primary)] text-[var(--aegis-void)] px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-[var(--aegis-rust)] transition-colors"
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
