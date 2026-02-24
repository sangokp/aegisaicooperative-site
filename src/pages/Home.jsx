import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from "../components/HeroSection";
import { ArrowRight } from 'lucide-react';
import companyData from '../data/company.json';
import partnershipsData from '../data/partnerships.json';

export default function Home() {
  return (
    <div className="bg-[var(--aegis-void)]">
      <HeroSection />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <hr className="border-t border-[var(--aegis-border)]" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════
          THE COOPERATIVE DIFFERENCE
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <p className="small-caps text-xs text-[var(--aegis-sage)] mb-12 text-center tracking-[0.2em]">
          {companyData.differentiators.headline}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {companyData.differentiators.items.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-display text-2xl md:text-3xl font-medium text-[var(--aegis-text-primary)] mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-[var(--aegis-text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          GRANT SERVICES
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[var(--aegis-engine)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="small-caps text-xs text-[var(--aegis-rust)] mb-4 tracking-[0.2em]">
            What We Build
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-[var(--aegis-text-primary)] mb-4 leading-tight">
            {companyData.grantServices.headline}
          </h2>
          <p className="text-lg text-[var(--aegis-text-secondary)] mb-16 max-w-2xl">
            {companyData.grantServices.subheadline}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {companyData.grantServices.services.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 md:p-12 border border-[var(--aegis-border)] bg-[var(--aegis-surface)] hover:border-[var(--aegis-border-hover)] transition-colors"
              >
                <h3 className="font-display text-2xl md:text-3xl font-medium text-[var(--aegis-text-primary)] mb-4">
                  {service.title}
                </h3>
                <p className="text-[var(--aegis-text-secondary)] leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-[var(--aegis-text-secondary)] flex items-start gap-2">
                      <span className="text-[var(--aegis-rust)] mt-1 shrink-0">&bull;</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          ALLIANCES
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-[var(--aegis-text-primary)] leading-tight">
            {partnershipsData.headline}
          </h2>
          <p className="text-lg text-[var(--aegis-text-secondary)] max-w-md">
            {partnershipsData.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
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

      {/* ═══════════════════════════════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-t border-[var(--aegis-border)]">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--aegis-text-primary)] mb-8 leading-tight">
            {companyData.cta.headline}
          </h2>
          <p className="text-lg md:text-xl text-[var(--aegis-text-secondary)] mb-12 max-w-xl mx-auto">
            {companyData.cta.subheadline}
          </p>
          <Link
            to={companyData.cta.button.link}
            className="inline-block bg-[var(--aegis-text-primary)] text-[var(--aegis-void)] px-10 py-5 text-sm uppercase tracking-widest font-semibold hover:bg-[var(--aegis-rust)] transition-colors"
          >
            {companyData.cta.button.text}
          </Link>
        </div>
      </section>

    </div>
  );
}
