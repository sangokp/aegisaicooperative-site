import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send, CheckCircle, ArrowUpRight, Zap } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    department: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="relative overflow-hidden bg-[var(--color-void)] min-h-screen">
      
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO - CONNECTION
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-48 pb-20">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-gradient-to-b from-[var(--color-accent)]/10 to-transparent pointer-events-none" />
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-6xl md:text-8xl font-bold text-[var(--aegis-text-primary)] tracking-tighter mb-8 text-gradient-white">
              INITIALIZE<br />CONTACT
            </h1>
            <p className="font-body text-xl md:text-2xl text-[var(--aegis-text-secondary)] max-w-2xl mx-auto font-light">
              Bridge the gap between vision and execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CONTACT GRID
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 relative z-10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16 items-start max-w-6xl mx-auto">
            
            {/* Info Panel */}
            <div className="lg:col-span-5 space-y-12">
              <div className="glass-panel rounded-[3rem] p-12 border border-white/5 bg-[var(--color-charcoal)]/30">
                <h2 className="font-display text-3xl font-bold text-white mb-8">Base Details</h2>
                <div className="space-y-10">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--aegis-text-muted)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-500">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-mono text-[10px] uppercase tracking-widest text-[var(--aegis-text-muted)] mb-3">Co-Founders</h4>
                      <div className="space-y-2">
                        <div>
                          <span className="text-[var(--aegis-text-secondary)] text-sm font-body">Ji Won Jeong</span>
                          <a href="mailto:g1@aegisos.ai" className="text-lg text-white hover:text-[var(--color-accent)] transition-colors font-body block">g1@aegisos.ai</a>
                        </div>
                        <div>
                          <span className="text-[var(--aegis-text-secondary)] text-sm font-body">Michael Kelly</span>
                          <a href="mailto:Michaelkelly@aegisos.ai" className="text-lg text-white hover:text-[var(--color-accent)] transition-colors font-body block">Michaelkelly@aegisos.ai</a>
                        </div>
                        <div>
                          <span className="text-[var(--aegis-text-secondary)] text-sm font-body">Felicia Wang</span>
                          <a href="mailto:Feliciawang@aegisos.ai" className="text-lg text-white hover:text-[var(--color-accent)] transition-colors font-body block">Feliciawang@aegisos.ai</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--aegis-text-muted)] group-hover:bg-[#0077b5] group-hover:text-white transition-all duration-500">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <h4 className="font-mono text-[10px] uppercase tracking-widest text-[var(--aegis-text-muted)] mb-1">Network Node</h4>
                      <a href="https://www.linkedin.com/company/aegis-ai-cooperative/" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-[#0077b5] transition-colors font-body flex items-center gap-2">
                        AEGIS Cooperative <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--aegis-text-muted)] group-hover:bg-[var(--color-gold)] group-hover:text-black transition-all duration-500">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-mono text-[10px] uppercase tracking-widest text-[var(--aegis-text-muted)] mb-1">Physical Base</h4>
                      <p className="text-xl text-white font-body">Phoenix, Arizona</p>
                      <p className="text-sm text-[var(--aegis-text-muted)] font-light">Distributed Team Hub</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-12 rounded-[3rem] border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 flex items-center gap-6 group">
                <Zap className="w-10 h-10 text-[var(--color-accent)] animate-pulse" />
                <p className="text-[var(--aegis-text-secondary)] font-light">Lead engineers respond within 24 standard earth hours.</p>
              </div>
            </div>

            {/* Form Panel */}
            <div className="lg:col-span-7">
              <div className="glass-panel rounded-[3rem] p-10 md:p-16 border border-white/10 bg-[var(--color-charcoal)]/50 relative overflow-hidden">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center">
                      <CheckCircle className="w-12 h-12 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-4xl font-display font-bold text-white mb-4">Transmission Received</h3>
                    <p className="text-xl text-[var(--aegis-text-muted)] font-light font-body">
                      Our cooperative nodes have indexed your request.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="mt-10 text-[var(--color-accent)] font-mono text-xs uppercase tracking-widest hover:underline">
                      Send another dispatch
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--aegis-text-muted)] ml-4">Identity</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Full Name"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-[var(--aegis-text-muted)] outline-none focus:border-[var(--color-accent)]/50 focus:bg-white/[0.08] transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--aegis-text-muted)] ml-4">Communication</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-[var(--aegis-text-muted)] outline-none focus:border-[var(--color-accent)]/50 focus:bg-white/[0.08] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--aegis-text-muted)] ml-4">Organization</label>
                        <input
                          type="text"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          placeholder="Company or Entity"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-[var(--aegis-text-muted)] outline-none focus:border-[var(--color-accent)]/50 focus:bg-white/[0.08] transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--aegis-text-muted)] ml-4">Department</label>
                        <select
                          name="department"
                          value={formState.department}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-[var(--color-accent)]/50 focus:bg-white/[0.08] transition-all appearance-none cursor-pointer"
                        >
                          <option value="general" className="bg-[var(--color-charcoal)]">General Inquiry</option>
                          <option value="executive" className="bg-[var(--color-charcoal)]">Executive (CEO/Thea)</option>
                          <option value="creative" className="bg-[var(--color-charcoal)]">Creative (CDO/Apollo)</option>
                          <option value="technical" className="bg-[var(--color-charcoal)]">Technical (CTO/Forge)</option>
                          <option value="operations" className="bg-[var(--color-charcoal)]">Operations (COO/Atlas)</option>
                          <option value="financial" className="bg-[var(--color-charcoal)]">Financial (CFO/Vulcan)</option>
                          <option value="knowledge" className="bg-[var(--color-charcoal)]">Knowledge (CKO/Mnemosyne)</option>
                          <option value="marketing" className="bg-[var(--color-charcoal)]">Marketing (CMO/Hermes)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--aegis-text-muted)] ml-4">Brief</label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us about your mission..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-[var(--aegis-text-muted)] outline-none focus:border-[var(--color-accent)]/50 focus:bg-white/[0.08] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-premium w-full group"
                    >
                      <span className="flex items-center justify-center gap-3">
                        {isSubmitting ? 'Transmitting...' : (
                          <>Dispatch Transmission <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></>
                        )}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}