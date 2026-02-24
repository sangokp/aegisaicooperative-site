import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'Philosophy', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Research', path: '/blog' },
  ],
  services: [
    { name: 'Capabilities', path: '/services' },
    { name: 'Alliances', path: '/partners' },
    { name: 'CMMC', path: '/cmmc' },
  ],
  legal: [
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--aegis-border)] bg-[var(--aegis-void)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Top section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <img src="/aegis-logo.svg" alt="AEGIS" className="h-9" />
            </Link>
            <p className="text-[var(--aegis-text-secondary)] leading-relaxed max-w-sm text-sm">
              Building human-centric AI infrastructure for STEM education and community advancement.
              A cooperative engineered for trust.
            </p>

            {/* Status indicator */}
            <div className="mt-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--aegis-success)] animate-pulse" />
              <span className="text-xs font-mono text-[var(--aegis-text-muted)] tracking-wide">
                Systems Operational
              </span>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-7 grid grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="section-label text-[var(--aegis-text-muted)] mb-5">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-sm text-[var(--aegis-text-secondary)] hover:text-[var(--aegis-text-primary)] transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--aegis-text-muted)] font-mono tracking-wide">
            &copy; {new Date().getFullYear()} AEGIS AI Cooperative &mdash; Phoenix, AZ
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/aegis-ai-cooperative/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--aegis-text-muted)] hover:text-[var(--aegis-accent)] transition-colors inline-flex items-center gap-1"
            >
              LinkedIn <ArrowUpRight size={12} />
            </a>
            <span className="text-[var(--aegis-border-hover)]">|</span>
            <a
              href="mailto:hermes@aegisos.ai"
              className="text-xs text-[var(--aegis-text-muted)] hover:text-[var(--aegis-accent)] transition-colors"
            >
              hermes@aegisos.ai
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
