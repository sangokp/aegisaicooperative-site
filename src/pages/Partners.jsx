import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import partnershipsData from '../data/partnerships.json';

export default function Partners() {
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
          <span className="section-label">Alliances</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-[var(--aegis-text-primary)] mt-4 mb-8 tracking-tight">
            {partnershipsData.headline}
          </h1>
          <p className="text-lg md:text-xl text-[var(--aegis-text-secondary)] leading-relaxed max-w-2xl">
            {partnershipsData.subheadline}
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="divider" />
      </div>

      {/* Partnership Models */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partnershipsData.models.map((model, index) => (
            <motion.article
              key={model.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card-noir card-noir-glow p-8 md:p-10 flex flex-col"
            >
              <span className="font-mono text-xs text-[var(--aegis-accent)] tracking-wider mb-6">
                Model {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--aegis-text-primary)] mb-3">
                {model.title}
              </h3>
              <p className="text-[var(--aegis-text-secondary)] text-sm leading-relaxed mb-8 flex-grow">
                {model.description}
              </p>
              <Link
                to={model.cta.link}
                className="inline-flex items-center gap-2 text-[var(--aegis-accent)] text-sm font-semibold group"
              >
                {model.cta.text}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Featured Partner */}
      <section className="py-24 md:py-32 bg-[var(--aegis-engine)] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-label">{partnershipsData.featured.badge}</span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-[var(--aegis-text-primary)] mt-4 mb-6 tracking-tight">
              {partnershipsData.featured.name}
            </h3>
            <p className="text-lg text-[var(--aegis-text-secondary)] leading-relaxed mb-4">
              {partnershipsData.featured.focus}
            </p>
            <p className="text-[var(--aegis-text-secondary)] text-sm leading-relaxed mb-10 max-w-2xl mx-auto">
              {partnershipsData.featured.description}
            </p>

            <a
              href={partnershipsData.featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-premium inline-flex items-center gap-2 py-3"
            >
              {partnershipsData.featured.cta} <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <span className="section-label">{partnershipsData.engagement.headline}</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--aegis-text-primary)] mt-4 tracking-tight">
            How to Partner
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnershipsData.engagement.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-noir p-6 text-center"
            >
              <div className="font-display text-4xl font-extrabold gradient-text-blue mb-4">
                {step.step}
              </div>
              <h4 className="font-display text-lg font-bold text-[var(--aegis-text-primary)] mb-3">
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--aegis-text-primary)] mb-6 leading-tight tracking-tight">
            Explore Partnership
          </h2>
          <p className="text-lg text-[var(--aegis-text-secondary)] mb-10 max-w-xl mx-auto">
            Learn how AEGIS can serve as the technical execution arm for your community or organization.
          </p>
          <Link
            to="/contact"
            className="btn-premium inline-flex items-center gap-2 py-4"
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
