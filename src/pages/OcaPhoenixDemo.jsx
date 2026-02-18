import { Link } from "react-router-dom";
import { Shield, Users, GraduationCap, Gavel, ArrowRight, Heart, Database, Zap } from "lucide-react";

export default function OcaPhoenixDemo() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#FAFAFA] relative overflow-hidden font-body pb-24">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(#c45d3a 1px, transparent 1px), linear-gradient(90deg, #c45d3a 1px, transparent 1px)",
            backgroundSize: "100px 100px"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <img src="/aegis-logo.svg" alt="AEGIS" className="h-12 mb-12 invert" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl"
          >
            <p className="small-caps text-xs text-[#c45d3a] mb-10 tracking-[0.4em] uppercase font-bold">
              Community Infrastructure // Non-Profit Partnership
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1] text-white mb-12 tracking-tighter">
              Empowering <br />
              <span className="italic font-normal opacity-50 text-[#c45d3a]">Community Impact.</span>
            </h1>
            <p className="text-xl text-[#A1A1AA] font-light leading-relaxed mb-16 max-w-2xl mx-auto">
              AEGIS provides the technical infrastructure for 4A Greater Phoenix to scale community impact, build donor trust, and support youth leadership pipelines.
            </p>
          </motion.div>
        </div>

        {/* Value Mapping */}
        <section className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 p-8 border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]">
            <h3 className="text-sm font-body text-[#c45d3a] mb-6 uppercase tracking-widest">01 / Community Value</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="text-[#c45d3a]" size={20} />
                  <h4 className="font-bold">Community Outreach</h4>
                </div>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  Personalized engagement across the AANHPI community with secure, privacy-first contact management.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-[#c45d3a]" size={20} />
                  <h4 className="font-bold">Youth Leadership</h4>
                </div>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  Support K-12 AANHPI Curriculum Project pipelines with content management and secure student data handling.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Heart className="text-[#c45d3a]" size={20} />
                  <h4 className="font-bold">Donor Trust</h4>
                </div>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  Transparent tracking of grant fund utilization. Every dollar spent is traceable to community outcomes.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Gavel className="text-[#c45d3a]" size={20} />
                  <h4 className="font-bold">Civic Engagement</h4>
                </div>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  Secure advocacy platforms built with privacy and integrity at their foundation.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] flex flex-col">
            <h3 className="text-sm font-body text-[#c45d3a] mb-6 uppercase tracking-widest">02 / Compliance</h3>
            <div className="space-y-6 flex-grow">
              <div>
                <h4 className="font-bold mb-2">501(c)(3) Governance</h4>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Audit-ready logs for all AI-assisted financial and operational decisions.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Data Privacy</h4>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  End-to-end protection for member databases, safeguarding the privacy of Arizona AAPI families.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Grant Compliance</h4>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Automated reporting that meets federal and state STEM grant requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold">The Infrastructure of Community</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[rgba(196,93,58,0.1)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="text-[#c45d3a]" size={24} />
              </div>
              <h4 className="text-xl font-bold">Your Data, Your Control</h4>
              <p className="text-sm text-[#A1A1AA]">4A Greater Phoenix maintains full ownership of its institutional knowledge. No data leaves without authorization.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[rgba(196,93,58,0.1)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-[#c45d3a]" size={24} />
              </div>
              <h4 className="text-xl font-bold">Privacy by Design</h4>
              <p className="text-sm text-[#A1A1AA]">Community member identities remain protected. Privacy is built into every layer of the system.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[rgba(196,93,58,0.1)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-[#c45d3a]" size={24} />
              </div>
              <h4 className="text-xl font-bold">Focus on What Matters</h4>
              <p className="text-sm text-[#A1A1AA]">Automate administrative overhead so leadership can focus on direct advocacy and community building.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center"
        >
          <h2 className="text-4xl font-display font-bold mb-8">Ready to Scale the Mission?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-[#c45d3a] text-white px-12 py-6 font-body text-sm uppercase tracking-[0.3em] font-bold hover:bg-[#a84d2f] transition-all shadow-[0_0_40px_rgba(196,93,58,0.2)]"
            >
              Request Partnership Briefing
            </Link>
            <a
              href="https://azasianamerican.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[rgba(255,255,255,0.1)] text-[#FAFAFA] px-12 py-6 font-body text-sm uppercase tracking-[0.3em] font-bold hover:border-[#c45d3a] transition-all flex items-center justify-center gap-3"
            >
              Visit 4A Website <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
