import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Shield } from 'lucide-react';

export default function About() {
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
              About AEGIS AI Cooperative
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="section-subheading mx-auto"
            >
              An engineering cooperative dedicated to building reliable, accountable
              AI systems that serve people—not extract from them.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white/40">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-zinc-100">Our Mission</h2>
                <p className="text-zinc-100/70 text-lg leading-relaxed mb-6">
                  Most AI today is designed to extract value from you—your data, your
                  attention, your agency. We're building the opposite.
                </p>
                <p className="text-zinc-100/70 leading-relaxed">
                  AEGIS AI Cooperative exists to create AI systems that you control,
                  that are accountable, and that actually serve your goals. We believe
                  trust architecture is the foundation of useful AI.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[var(--accent)]/10 to-[var(--accent)]/5 rounded-2xl p-10 border border-[var(--accent)]/20">
                <blockquote className="text-xl text-zinc-100 font-medium italic">
                  "AI should be governed infrastructure, not just another chat product."
                </blockquote>
                <p className="mt-4 text-[var(--accent)] font-semibold">— AEGIS Core Thesis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading mb-16 text-center">Our Values</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Stakeholder-Aligned',
                  description: 'We operate as a cooperative because our incentives should match yours. No venture pressure to compromise user interests.'
                },
                {
                  icon: Eye,
                  title: 'Transparent',
                  description: 'Every AI action is logged, traceable, and explainable. You can see exactly what\'s happening and why.'
                },
                {
                  icon: Shield,
                  title: 'Trust-First',
                  description: 'We build governance into systems from day one—not as an afterthought. Safety isn\'t a feature; it\'s the foundation.'
                },
                {
                  icon: Heart,
                  title: 'Human-Centered',
                  description: 'AI should augment human capability, not replace human judgment. Final authority always remains with people.'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-xl border border-[var(--accent)]/20 bg-white/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-100">{value.title}</h3>
                  <p className="text-zinc-100/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cooperative Structure */}
      <section className="py-20 bg-white/40">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading mb-6">Why a Cooperative?</h2>
            <p className="section-subheading mx-auto mb-10">
              Traditional venture-backed AI companies face pressure to maximize extraction.
              Our cooperative structure means we can focus on what actually matters:
              building AI that works for you.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-xl bg-white border border-[var(--accent)]/10">
                <h4 className="font-semibold mb-2 text-zinc-100">No Extraction Pressure</h4>
                <p className="text-sm text-zinc-100/70">
                  We're not trying to monetize your data or lock you into an ecosystem.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-[var(--accent)]/10">
                <h4 className="font-semibold mb-2 text-zinc-100">Long-Term Thinking</h4>
                <p className="text-sm text-zinc-100/70">
                  We can make decisions for sustainability, not just next quarter's metrics.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-[var(--accent)]/10">
                <h4 className="font-semibold mb-2 text-zinc-100">Aligned Incentives</h4>
                <p className="text-sm text-zinc-100/70">
                  When you succeed with our systems, we succeed. It's that simple.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-zinc-100">Want to learn more?</h2>
            <p className="text-zinc-100/70 mb-8">
              Meet our team or get in touch to discuss how we can help your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/team" className="btn-secondary">
                Meet the team
              </Link>
              <Link to="/contact" className="btn-primary">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
