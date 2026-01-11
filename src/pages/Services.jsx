import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Code, Lightbulb, Network, ArrowRight, Check } from 'lucide-react';
import servicesData from '../data/services.json';

// Icon name to component mapping
const iconMap = { Shield, Code, Lightbulb, Network };

export default function Services() {
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
              {servicesData.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="section-subheading mx-auto"
            >
              {servicesData.subheadline}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white/40">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {servicesData.services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-[var(--accent)]/20 bg-white"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mb-6">
                  {IconComponent && <IconComponent className="w-7 h-7 text-[var(--accent)]" />}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-zinc-100">{service.title}</h3>
                <p className="text-zinc-100/70 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-zinc-100/70">
                      <Check size={16} className="text-[var(--accent)] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading mb-16 text-center">{servicesData.process.headline}</h2>

            <div className="space-y-8">
              {servicesData.process.steps.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[var(--accent)] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{phase.step}</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-semibold mb-2 text-zinc-100">{phase.title}</h3>
                    <p className="text-zinc-100/70">{phase.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111] text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-white/70 text-lg mb-10">
              Every engagement starts with a conversation. Tell us about your challenges
              and we'll show you how trust architecture can help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#7a6240] transition-colors"
            >
              Schedule a consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
