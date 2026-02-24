import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';

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

  const inputClasses = "w-full bg-[var(--aegis-engine)] border border-[var(--aegis-border)] rounded-lg px-4 py-3 text-[var(--aegis-text-primary)] placeholder:text-[var(--aegis-text-muted)] outline-none focus:border-[var(--aegis-accent)] focus:shadow-[0_0_0_3px_rgba(255,126,95,0.12)] transition-all";

  return (
    <div className="bg-[var(--aegis-void)]">

      {/* Hero */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="section-label">Get in Touch</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-[var(--aegis-text-primary)] mt-4 mb-8 tracking-tight">
            Start a Conversation
          </h1>
          <p className="text-lg md:text-xl text-[var(--aegis-text-secondary)] leading-relaxed max-w-2xl">
            Whether you represent a non-profit, community organization, or are interested in what we build, we would love to hear from you.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="divider" />
      </div>

      {/* Contact Grid */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Info Panel */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <span className="section-label text-[var(--aegis-text-muted)] mb-5 block">Co-Founders</span>
              <div className="space-y-4">
                {[
                  { name: 'Ji Won Jeong', email: 'hermes@aegisos.ai' },
                  { name: 'Michael Kelly', email: 'Michaelkelly@aegisos.ai' },
                  { name: 'Felicia Wang', email: 'Feliciawang@aegisos.ai' },
                ].map((person) => (
                  <div key={person.email}>
                    <p className="text-[var(--aegis-text-primary)] font-medium text-sm">{person.name}</p>
                    <a href={`mailto:${person.email}`} className="text-[var(--aegis-accent)] hover:text-[var(--aegis-accent-hover)] transition-colors text-sm">
                      {person.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="section-label text-[var(--aegis-text-muted)] mb-4 block">Connect</span>
              <a
                href="https://www.linkedin.com/company/aegis-ai-cooperative/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--aegis-text-secondary)] hover:text-[var(--aegis-accent)] transition-colors text-sm"
              >
                <Linkedin size={16} />
                AEGIS on LinkedIn
              </a>
            </div>

            <div>
              <span className="section-label text-[var(--aegis-text-muted)] mb-4 block">Location</span>
              <p className="text-[var(--aegis-text-primary)] text-sm">Phoenix, Arizona</p>
              <p className="text-[var(--aegis-text-muted)] text-xs mt-1">Distributed Team</p>
            </div>

            <div className="card-noir p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[var(--aegis-success)]" />
                <span className="font-mono text-xs text-[var(--aegis-text-muted)]">Response Time</span>
              </div>
              <p className="text-[var(--aegis-text-secondary)] text-sm leading-relaxed">
                Our team typically responds within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-8">
            <div className="card-noir p-8 md:p-10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--aegis-accent-muted)] border border-[var(--aegis-border-active)] flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[var(--aegis-accent)]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[var(--aegis-text-primary)] mb-3">
                    Message Received
                  </h3>
                  <p className="text-[var(--aegis-text-secondary)]">
                    Thank you for reaching out. We'll be in touch soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-[var(--aegis-accent)] text-sm font-medium hover:text-[var(--aegis-accent-hover)] transition-colors"
                  >
                    Send another message &rarr;
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-[var(--aegis-text-muted)] uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputClasses}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-[var(--aegis-text-muted)] uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-[var(--aegis-text-muted)] uppercase tracking-wider">
                        Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="Company or entity"
                        className={inputClasses}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-[var(--aegis-text-muted)] uppercase tracking-wider">
                        Department
                      </label>
                      <select
                        name="department"
                        value={formState.department}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none cursor-pointer`}
                      >
                        <option value="general">General Inquiry</option>
                        <option value="executive">Executive</option>
                        <option value="technical">Technical</option>
                        <option value="creative">Creative</option>
                        <option value="operations">Operations</option>
                        <option value="marketing">Marketing</option>
                        <option value="security">Security</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[var(--aegis-text-muted)] uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  {submitError && (
                    <div className="card-noir p-4 border-[var(--aegis-error)]/30 text-center">
                      <p className="text-[var(--aegis-error)] text-sm mb-2">{submitError.message}</p>
                      <a
                        href={submitError.fallbackUrl}
                        className="text-[var(--aegis-accent)] text-sm font-medium hover:text-[var(--aegis-accent-hover)]"
                      >
                        Open email client &rarr;
                      </a>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-premium w-full flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>Send Message <Send size={16} /></>
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
