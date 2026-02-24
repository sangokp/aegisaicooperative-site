import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import companyData from '../data/company.json';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-60" />

        {/* Primary orb — top right */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,126,95,0.2) 0%, rgba(255,126,95,0.05) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Secondary orb — bottom left */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[20%] -left-[15%] w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,176,154,0.15) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Horizon line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--aegis-accent)]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full">
        <div className="max-w-4xl">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label text-[var(--aegis-accent)]">
              AEGIS AI Cooperative
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.05] text-[var(--aegis-text-primary)] mt-6 mb-8 tracking-tight"
          >
            {companyData.hero.headline.split('Community Intelligence').map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="gradient-text-blue">Community Intelligence</span>
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-[var(--aegis-text-secondary)] font-body leading-relaxed mb-12 max-w-2xl"
          >
            {companyData.hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to={companyData.hero.cta.secondary.link}
              className="btn-premium group flex items-center justify-center gap-3 py-4"
            >
              {companyData.hero.cta.secondary.text}
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-lg"
              >
                &rarr;
              </motion.span>
            </Link>
            <Link
              to={companyData.hero.cta.primary.link}
              className="btn-outline-premium py-4"
            >
              {companyData.hero.cta.primary.text}
            </Link>
          </motion.div>

          {/* Proof Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-wrap gap-6 mt-16 pt-8 border-t border-[var(--aegis-border)]"
          >
            {companyData.proofStrip.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--aegis-accent)]" />
                <span className="text-sm text-[var(--aegis-text-muted)] font-mono tracking-wide">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-[var(--aegis-border-hover)] flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-[var(--aegis-accent)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
