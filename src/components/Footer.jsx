import { Link } from 'react-router-dom';

// Local AEGIS logo (already in /public)
const LOGO_URL = "/aegis-logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity">
              <img
                src={LOGO_URL}
                alt="AEGIS Logo"
                className="w-10 h-10 object-cover object-top rounded-lg"
                style={{ objectPosition: 'center 35%' }}
              />
              <span className="text-lg font-semibold text-zinc-100">AEGIS AI Cooperative</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 max-w-md">
              Building reliable AI systems for businesses and community organizations. Your data stays yours.
            </p>
            <p className="text-zinc-500 text-xs">
              Real results, not hype.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-zinc-100">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-zinc-100">Contact</h4>
            <p className="text-zinc-400 text-sm mb-2">g1@aegisos.ai</p>
            <p className="text-zinc-400 text-sm">Phoenix, Arizona</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} AEGIS AI Cooperative. Community-driven.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-zinc-100 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-zinc-100 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
