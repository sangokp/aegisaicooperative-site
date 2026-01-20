import { Link } from 'react-router-dom';
import { Globe, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-void)] border-t border-white/5 pt-32 pb-16 relative overflow-hidden">
      {/* Visual Accent */}
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-[var(--color-accent)] opacity-5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Col */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <motion.div
                whileHover={{ rotate: -10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <img 
                  src="/Aegis_logo_black.png" 
                  alt="AEGIS" 
                  className="w-12 h-12 object-contain rounded-xl shadow-2xl"
                />
              </motion.div>
              <span className="font-display font-bold text-[var(--aegis-text-primary)] text-xl tracking-tighter uppercase">
                AEGIS AI <span className="text-[var(--aegis-text-muted)]">Cooperative</span>
              </span>
            </Link>
            <p className="text-[var(--aegis-text-muted)] text-lg font-light leading-relaxed max-w-sm mb-10 font-body">
              Forging the future of distributed intelligence through radical transparency and community-driven innovation.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--aegis-border)] border border-[var(--aegis-border)] flex items-center justify-center text-[var(--aegis-text-muted)] hover:text-[var(--aegis-text-primary)] transition-colors cursor-pointer">
                <Globe size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-[var(--aegis-border)] border border-[var(--aegis-border)] flex items-center justify-center text-[var(--aegis-text-muted)] hover:text-[var(--aegis-text-primary)] transition-colors cursor-pointer">
                <Shield size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-[var(--aegis-border)] border border-[var(--aegis-border)] flex items-center justify-center text-[var(--aegis-text-muted)] hover:text-[var(--aegis-text-primary)] transition-colors cursor-pointer">
                <Sparkles size={18} />
              </div>
            </div>
          </div>

          {/* Navigation Cols */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-gold)] mb-8">System</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-[var(--aegis-text-muted)] hover:text-[var(--aegis-text-primary)] transition-colors font-body text-sm">Philosophy</Link></li>
              <li><Link to="/partners" className="text-[var(--aegis-text-muted)] hover:text-[var(--aegis-text-primary)] transition-colors font-body text-sm">Alliances</Link></li>
              <li><Link to="/blog" className="text-[var(--aegis-text-muted)] hover:text-[var(--aegis-text-primary)] transition-colors font-body text-sm">Dispatches</Link></li>
              <li><a href="https://aegisos.ai" target="_blank" rel="noopener noreferrer" className="text-[var(--aegis-text-muted)] hover:text-[var(--aegis-text-primary)] transition-colors font-body text-sm">AEGIS OS</a></li>
              <li><a href="https://festival.aegisos.ai" target="_blank" rel="noopener noreferrer" className="text-[var(--aegis-text-muted)] hover:text-[var(--aegis-text-primary)] transition-colors font-body text-sm">Festival</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--aegis-text-muted)] mb-8">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-[var(--aegis-text-muted)] hover:text-[var(--aegis-text-primary)] transition-colors font-body text-sm">Protocol</Link></li>
              <li><Link to="/terms" className="text-[var(--aegis-text-muted)] hover:text-[var(--aegis-text-primary)] transition-colors font-body text-sm">Terms</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--aegis-text-muted)] mb-8">Base</h4>
            <p className="text-[var(--aegis-text-secondary)] font-body text-sm mb-2">Phoenix, Arizona</p>
            <a href="mailto:hermes@aegisos.ai" className="text-[var(--aegis-text-primary)] font-display font-bold text-lg tracking-tight hover:text-[var(--color-accent)] transition-colors">hermes@aegisos.ai</a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--aegis-text-muted)]">
            &copy; {new Date().getFullYear()} AEGIS AI COOPERATIVE • ENCRYPTED & VERIFIED
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-500/60">System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
