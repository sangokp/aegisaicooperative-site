import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For now, just simulate submission
    // In production, this would POST to an n8n webhook or API endpoint
    await new Promise(resolve => setTimeout(resolve, 1000));

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
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-heading mb-6"
            >
              Let's Talk
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="section-subheading mx-auto"
            >
              Ready to explore how trust architecture can help your organization?
              We'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white/40">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-6 text-zinc-100">Get in touch</h2>
                <p className="text-zinc-100/70 mb-8">
                  Whether you have a specific project in mind or just want to learn
                  more about what we do, we're happy to chat.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[var(--accent)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-100 mb-1">Email</h4>
                      <a
                        href="mailto:g1@aegisos.ai"
                        className="text-zinc-100/70 hover:text-[var(--accent)] transition-colors"
                      >
                        g1@aegisos.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-[var(--accent)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-100 mb-1">LinkedIn</h4>
                      <a
                        href="https://www.linkedin.com/company/aegis-ai-cooperative/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-100/70 hover:text-[var(--accent)] transition-colors"
                      >
                        AEGIS AI Cooperative
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[var(--accent)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-100 mb-1">Location</h4>
                      <p className="text-zinc-100/70">Arizona, USA</p>
                      <p className="text-sm text-zinc-100/50">Remote-first team</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="md:col-span-3">
                <div className="bg-white rounded-2xl p-8 border border-[var(--accent)]/10">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-zinc-100">Message sent!</h3>
                      <p className="text-zinc-100/70">
                        Thanks for reaching out. We'll get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-zinc-100 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-[#111]/10 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-zinc-100 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-[#111]/10 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition-all"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-zinc-100 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#111]/10 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition-all"
                          placeholder="Your company (optional)"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-zinc-100 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#111]/10 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition-all resize-none"
                          placeholder="Tell us about your project or question..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            Send message <Send size={16} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
