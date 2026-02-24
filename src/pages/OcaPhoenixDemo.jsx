import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Shield, Users, GraduationCap, Gavel, ArrowRight, Heart, Database, Zap } from "lucide-react";

export default function OcaPhoenixDemo() {
  return (
    <main className="min-h-screen bg-[var(--aegis-void)] text-[var(--aegis-text-primary)] relative overflow-hidden font-body pb-24">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dot-grid opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-32 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <img src="/aegis-logo.svg" alt="AEGIS" className="h-12 mb-12" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl"
          >
            <span className="section-label text-[var(--aegis-accent)] mb-10 block">
              Community Infrastructure // Non-Profit Partnership
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1] text-white mb-12 tracking-tighter">
              Empowering <br />
              <span className="gradient-text-blue italic font-normal">Community Impact.</span>
            </h1>
            <p className="text-xl text-[var(--aegis-text-secondary)] font-light leading-relaxed mb-16 max-w-2xl mx-auto">
              AEGIS provides the technical infrastructure for 4A Greater Phoenix to scale community impact, build donor trust, and support youth leadership pipelines.
            </p>
          </motion.div>
        </div>

        {/* Value Mapping */}
        <section className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 card-noir p-8">
            <span className="font-mono text-xs text-[var(--aegis-accent)] tracking-wider block mb-6">01 / Community Value</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Users, title: 'Community Outreach', desc: 'Personalized engagement across the AANHPI community with secure, privacy-first contact management.' },
                { icon: GraduationCap, title: 'Youth Leadership', desc: 'Support K-12 AANHPI Curriculum Project pipelines with content management and secure student data handling.' },
                { icon: Heart, title: 'Donor Trust', desc: 'Transparent tracking of grant fund utilization. Every dollar spent is traceable to community outcomes.' },
                { icon: Gavel, title: 'Civic Engagement', desc: 'Secure advocacy platforms built with privacy and integrity at their foundation.' },
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <item.icon className="text-[var(--aegis-accent)]" size={20} />
                    <h4 className="font-bold">{item.title}</h4>
                  </div>
                  <p className="text-sm text-[var(--aegis-text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-noir p-8 flex flex-col">
            <span className="font-mono text-xs text-[var(--aegis-accent)] tracking-wider block mb-6">02 / Compliance</span>
            <div className="space-y-6 flex-grow">
              {[
                { title: '501(c)(3) Governance', desc: 'Audit-ready logs for all AI-assisted financial and operational decisions.' },
                { title: 'Data Privacy', desc: 'End-to-end protection for member databases, safeguarding the privacy of Arizona AAPI families.' },
                { title: 'Grant Compliance', desc: 'Automated reporting that meets federal and state STEM grant requirements.' },
              ].map((item, i) => (
                <div key={i}>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-xs text-[var(--aegis-text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold tracking-tight">The Infrastructure of Community</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Database, title: 'Your Data, Your Control', desc: '4A Greater Phoenix maintains full ownership of its institutional knowledge. No data leaves without authorization.' },
              { icon: Shield, title: 'Privacy by Design', desc: 'Community member identities remain protected. Privacy is built into every layer of the system.' },
              { icon: Zap, title: 'Focus on What Matters', desc: 'Automate administrative overhead so leadership can focus on direct advocacy and community building.' },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-14 h-14 bg-[var(--aegis-accent-muted)] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-[var(--aegis-accent)]" size={24} />
                </div>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-sm text-[var(--aegis-text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center"
        >
          <h2 className="text-4xl font-display font-bold mb-8 tracking-tight">Ready to Scale the Mission?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="btn-premium py-5 px-10"
            >
              Request Partnership Briefing
            </Link>
            <a
              href="https://azasianamerican.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-premium py-5 px-10 flex items-center justify-center gap-3"
            >
              Visit 4A Website <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
