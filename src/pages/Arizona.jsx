import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Arizona() {
  return (
    <main className="min-h-screen bg-[var(--aegis-void)] text-[var(--aegis-text-primary)] relative overflow-hidden font-body">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139,111,71,0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-24 relative z-10">
        <div className="flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/aegis-logo.svg" alt="AEGIS" className="h-12 mb-12" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <span className="section-label text-[var(--aegis-accent)] mb-12 block">
              Phoenix, Arizona // April 2026
            </span>

            <h1 className="font-display text-5xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] text-white mb-12 tracking-tighter">
              Community <br />
              <span className="gradient-text-blue italic font-normal">Intelligence.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[var(--aegis-text-secondary)] font-light leading-relaxed mb-16 max-w-3xl mx-auto px-4">
              Join the AEGIS AI Cooperative in Phoenix for a live demonstration of AI-powered community infrastructure.
              STEM education, grant accountability, and human-centered technology in action.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="btn-premium py-5 px-10"
              >
                Inquire for Access
              </Link>
              <Link
                to="/"
                className="btn-outline-premium py-5 px-10"
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
          className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[var(--aegis-border)] pt-24"
        >
          {[
            {
              num: '01',
              title: 'STEM for Everyone',
              label: 'Education',
              desc: 'See how AI-powered learning tools bring advanced technical literacy to students and community leaders without complexity or fear.'
            },
            {
              num: '02',
              title: 'Grant Transparency',
              label: 'Accountability',
              desc: 'Every grant dollar tracked. Every outcome measured. Live dashboards that show funders exactly where their investment goes.'
            },
            {
              num: '03',
              title: 'Human-Centered AI',
              label: 'Community',
              desc: 'Technology that augments what communities already do well. People stay in control. AI handles the complexity.'
            }
          ].map((item, index) => (
            <div key={index} className="card-noir p-8">
              <span className="font-mono text-xs text-[var(--aegis-accent)] tracking-wider block mb-4">
                {item.num} / {item.label}
              </span>
              <h3 className="font-display text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-[var(--aegis-text-secondary)] leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <footer className="py-12 border-t border-[var(--aegis-border)] text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--aegis-text-muted)]">2026 AEGIS AI Cooperative // Arizona Event</p>
      </footer>
    </main>
  );
}
