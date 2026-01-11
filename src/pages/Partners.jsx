import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Shield, Handshake, Check, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Partners() {
  return (
    <div className="pt-16 pb-24">
      <section className="py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-100">Enterprise partnerships</h1>
            <p className="text-xl text-zinc-100/70 max-w-3xl mx-auto">
              AEGIS partners with businesses, grant-funded non-profits, and organizations that need reliable, secure AI systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-zinc-100 text-center">Partnership models</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-10 rounded-2xl border-2 border-[var(--accent)]/30 bg-white/40"
            >
              <Building2 className="w-10 h-10 text-[var(--accent)] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-zinc-100">Enterprise deployment</h3>
              <p className="text-zinc-100/70 mb-4">
                Direct partnerships with businesses that need secure, accountable AI systems with human oversight.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-[var(--accent)] flex-shrink-0 mt-1" />
                  <span className="text-sm text-zinc-100/70">Multiple safety checks before AI takes action</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-[var(--accent)] flex-shrink-0 mt-1" />
                  <span className="text-sm text-zinc-100/70">Custom testing to prove AI works for your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-[var(--accent)] flex-shrink-0 mt-1" />
                  <span className="text-sm text-zinc-100/70">Pay for results, not just promises</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-10 rounded-2xl border-2 border-[var(--accent)]/30 bg-white/40"
            >
              <Handshake className="w-10 h-10 text-[var(--accent)] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-zinc-100">Non-profit technical execution</h3>
              <p className="text-zinc-100/70 mb-4">
                AEGIS handles the tech side for 501(c)(3) organizations, turning STEM and innovation grants into real, working AI programs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-[var(--accent)] flex-shrink-0 mt-1" />
                  <span className="text-sm text-zinc-100/70">Track grant impact with detailed records</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-[var(--accent)] flex-shrink-0 mt-1" />
                  <span className="text-sm text-zinc-100/70">Complete STEM program setup and launch</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-[var(--accent)] flex-shrink-0 mt-1" />
                  <span className="text-sm text-zinc-100/70">Tax-deductible donations through our 501(c)(3) partner</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Partner */}
      <section className="py-16 bg-white/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-zinc-100 text-center">Current strategic partner</h2>
            <div className="bg-gradient-to-br from-[var(--accent)]/10 to-[var(--accent)]/5 rounded-2xl p-10 border-2 border-[var(--accent)]/30">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-zinc-100">Exclusive Technical Partner</h3>
                  <p className="text-xl text-[var(--accent)] font-semibold mb-3">Arizona Asian American Association (4A)</p>
                  <p className="text-zinc-100/70 mb-4 leading-relaxed">
                    AEGIS handles all technical work for 4A's STEM programs and AI education initiatives. Sponsors fund the 501(c)(3), and AEGIS makes sure grant money delivers real results with clear tracking.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="px-4 py-2 bg-white rounded-lg border border-[var(--accent)]/30">
                      <span className="text-sm font-medium text-zinc-100">Focus: STEM Infrastructure</span>
                    </div>
                    <div className="px-4 py-2 bg-white rounded-lg border border-[var(--accent)]/30">
                      <span className="text-sm font-medium text-zinc-100">Grant-funded deployment</span>
                    </div>
                    <div className="px-4 py-2 bg-white rounded-lg border border-[var(--accent)]/30">
                      <span className="text-sm font-medium text-zinc-100">501(c)(3) partnership</span>
                    </div>
                  </div>
                  <a href="https://azasianamerican.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] font-semibold hover:underline inline-flex items-center gap-1 group mt-4">
                    Learn about 4A <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-zinc-100 text-center">Engagement process</h2>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex gap-6 p-8 rounded-xl border-2 border-[var(--accent)]/30 bg-white/40"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--accent)] text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-100">Discovery & scoping</h3>
                  <p className="text-zinc-100/70">
                    Initial consultation to understand your organization's needs, compliance requirements, and what success looks like. We define clear milestones and testing criteria.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex gap-6 p-8 rounded-xl border-2 border-[var(--accent)]/30 bg-white/40"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--accent)] text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-100">Pilot deployment</h3>
                  <p className="text-zinc-100/70">
                    Controlled pilot in a safe testing environment with human oversight. We measure results from day one using metrics you care about.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-6 p-8 rounded-xl border-2 border-[var(--accent)]/30 bg-white/40"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--accent)] text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-100">Progressive scale</h3>
                  <p className="text-zinc-100/70">
                    Gradually move from close supervision to more independence as the AI proves itself. Complete tracking with the ability to review or undo actions at any time.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white/50">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-zinc-100">Start a conversation</h2>
            <p className="text-lg text-zinc-100/70 mb-8">
              Discuss enterprise deployment, grant fulfillment, or strategic partnerships with our team.
            </p>
            <Link to="/contact" className="btn-primary">
              Schedule consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
