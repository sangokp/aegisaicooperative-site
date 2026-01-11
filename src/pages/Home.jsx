import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Users, BookOpen, Check, MapPin, ArrowRight } from 'lucide-react';
import companyData from '../data/company.json';
import partnershipsData from '../data/partnerships.json';

// Icon name to component mapping
const iconMap = { Shield, Users, BookOpen, Check, MapPin, ArrowRight };

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-28 relative overflow-hidden">
        {/* Removed animated blobs - cleaner dark aesthetic */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-zinc-100">
                {companyData.hero.headline}
              </h1>
              <p className="text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto font-light text-zinc-400">
                {companyData.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to={companyData.hero.cta.primary.link} className="btn-primary w-full sm:w-auto text-center">
                  {companyData.hero.cta.primary.text}
                </Link>
                <Link to={companyData.hero.cta.secondary.link} className="btn-secondary w-full sm:w-auto text-center">
                  {companyData.hero.cta.secondary.text}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="relative z-10 py-10 border-y border-zinc-800 bg-zinc-900/50 backdrop-blur-md">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 text-sm text-zinc-400">
            {companyData.proofStrip.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div key={index} className="flex items-center gap-2.5">
                  {IconComponent && <IconComponent size={18} className="text-blue-500" />}
                  <span className="font-medium">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-100">{companyData.grantServices.headline}</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">{companyData.grantServices.subheadline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {companyData.grantServices.services.map((service, index) => {
              const ServiceIcon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-10 rounded-2xl border border-[var(--accent)]/20 bg-white/50 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6">
                    {ServiceIcon && <ServiceIcon className="w-6 h-6 text-blue-500" />}
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#111111' }}>{service.title}</h3>
                  <p className="mb-4 leading-relaxed" style={{ color: 'rgba(17, 17, 17, 0.7)' }}>
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check size={18} className="text-[var(--accent)] flex-shrink-0 mt-1" />
                        <span className="text-sm" style={{ color: 'rgba(17, 17, 17, 0.7)' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-32 bg-white/40">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-zinc-100 text-center">{companyData.differentiators.headline}</h2>

            <div className="space-y-6">
              {companyData.differentiators.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center">
                      <Check size={16} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-zinc-100">{item.title}</h3>
                    <p className="text-zinc-100/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Alliances */}
      <section className="py-32">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-100">{partnershipsData.headline}</h2>
              <p className="text-xl text-zinc-100/60 max-w-2xl mx-auto font-light">{partnershipsData.subheadline}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mb-12">
              {partnershipsData.models.map((model, index) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-10 rounded-2xl border border-[var(--accent)]/20 bg-white/50 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#111111' }}>{model.title}</h3>
                  <p className="mb-4" style={{ color: 'rgba(17, 17, 17, 0.7)' }}>
                    {model.description}
                  </p>
                  <Link to={model.cta.link} className="text-[var(--accent)] font-semibold hover:underline inline-flex items-center gap-1 group">
                    {model.cta.text} <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[var(--accent)]/10 to-[var(--accent)]/5 rounded-2xl p-10 border border-[var(--accent)]/30">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-zinc-100">{partnershipsData.featured.badge}</h3>
                  <p className="text-lg text-[var(--accent)] font-semibold mb-2">{partnershipsData.featured.name}</p>
                  <p className="text-zinc-100/70 mb-4">Focus: {partnershipsData.featured.focus}</p>
                  <a href={partnershipsData.featured.url} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] font-semibold hover:underline inline-flex items-center gap-1 group">
                    {partnershipsData.featured.cta} <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/50">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-zinc-100">{companyData.cta.headline}</h2>
            <p className="text-lg text-zinc-100/70 mb-8">{companyData.cta.subheadline}</p>
            <Link to={companyData.cta.button.link} className="btn-primary inline-flex items-center gap-2">
              {companyData.cta.button.text} <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
