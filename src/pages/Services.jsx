import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import servicesData from '../data/services.json';

export default function Services() {
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
            Our Capabilities
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-[var(--aegis-text-primary)] mb-8">
            {servicesData.headline}
          </h1>
          <p className="text-lg md:text-xl text-[var(--aegis-text-secondary)] leading-relaxed max-w-2xl">
            {servicesData.subheadline}
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <hr className="border-t border-[var(--aegis-border)]" />
      </div>

      {/* Services List */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="space-y-24">
          {servicesData.services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-24 border-b border-[var(--aegis-border)] last:border-b-0 last:pb-0"
            >
              <div className="lg:col-span-1">
                <span className="small-caps text-xs text-[var(--aegis-rust)] tracking-[0.15em]">
                  0{index + 1}
                </span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-display text-2xl md:text-3xl font-medium text-[var(--aegis-text-primary)] leading-tight">
                  {service.title}
                </h3>
              </div>
              <div className="lg:col-span-7">
                <p className="text-lg text-[var(--aegis-text-secondary)] leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-sm text-[var(--aegis-text-muted)] border-l-2 border-[var(--aegis-sage)] pl-3"
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
      <section className="py-24 md:py-32 bg-[var(--aegis-charcoal)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="small-caps text-xs text-[var(--aegis-gold)] mb-12 text-center tracking-[0.2em]">
            The Protocol
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {servicesData.process.steps.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-6xl font-medium text-[var(--aegis-border)] mb-6">
                  {phase.step}
                </div>
                <h3 className="font-display text-xl font-medium text-[var(--aegis-text-primary)] mb-4">
                  {phase.title}
                </h3>
                <p className="text-[var(--aegis-text-secondary)] leading-relaxed">
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-[var(--aegis-text-primary)] mb-6 leading-tight">
            Ready to Build?
          </h2>
          <p className="text-lg text-[var(--aegis-text-secondary)] mb-10 max-w-xl mx-auto">
            Tell us about your project and we will design a solution together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[var(--aegis-text-primary)] text-[var(--aegis-void)] px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-[var(--aegis-rust)] transition-colors"
          >
            Start Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
