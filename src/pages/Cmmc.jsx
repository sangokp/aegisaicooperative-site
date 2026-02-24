import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowRight, Shield, FileText, Monitor, Factory } from 'lucide-react';

export default function Cmmc() {
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
            CMMC 2.0 COMPLIANCE
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-[var(--aegis-text-primary)] mb-8">
            CMMC Compliance for Defense Manufacturers
          </h1>
          <p className="text-lg md:text-xl text-[var(--aegis-text-secondary)] leading-relaxed max-w-2xl mb-4">
            Automated gap analysis, System Security Plan generation, and continuous monitoring
            for NIST SP 800-171. Built for manufacturing SMBs with OT environments.
          </p>
          <p className="text-base text-[var(--aegis-text-muted)]">
            CMMC 2.0 Level 2 enforcement begins November 2026. Over 220,000 defense contractors must comply.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <hr className="border-t border-[var(--aegis-border)]" />
      </div>

      {/* The Problem */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="small-caps text-xs text-[var(--aegis-gold)] mb-8 tracking-[0.2em]">
            THE PROBLEM
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-[var(--aegis-text-primary)] mb-6">
                110 controls. 320 assessment objectives. No affordable tool for small manufacturers.
              </h2>
              <p className="text-lg text-[var(--aegis-text-secondary)] leading-relaxed">
                Current CMMC compliance options leave small defense manufacturers behind.
                DIY templates cover Level 1 only. Enterprise solutions start at $50,000.
                Nothing exists in the $15,000 to $30,000 range for SMBs that run SCADA
                and PLC systems on the shop floor.
              </p>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-[var(--aegis-rust)] pl-6">
                <p className="text-3xl font-display font-medium text-[var(--aegis-text-primary)]">220,000+</p>
                <p className="text-sm text-[var(--aegis-text-muted)]">Defense contractors affected by CMMC 2.0</p>
              </div>
              <div className="border-l-2 border-[var(--aegis-rust)] pl-6">
                <p className="text-3xl font-display font-medium text-[var(--aegis-text-primary)]">68%</p>
                <p className="text-sm text-[var(--aegis-text-muted)]">Are small businesses</p>
              </div>
              <div className="border-l-2 border-[var(--aegis-rust)] pl-6">
                <p className="text-3xl font-display font-medium text-[var(--aegis-text-primary)]">~270</p>
                <p className="text-sm text-[var(--aegis-text-muted)]">Certified nationally as of early 2026</p>
              </div>
              <div className="border-l-2 border-[var(--aegis-sage)] pl-6">
                <p className="text-3xl font-display font-medium text-[var(--aegis-text-primary)]">Nov 2026</p>
                <p className="text-sm text-[var(--aegis-text-muted)]">Level 2 enforcement deadline</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <hr className="border-t border-[var(--aegis-border)]" />
      </div>

      {/* What We Do */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <p className="small-caps text-xs text-[var(--aegis-gold)] mb-12 tracking-[0.2em]">
          WHAT WE BUILD
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {[
            {
              icon: Shield,
              title: 'Automated Gap Analysis',
              desc: 'Upload your existing policies and documentation. Our tool maps them against all 110 NIST SP 800-171 controls and identifies gaps with specific remediation steps. Understands manufacturing OT context: SCADA, PLC, HMI, air-gapped networks.'
            },
            {
              icon: FileText,
              title: 'SSP Generation',
              desc: 'Auto-generates your System Security Plan from assessment data. Fills the CMMC template with your organization-specific control implementations. Version-controlled with change tracking for audit readiness.'
            },
            {
              icon: Monitor,
              title: 'Continuous Monitoring',
              desc: 'Dashboard tracking control status across all 110 practices. Remediation progress, evidence collection workflow, and audit-ready reporting. Know where you stand at any time, not just during annual reviews.'
            },
            {
              icon: Factory,
              title: 'OT-Aware Assessment',
              desc: 'Built for manufacturers, not IT shops. Understands CUI flow on the shop floor, handles air-gapped network segmentation, and maps control implementations specific to industrial control systems.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-[var(--aegis-border)] p-8"
            >
              <item.icon className="w-6 h-6 text-[var(--aegis-rust)] mb-6" />
              <h3 className="font-display text-xl font-medium text-[var(--aegis-text-primary)] mb-4">
                {item.title}
              </h3>
              <p className="text-[var(--aegis-text-secondary)] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* For MEP Partners */}
      <section className="py-24 md:py-32 bg-[var(--aegis-charcoal)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="small-caps text-xs text-[var(--aegis-gold)] mb-8 tracking-[0.2em]">
              FOR MEP CENTERS AND ADVISORS
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <h2 className="font-display text-2xl md:text-3xl font-medium text-[var(--aegis-text-primary)] mb-6">
                  Your advisors assess 110 controls by hand. We automate that.
                </h2>
                <p className="text-lg text-[var(--aegis-text-secondary)] leading-relaxed">
                  AEGIS is not a competing consultancy. We are the technology layer
                  that makes your existing advisory process faster and more scalable.
                  Your team keeps the client relationship. Our tool does the analysis.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="small-caps text-xs text-[var(--aegis-rust)] tracking-[0.15em] mt-1 w-8 shrink-0">01</span>
                    <div>
                      <h4 className="font-display text-lg font-medium text-[var(--aegis-text-primary)] mb-1">
                        Pilot on your next engagement, free
                      </h4>
                      <p className="text-[var(--aegis-text-secondary)]">
                        We run our tool alongside your advisor on a real CMMC assessment. You compare results.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="small-caps text-xs text-[var(--aegis-rust)] tracking-[0.15em] mt-1 w-8 shrink-0">02</span>
                    <div>
                      <h4 className="font-display text-lg font-medium text-[var(--aegis-text-primary)] mb-1">
                        Scale without adding staff
                      </h4>
                      <p className="text-[var(--aegis-text-secondary)]">
                        Your 9-person team serves 4,600 manufacturers. Our tool lets each advisor handle 3 to 5x more assessments.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="small-caps text-xs text-[var(--aegis-rust)] tracking-[0.15em] mt-1 w-8 shrink-0">03</span>
                    <div>
                      <h4 className="font-display text-lg font-medium text-[var(--aegis-text-primary)] mb-1">
                        Revenue share, not cost center
                      </h4>
                      <p className="text-[var(--aegis-text-secondary)]">
                        Structured as a partnership with referral revenue. The tool generates new billable service engagements for your center.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-[var(--aegis-text-primary)] mb-6 leading-tight">
            Ready to discuss a pilot?
          </h2>
          <p className="text-lg text-[var(--aegis-text-secondary)] mb-10 max-w-xl mx-auto">
            We are looking for MEP centers and cybersecurity advisors who work with defense manufacturers
            to pilot this tool on a real CMMC Level 2 engagement.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[var(--aegis-text-primary)] text-[var(--aegis-void)] px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-[var(--aegis-rust)] transition-colors"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-sm text-[var(--aegis-text-muted)] mt-6">
            AEGIS AI Cooperative, Mesa, Arizona
          </p>
        </div>
      </section>

    </div>
  );
}
