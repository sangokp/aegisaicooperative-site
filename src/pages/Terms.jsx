import { Scale, AlertTriangle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="bg-[var(--aegis-void)] min-h-screen">

      {/* Hero */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="small-caps text-xs text-[var(--aegis-rust)] mb-6 tracking-[0.2em]">
            Legal Framework
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-[var(--aegis-text-primary)] mb-8">
            Terms of Service
          </h1>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <hr className="border-t border-[var(--aegis-border)]" />
      </div>

      {/* Content */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-display text-2xl font-medium text-[var(--aegis-text-primary)]">
              I. Acceptance
            </h2>
            <p className="text-[var(--aegis-text-secondary)] leading-relaxed">
              By accessing AEGIS AI Cooperative systems, you agree to be bound by these terms of service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h2 className="font-display text-2xl font-medium text-[var(--aegis-text-primary)]">
              II. Scope of Service
            </h2>
            <p className="text-[var(--aegis-text-secondary)] leading-relaxed">
              AEGIS provides multi-agent AI deployment, trust architecture consulting, and STEM program execution services. We operate on a results-oriented performance model with clear deliverables defined in each engagement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-display text-2xl font-medium text-[var(--aegis-text-primary)]">
              III. Intellectual Property
            </h2>
            <p className="text-[var(--aegis-text-secondary)] leading-relaxed">
              Client-specific implementations and raw data remain the absolute property of the client. AEGIS infrastructure, methodologies, and proprietary systems remain the property of the cooperative.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="font-display text-2xl font-medium text-[var(--aegis-text-primary)]">
              IV. Confidentiality
            </h2>
            <p className="text-[var(--aegis-text-secondary)] leading-relaxed">
              AEGIS maintains strict confidentiality of all client information. We implement zero-trust security architecture and data classification protocols. Client data is never shared with third parties without explicit authorization.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-6 border border-[var(--aegis-gold)]/30 bg-[var(--aegis-gold)]/5 flex gap-4 items-start">
              <AlertTriangle className="text-[var(--aegis-gold)] flex-shrink-0 mt-1" size={20} />
              <p className="text-[var(--aegis-text-secondary)] text-sm leading-relaxed">
                <strong className="text-[var(--aegis-text-primary)]">Limitation of Liability:</strong> Liability is limited to the direct consideration paid for services. Indirect, incidental, or consequential damages are explicitly excluded to the maximum extent permitted by law.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-8 border-t border-[var(--aegis-border)]"
          >
            <p className="small-caps text-xs text-[var(--aegis-sage)] mb-4 tracking-[0.15em]">
              Legal Inquiries
            </p>
            <a
              href="mailto:hermes@aegisos.ai"
              className="text-[var(--aegis-text-primary)] font-display text-xl hover:text-[var(--aegis-rust)] transition-colors"
            >
              hermes@aegisos.ai
            </a>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
