import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Philosophy', path: '/about' },
  { name: 'Capabilities', path: '/services' },
  { name: 'Alliances', path: '/partners' },
  { name: 'Research', path: '/blog' },
  { name: 'Contact', path: '/contact' },
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
      {/* Editorial Masthead */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[var(--aegis-void)]/95 backdrop-blur-sm shadow-sm border-b border-[var(--aegis-border)]'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">

            {/* Brand */}
            <Link to="/" className="group">
              <img
                src="/aegis-logo.svg"
                alt="AEGIS"
                className="h-11"
              />
            </Link>

            {/* Desktop Navigation - Small Caps Editorial Style */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`small-caps text-xs tracking-[0.2em] transition-colors ${
                      isActive
                        ? 'text-[var(--aegis-rust)]'
                        : 'text-[var(--aegis-text-primary)] hover:text-[var(--aegis-rust)]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-[var(--aegis-text-primary)]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Editorial Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[var(--aegis-void)] flex flex-col pt-24 px-8"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="block py-4 border-b border-[var(--aegis-border)]"
                  >
                    <span className="font-display text-2xl text-[var(--aegis-text-primary)]">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <Link
                to="/contact"
                className="inline-block bg-[var(--aegis-text-primary)] text-[var(--aegis-void)] px-8 py-4 text-sm uppercase tracking-widest font-semibold"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
}
