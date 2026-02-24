import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Philosophy', path: '/about' },
  { name: 'Capabilities', path: '/services' },
  { name: 'CMMC', path: '/cmmc' },
  { name: 'Alliances', path: '/partners' },
  { name: 'Research', path: '/blog' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setIsOpen(false), [location]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-[var(--aegis-void)]/90 backdrop-blur-xl border-b border-[var(--aegis-border)]'
          : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-20">

            {/* Brand */}
            <Link to="/" className="group flex items-center gap-3">
              <img
                src="/aegis-logo.svg"
                alt="AEGIS"
                className="h-10 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,126,95,0.4)]"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors rounded-md ${isActive
                        ? 'text-[var(--aegis-accent)]'
                        : 'text-[var(--aegis-text-secondary)] hover:text-[var(--aegis-text-primary)] hover:bg-[var(--aegis-border)]'
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-4 right-4 h-px bg-[var(--aegis-accent)]"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}

              <div className="w-px h-5 bg-[var(--aegis-border)] mx-3" />

              <Link
                to="/contact"
                className="px-5 py-2 text-[13px] font-semibold tracking-wide text-white bg-[var(--aegis-accent)] rounded-lg hover:bg-[var(--aegis-accent-hover)] transition-all hover:shadow-[0_0_20px_rgba(255,126,95,0.3)]"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-[var(--aegis-text-primary)] rounded-lg hover:bg-[var(--aegis-border)] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--aegis-void)]/98 backdrop-blur-xl flex flex-col pt-24 px-8"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    to={link.path}
                    className="block py-4 border-b border-[var(--aegis-border)]"
                  >
                    <span className="font-display text-2xl font-bold text-[var(--aegis-text-primary)]">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link
                to="/contact"
                className="btn-premium inline-flex items-center justify-center w-full py-4"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}
