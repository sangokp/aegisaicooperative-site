import { motion } from 'framer-motion';
import { Globe, Eye, Lock } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="bg-[var(--aegis-void)] min-h-screen">

      {/* Hero */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="section-label">Data Governance</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-[var(--aegis-text-primary)] mt-4 mb-8 tracking-tight">
            Privacy Policy
          </h1>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="divider" />
      </div>

      {/* Content */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto space-y-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-display text-2xl font-bold text-[var(--aegis-text-primary)] tracking-tight">
              I. Our Commitment
            </h2>
            <p className="text-[var(--aegis-text-secondary)] leading-relaxed">
              AEGIS AI Cooperative is built on trust architecture. We believe in radical transparency, user sovereignty, and the absolute minimization of data collection. Your data belongs to you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h2 className="font-display text-2xl font-bold text-[var(--aegis-text-primary)] tracking-tight">
              II. What We Collect
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <Globe size={20} className="text-[var(--aegis-accent)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[var(--aegis-text-primary)] font-medium">Identity Information</p>
                  <p className="text-[var(--aegis-text-secondary)] text-sm">Minimal contact details for inquiry fulfillment.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Eye size={20} className="text-[var(--aegis-accent)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[var(--aegis-text-primary)] font-medium">Telemetry</p>
                  <p className="text-[var(--aegis-text-secondary)] text-sm">Non-identifying performance metrics to improve our services.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Lock size={20} className="text-[var(--aegis-accent)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[var(--aegis-text-primary)] font-medium">Security Logs</p>
                  <p className="text-[var(--aegis-text-secondary)] text-sm">Technical logs for threat mitigation and system integrity.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-display text-2xl font-bold text-[var(--aegis-text-primary)] tracking-tight">
              III. Data Sharing
            </h2>
            <p className="text-[var(--aegis-text-secondary)] leading-relaxed">
              We do not monetize your information. Data is shared only under explicit consent, direct legal mandate, or essential safety protocols. We will never sell your data to third parties.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="font-display text-2xl font-bold text-[var(--aegis-text-primary)] tracking-tight">
              IV. Your Rights
            </h2>
            <p className="text-[var(--aegis-text-secondary)] leading-relaxed">
              You have the right to access, correct, or delete any personal data we hold about you. You may also request a copy of your data in a portable format. To exercise these rights, contact us at the address below.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-[var(--aegis-border)]"
          >
            <span className="section-label text-[var(--aegis-text-muted)] block mb-4">
              Contact for Privacy Inquiries
            </span>
            <a
              href="mailto:hermes@aegisos.ai"
              className="text-[var(--aegis-text-primary)] font-display text-xl font-bold hover:text-[var(--aegis-accent)] transition-colors"
            >
              hermes@aegisos.ai
            </a>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
