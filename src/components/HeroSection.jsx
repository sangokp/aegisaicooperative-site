import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import companyData from '../data/company.json';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden bg-[var(--aegis-void)] py-12 md:py-20">

      {/* Subtle background grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--aegis-accent) 1px, transparent 1px), linear-gradient(90deg, var(--aegis-accent) 1px, transparent 1px)`,
            backgroundSize: 'clamp(50px, 10vw, 100px) clamp(50px, 10vw, 100px)'
          }}
        />

        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[400px] md:w-[800px] h-[400px] md:h-[800px] rounded-full bg-[radial-gradient(circle,var(--aegis-accent-muted)_0%,transparent_70%)] blur-2xl md:blur-3xl opacity-20 md:opacity-30"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <p className="small-caps text-[10px] md:text-xs text-[var(--aegis-rust)] mb-6 md:mb-10 tracking-[0.3em] md:tracking-[0.4em] uppercase font-semibold">
              AEGIS AI Cooperative
            </p>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.1] md:leading-[1.05] text-[var(--aegis-text-primary)] mb-8 md:mb-12 tracking-tight px-2">
              {companyData.hero.headline}
            </h1>

            <p className="text-base md:text-xl lg:text-2xl text-[var(--aegis-text-secondary)] font-body font-light leading-relaxed mb-10 md:mb-16 max-w-3xl mx-auto px-4">
              {companyData.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center w-full max-w-sm sm:max-w-none mx-auto">
              <Link
                to={companyData.hero.cta.secondary.link}
                className="btn-premium w-full sm:w-auto group flex items-center justify-center gap-4 py-4 md:py-5"
              >
                {companyData.hero.cta.secondary.text}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  &rarr;
                </motion.span>
              </Link>
              <Link
                to={companyData.hero.cta.primary.link}
                className="btn-outline-premium w-full sm:w-auto hover:border-[var(--aegis-rust)] py-4 md:py-5"
              >
                {companyData.hero.cta.primary.text}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-[var(--aegis-text-primary)] to-transparent" />
      </motion.div>
    </section>
  );
}
