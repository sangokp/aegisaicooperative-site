import { Link } from 'react-router-dom';

export default function Arizona() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#FAFAFA] relative overflow-hidden font-body">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#c45d3a 1px, transparent 1px), linear-gradient(90deg, #c45d3a 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(196,93,58,0.1)_0%,transparent_70%)] blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 relative z-10">
        <div className="flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/aegis-logo.svg" alt="AEGIS" className="h-12 mb-12 invert" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <p className="small-caps text-xs text-[#c45d3a] mb-12 tracking-[0.4em] uppercase font-bold">
              Phoenix, Arizona // April 2026
            </p>

            <h1 className="font-display text-5xl md:text-8xl lg:text-9xl font-bold leading-[0.9] text-white mb-12 tracking-tighter">
              Community <br />
              <span className="italic font-normal opacity-50">Intelligence.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#A1A1AA] font-light leading-relaxed mb-16 max-w-3xl mx-auto px-4">
              Join the AEGIS AI Cooperative in Phoenix for a live demonstration of AI-powered community infrastructure.
              STEM education, grant accountability, and human-centered technology in action.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link
                to="/contact"
                className="bg-[#c45d3a] text-white px-10 py-5 font-body text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#a84d2f] transition-all shadow-[0_0_30px_rgba(196,93,58,0.3)]"
              >
                Inquire for Access
              </Link>
              <Link
                to="/"
                className="border border-[rgba(255,255,255,0.1)] text-[#FAFAFA] px-10 py-5 font-body text-xs uppercase tracking-[0.3em] font-bold hover:border-[#c45d3a] hover:text-[#c45d3a] transition-all"
              >
                Return Home
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[rgba(255,255,255,0.08)] pt-24"
        >
          <div className="space-y-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c45d3a]">01 / Education</p>
            <h3 className="font-display text-3xl font-bold">STEM for Everyone</h3>
            <p className="text-[#A1A1AA] leading-relaxed">
              See how AI-powered learning tools bring advanced technical literacy to students and community leaders without complexity or fear.
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c45d3a]">02 / Accountability</p>
            <h3 className="font-display text-3xl font-bold">Grant Transparency</h3>
            <p className="text-[#A1A1AA] leading-relaxed">
              Every grant dollar tracked. Every outcome measured. Live dashboards that show funders exactly where their investment goes.
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c45d3a]">03 / Community</p>
            <h3 className="font-display text-3xl font-bold">Human-Centered AI</h3>
            <p className="text-[#A1A1AA] leading-relaxed">
              Technology that augments what communities already do well. People stay in control. AI handles the complexity.
            </p>
          </div>
        </motion.div>
      </div>

      <footer className="py-12 border-t border-[rgba(255,255,255,0.05)] text-center opacity-30">
        <p className="text-[9px] uppercase tracking-[0.3em]">2026 AEGIS AI Cooperative // Arizona Event</p>
      </footer>
    </main>
  );
}
