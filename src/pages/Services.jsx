import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import servicesData from '../data/services.json';

export default function Services() {
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
          <span className="section-label">Our Capabilities</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-[var(--aegis-text-primary)] mt-4 mb-8 tracking-tight">
            {servicesData.headline}
          </h1>
          <p className="text-lg md:text-xl text-[var(--aegis-text-secondary)] leading-relaxed max-w-2xl">
            {servicesData.subheadline}
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="divider" />
      </div>

      {/* Services List */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="space-y-20">
          {servicesData.services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-20 border-b border-[var(--aegis-border)] last:border-b-0 last:pb-0"
            >
              <div className="lg:col-span-1">
                <span className="font-mono text-xs text-[var(--aegis-accent)] tracking-wider">
                  0{index + 1}
                </span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--aegis-text-primary)] leading-tight tracking-tight">
                  {service.title}
                </h3>
              </div>
              <div className="lg:col-span-7">
                <p className="text-[var(--aegis-text-secondary)] leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono text-[var(--aegis-text-muted)] px-3 py-1.5 rounded-full border border-[var(--aegis-border)] bg-[var(--aegis-engine)]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-[var(--aegis-engine)] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="text-center mb-16">
            <span className="section-label">The Protocol</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--aegis-text-primary)] mt-4 tracking-tight">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.process.steps.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-noir p-8 text-center"
              >
                <div className="font-display text-5xl font-extrabold gradient-text-blue mb-4">
                  {phase.step}
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--aegis-text-primary)] mb-3">
                  {phase.title}
                </h3>
                <p className="text-sm text-[var(--aegis-text-secondary)] leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--aegis-text-primary)] mb-6 leading-tight tracking-tight">
            Ready to Build?
          </h2>
          <p className="text-lg text-[var(--aegis-text-secondary)] mb-10 max-w-xl mx-auto">
            Tell us about your project and we will design a solution together.
          </p>
          <Link
            to="/contact"
            className="btn-premium inline-flex items-center gap-2 py-4"
          >
            Start Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
