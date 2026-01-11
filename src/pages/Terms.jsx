import React from 'react';
import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <div className="pt-16 pb-24">
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-zinc-100">Terms of Service</h1>

            <div className="prose prose-lg text-zinc-100/70 space-y-6">
              <p className="text-lg">
                <strong>Last updated:</strong> January 2026
              </p>

              <h2 className="text-2xl font-bold text-zinc-100 mt-8 mb-4">Agreement to Terms</h2>
              <p>
                By accessing or using AEGIS AI Cooperative's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>

              <h2 className="text-2xl font-bold text-zinc-100 mt-8 mb-4">Services</h2>
              <p>
                AEGIS AI Cooperative provides trust-first AI systems for businesses and community organizations. Our services include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Multi-agent AI system deployment</li>
                <li>Trust architecture consulting</li>
                <li>STEM program technical execution</li>
                <li>Grant impact auditing</li>
              </ul>

              <h2 className="text-2xl font-bold text-zinc-100 mt-8 mb-4">User Responsibilities</h2>
              <p>
                You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate information</li>
                <li>Use our services lawfully and ethically</li>
                <li>Maintain the confidentiality of any access credentials</li>
                <li>Not attempt to circumvent security measures</li>
              </ul>

              <h2 className="text-2xl font-bold text-zinc-100 mt-8 mb-4">Intellectual Property</h2>
              <p>
                Our services, including all content, features, and functionality, are owned by AEGIS AI Cooperative and protected by intellectual property laws. Client-specific implementations and data remain the property of our clients.
              </p>

              <h2 className="text-2xl font-bold text-zinc-100 mt-8 mb-4">Limitation of Liability</h2>
              <p>
                AEGIS AI Cooperative shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you for our services.
              </p>

              <h2 className="text-2xl font-bold text-zinc-100 mt-8 mb-4">Termination</h2>
              <p>
                We may terminate or suspend access to our services immediately, without prior notice, for any breach of these Terms. Upon termination, your right to use our services will cease immediately.
              </p>

              <h2 className="text-2xl font-bold text-zinc-100 mt-8 mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will provide notice of significant changes. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>

              <h2 className="text-2xl font-bold text-zinc-100 mt-8 mb-4">Contact Us</h2>
              <p>
                For questions about these Terms, contact us at{' '}
                <a href="mailto:g1@aegisos.ai" className="text-[var(--accent)] hover:underline">
                  g1@aegisos.ai
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
