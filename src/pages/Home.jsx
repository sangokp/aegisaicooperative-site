import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from "../components/HeroSection";
import { ArrowRight, Shield, BookOpen, Eye, Users } from 'lucide-react';
import companyData from '../data/company.json';
import partnershipsData from '../data/partnerships.json';

const serviceIcons = {
  'stem-programs': BookOpen,
  'grant-fulfillment': Shield,
};

export default function Home() {
  return (
    <div className="bg-[var(--aegis-void)]">
      <HeroSection />

      {/* ═══════════════════════════════════════════════════════════════════
          THE COOPERATIVE DIFFERENCE
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <span className="section-label">{companyData.differentiators.headline}</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--aegis-text-primary)] mt-4 leading-tight tracking-tight">
              Why Choose AEGIS
            </h2>
          </div>
          <p className="text-[var(--aegis-text-secondary)] max-w-md text-sm leading-relaxed">
            Built different from the ground up. Our cooperative model ensures our incentives always match yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companyData.differentiators.items.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card-noir card-noir-glow p-8 md:p-10 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--aegis-accent-muted)] flex items-center justify-center mb-5">
                <div className="w-2 h-2 rounded-full bg-[var(--aegis-accent)]" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--aegis-text-primary)] mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-[var(--aegis-text-secondary)] text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          GRANT SERVICES
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[var(--aegis-engine)] relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[var(--aegis-accent)]/5 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <span className="section-label">What We Build</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--aegis-text-primary)] mt-4 mb-4 leading-tight tracking-tight">
            {companyData.grantServices.headline}
          </h2>
          <p className="text-lg text-[var(--aegis-text-secondary)] mb-16 max-w-2xl">
            {companyData.grantServices.subheadline}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyData.grantServices.services.map((service, index) => {
              const Icon = serviceIcons[service.id] || Shield;
              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-noir card-noir-glow p-8 md:p-10"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--aegis-accent-muted)] border border-[var(--aegis-border-active)] flex items-center justify-center mb-6">
                    <Icon size={22} className="text-[var(--aegis-accent)]" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--aegis-text-primary)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[var(--aegis-text-secondary)] text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm text-[var(--aegis-text-muted)] flex items-start gap-2">
                        <span className="text-[var(--aegis-accent)] mt-0.5 shrink-0">&bull;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ALLIANCES
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <span className="section-label">Partnerships</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--aegis-text-primary)] mt-4 leading-tight tracking-tight">
              {partnershipsData.headline}
            </h2>
          </div>
          <p className="text-[var(--aegis-text-secondary)] max-w-md text-sm leading-relaxed">
            {partnershipsData.subheadline}
          </p>
        </div>

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
              <span className="section-label text-[var(--aegis-text-muted)] mb-6">
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

      {/* ═══════════════════════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[var(--aegis-engine)]" />
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--aegis-accent)]/5 blur-[120px]" />

        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--aegis-text-primary)] mb-6 leading-tight tracking-tight">
              {companyData.cta.headline}
            </h2>
            <p className="text-lg text-[var(--aegis-text-secondary)] mb-10 max-w-xl mx-auto">
              {companyData.cta.subheadline}
            </p>
            <Link
              to={companyData.cta.button.link}
              className="btn-premium inline-flex items-center gap-3 py-4 px-10"
            >
              {companyData.cta.button.text}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
