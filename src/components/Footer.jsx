import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[var(--aegis-void)] border-t border-[var(--aegis-border)] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-2xl text-[var(--aegis-text-primary)]">
                AEGIS AI Cooperative
              </span>
            </Link>
            <p className="text-[var(--aegis-text-secondary)] leading-relaxed max-w-sm">
              A think tank for the future of community intelligence, building human-centric infrastructure for STEM education and community advancement.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="small-caps text-xs text-[var(--aegis-text-muted)] mb-6 tracking-[0.15em]">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-[var(--aegis-text-secondary)] hover:text-[var(--aegis-rust)] transition-colors">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[var(--aegis-text-secondary)] hover:text-[var(--aegis-rust)] transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-[var(--aegis-text-secondary)] hover:text-[var(--aegis-rust)] transition-colors">
                  Alliances
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-[var(--aegis-text-secondary)] hover:text-[var(--aegis-rust)] transition-colors">
                  Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h4 className="small-caps text-xs text-[var(--aegis-text-muted)] mb-6 tracking-[0.15em]">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-[var(--aegis-text-secondary)] hover:text-[var(--aegis-rust)] transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-[var(--aegis-text-secondary)] hover:text-[var(--aegis-rust)] transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="small-caps text-xs text-[var(--aegis-text-muted)] mb-6 tracking-[0.15em]">
              Contact
            </h4>
            <p className="text-[var(--aegis-text-secondary)] mb-2">Phoenix, Arizona</p>
            <a
              href="mailto:hermes@aegisos.ai"
              className="text-[var(--aegis-rust)] hover:text-[var(--aegis-accent-hover)] transition-colors"
            >
              hermes@aegisos.ai
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--aegis-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--aegis-text-muted)]">
            &copy; {new Date().getFullYear()} AEGIS AI Cooperative
          </p>
          <p className="text-sm text-[var(--aegis-text-muted)]">
            Established 2025
          </p>
        </div>

      </div>
    </footer>
  );
}
