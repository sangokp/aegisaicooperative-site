import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Partners', path: '/partners' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

// Local AEGIS logo (already in /public)
const LOGO_URL = "/aegis-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-md">
      <div className="container-custom relative flex h-20 items-center justify-between md:justify-start md:gap-12" style={{ maxWidth: '80rem', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1rem', paddingRight: '1rem' }}>
        {/* Logo - centered on mobile, left on desktop */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center"
        >
          <img
            src={LOGO_URL}
            alt="AEGIS Logo"
            className="w-14 h-14 object-cover rounded-lg hover:opacity-80 transition-opacity"
            style={{ objectPosition: 'center 35%' }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center ml-auto" style={{ gap: '2rem' }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative group"
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: location.pathname === link.path ? '#fafafa' : '#a1a1aa',
                transition: 'color 0.3s',
              }}
            >
              {link.name}
              <span
                className="absolute left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{ bottom: '-4px', backgroundColor: '#3b82f6' }}
              />
            </Link>
          ))}
          <Link
            to="/contact"
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '0.5rem 1.25rem',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              transition: 'background-color 0.3s',
            }}
          >
            Schedule Consultation
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground relative z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border bg-background"
          >
            <div className="container-custom py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-medium text-foreground"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary text-center mt-4"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
