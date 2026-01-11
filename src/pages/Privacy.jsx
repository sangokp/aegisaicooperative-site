import React from 'react';
import { motion } from 'framer-motion';

export default function Privacy() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-zinc-100">Privacy Policy</h1>

            <div className="prose prose-lg text-zinc-100/70 space-y-6">
              <p className="text-lg">
                <strong>Last updated:</strong> January 2026
              </p>

              <h2 className="text-2xl font-bold text-zinc-100 mt-8 mb-4">Our Commitment</h2>
              <p>
                AEGIS AI Cooperative is built on trust architecture—and that starts with how we handle your data. We believe in transparency, user sovereignty, and minimal data collection.
              </p>

              <h2 className="text-2xl font-bold text-zinc-100 mt-8 mb-4">Information We Collect</h2>
              <p>
                We collect only what's necessary to provide our services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information you provide (name, email) when reaching out</li>
                <li>Usage data to improve our services</li>
                <li>Technical information for security and performance</li>
              </ul>

              <h2 className="text-2xl font-bold text-zinc-100 mt-8 mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your inquiries</li>
                <li>To provide and improve our services</li>
                <li>To ensure security and prevent fraud</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-zinc-100 mt-8 mb-4">Data Sharing</h2>
              <p>
                We do not sell your personal information. We share data only when:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You give explicit consent</li>
                <li>Required by law</li>
                <li>Necessary to protect rights and safety</li>
              </ul>

              <h2 className="text-2xl font-bold text-zinc-100 mt-8 mb-4">Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Request correction or deletion</li>
                <li>Opt out of communications</li>
                <li>Request data portability</li>
              </ul>

              <h2 className="text-2xl font-bold text-zinc-100 mt-8 mb-4">Contact Us</h2>
              <p>
                For privacy-related questions, contact us at{' '}
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
