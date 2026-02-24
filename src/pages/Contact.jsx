import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react';

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
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://n8n.srv1170368.hstgr.cloud/webhook/aegis-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formState,
          source: 'aegisaicooperative.com',
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setIsSubmitted(true);
      setFormState({ name: '', email: '', company: '', department: 'general', message: '' });
    } catch (_error) {
      const subject = encodeURIComponent(`[AEGIS Contact] ${formState.department} inquiry from ${formState.name}`);
      const body = encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\nCompany: ${formState.company}\nDepartment: ${formState.department}\n\nMessage:\n${formState.message}`
      );

      setSubmitError({
        message: 'Network issue. Click below to send via email instead.',
        fallbackUrl: `mailto:hermes@aegisos.ai?subject=${subject}&body=${body}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-[var(--aegis-void)]">

      {/* Hero */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="small-caps text-xs text-[var(--aegis-rust)] mb-6 tracking-[0.2em]">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-[var(--aegis-text-primary)] mb-8">
            Start a Conversation
          </h1>
          <p className="text-lg md:text-xl text-[var(--aegis-text-secondary)] leading-relaxed max-w-2xl">
            Whether you represent a non-profit, community organization, or are interested in what we build, we would love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <hr className="border-t border-[var(--aegis-border)]" />
      </div>

      {/* Contact Grid */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Info Panel */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <p className="small-caps text-xs text-[var(--aegis-sage)] mb-6 tracking-[0.15em]">
                Co-Founders
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-[var(--aegis-text-primary)] font-medium">Ji Won Jeong</p>
                  <a href="mailto:g1@aegisos.ai" className="text-[var(--aegis-rust)] hover:text-[var(--aegis-accent-hover)] transition-colors">
                    g1@aegisos.ai
                  </a>
                </div>
                <div>
                  <p className="text-[var(--aegis-text-primary)] font-medium">Michael Kelly</p>
                  <a href="mailto:Michaelkelly@aegisos.ai" className="text-[var(--aegis-rust)] hover:text-[var(--aegis-accent-hover)] transition-colors">
                    Michaelkelly@aegisos.ai
                  </a>
                </div>
                <div>
                  <p className="text-[var(--aegis-text-primary)] font-medium">Felicia Wang</p>
                  <a href="mailto:Feliciawang@aegisos.ai" className="text-[var(--aegis-rust)] hover:text-[var(--aegis-accent-hover)] transition-colors">
                    Feliciawang@aegisos.ai
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="small-caps text-xs text-[var(--aegis-sage)] mb-4 tracking-[0.15em]">
                Connect
              </p>
              <a
                href="https://www.linkedin.com/company/aegis-ai-cooperative/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--aegis-text-primary)] hover:text-[var(--aegis-rust)] transition-colors"
              >
                <Linkedin size={18} />
                <span>AEGIS on LinkedIn</span>
              </a>
            </div>

            <div>
              <p className="small-caps text-xs text-[var(--aegis-sage)] mb-4 tracking-[0.15em]">
                Location
              </p>
              <p className="text-[var(--aegis-text-primary)]">Phoenix, Arizona</p>
              <p className="text-[var(--aegis-text-secondary)] text-sm">Distributed Team</p>
            </div>

            <div className="p-6 border border-[var(--aegis-sage)]/30 bg-[var(--aegis-sage)]/5">
              <p className="text-[var(--aegis-text-secondary)] text-sm leading-relaxed">
                Our team typically responds within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-8">
            <div className="p-8 md:p-12 border border-[var(--aegis-border)] bg-[var(--aegis-surface)]">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[var(--aegis-sage)]/20 border border-[var(--aegis-sage)]/30 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-[var(--aegis-sage)]" />
                  </div>
                  <h3 className="font-display text-3xl font-medium text-[var(--aegis-text-primary)] mb-4">
                    Message Received
                  </h3>
                  <p className="text-lg text-[var(--aegis-text-secondary)]">
                    Thank you for reaching out. We'll be in touch soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-[var(--aegis-rust)] text-sm border-b border-[var(--aegis-rust)] hover:text-[var(--aegis-accent-hover)] transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs text-[var(--aegis-text-muted)] uppercase tracking-widest">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full bg-[var(--aegis-void)] border border-[var(--aegis-border)] px-4 py-3 text-[var(--aegis-text-primary)] placeholder:text-[var(--aegis-text-muted)] outline-none focus:border-[var(--aegis-rust)] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-[var(--aegis-text-muted)] uppercase tracking-widest">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-[var(--aegis-void)] border border-[var(--aegis-border)] px-4 py-3 text-[var(--aegis-text-primary)] placeholder:text-[var(--aegis-text-muted)] outline-none focus:border-[var(--aegis-rust)] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs text-[var(--aegis-text-muted)] uppercase tracking-widest">
                        Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="Company or entity"
                        className="w-full bg-[var(--aegis-void)] border border-[var(--aegis-border)] px-4 py-3 text-[var(--aegis-text-primary)] placeholder:text-[var(--aegis-text-muted)] outline-none focus:border-[var(--aegis-rust)] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-[var(--aegis-text-muted)] uppercase tracking-widest">
                        Department
                      </label>
                      <select
                        name="department"
                        value={formState.department}
                        onChange={handleChange}
                        className="w-full bg-[var(--aegis-void)] border border-[var(--aegis-border)] px-4 py-3 text-[var(--aegis-text-primary)] outline-none focus:border-[var(--aegis-rust)] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="executive">Executive</option>
                        <option value="technical">Technical</option>
                        <option value="creative">Creative</option>
                        <option value="operations">Operations</option>
                        <option value="marketing">Marketing</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-[var(--aegis-text-muted)] uppercase tracking-widest">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full bg-[var(--aegis-void)] border border-[var(--aegis-border)] px-4 py-3 text-[var(--aegis-text-primary)] placeholder:text-[var(--aegis-text-muted)] outline-none focus:border-[var(--aegis-rust)] transition-colors resize-none"
                    />
                  </div>

                  {submitError && (
                    <div className="p-4 border border-red-300 bg-red-50 text-center">
                      <p className="text-red-700 text-sm mb-2">{submitError.message}</p>
                      <a
                        href={submitError.fallbackUrl}
                        className="text-[var(--aegis-rust)] underline text-sm"
                      >
                        Open email client
                      </a>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--aegis-text-primary)] text-[var(--aegis-void)] px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-[var(--aegis-rust)] transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
