import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@aegis/theme';

const navLinks = [
  { name: 'Philosophy', path: '/about' },
  { name: 'Strategic Alliances', path: '/partners' },
  { name: 'Dispatches', path: '/blog' },
  { name: 'AEGIS OS', href: 'https://aegisos.ai', external: true },
  { name: 'Festival', href: 'https://festival.aegisos.ai', external: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Deployment verification
  useEffect(() => {
    console.log('AEGIS Navbar v2.1.0 - Loaded');
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <>
      <nav className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        scrolled ? 'w-[95%] sm:w-[85%] max-w-5xl' : 'w-[90%] max-w-7xl'
      }`}>
        <div className={`glass-panel rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center justify-between gap-4 md:gap-12 transition-all duration-700 ${
          scrolled ? 'bg-black/80 backdrop-blur-3xl border-white/10 shadow-2xl' : 'bg-transparent border-transparent shadow-none'
        }`}>
          
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative"
            >
              <img 
                src="/Aegis_logo_black.png" 
                alt="AEGIS" 
                className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
            <span className="font-display font-bold text-[var(--aegis-text-primary)] tracking-tighter text-sm md:text-lg uppercase hidden sm:block">
              AEGIS AI <span className="text-[var(--aegis-text-muted)]">Cooperative</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = !link.external && location.pathname === link.path;
              const className = `text-[10px] font-mono uppercase tracking-[0.25em] transition-colors whitespace-nowrap ${
                isActive ? 'text-[var(--color-accent)]' : 'text-[var(--aegis-text-muted)] hover:text-[var(--aegis-text-primary)]'
              }`;

              if (link.external) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <Link key={link.name} to={link.path} className={className}>
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-3 md:gap-5 shrink-0">
            {/* Theme Toggle */}
            <ThemeToggle size="sm" variant="ghost" />

            <Link to="/contact" className="hidden sm:flex items-center gap-2 text-[var(--aegis-text-primary)] font-display font-bold text-[10px] md:text-xs uppercase tracking-widest hover:text-[var(--aegis-accent)] transition-colors whitespace-nowrap">
              Initialize <Globe className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-[var(--aegis-text-primary)] bg-[var(--aegis-border)] rounded-full hover:bg-[var(--aegis-border-hover)] transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 50% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 50% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 50% 0%)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black backdrop-blur-3xl flex flex-col items-center justify-center p-10"
          >
            <div className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link) => {
                const className = "font-display text-5xl font-bold text-[var(--aegis-text-muted)] hover:text-[var(--aegis-text-primary)] transition-colors tracking-tighter";

                if (link.external) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {link.name}
                    </a>
                  );
                }

                return (
                  <Link key={link.name} to={link.path} className={className}>
                    {link.name}
                  </Link>
                );
              })}
              <div className="w-20 h-[1px] bg-white/10 my-4" />
              <Link to="/contact" className="btn-premium">
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
