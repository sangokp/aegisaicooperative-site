import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import blogData from '../data/blog.json';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogData.posts
    : blogData.posts.filter(post => post.category === selectedCategory);

  return (
    <div className="relative overflow-hidden bg-[var(--color-void)] min-h-screen">
      
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO - THE INTELLIGENCE
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-48 pb-20">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[var(--color-accent)] opacity-5 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-display text-6xl md:text-8xl font-bold text-[var(--aegis-text-primary)] tracking-tighter mb-8 text-gradient-white leading-[0.9]">
                SYSTEM<br />DISPATCHES
              </h1>
              <p className="font-body text-xl md:text-2xl text-[var(--aegis-text-secondary)] max-w-2xl font-light leading-relaxed">
                Insights, technical breakthroughs, and mission updates from the AEGIS engineering cooperative.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          FILTERS
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="pb-12 relative z-10">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4">
            {['All', ...blogData.categories].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] border transition-all duration-500 ${
                  selectedCategory === category
                    ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                    : 'bg-transparent text-[var(--aegis-text-muted)] border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          GRID
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 relative z-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-panel-hover rounded-[2.5rem] p-10 border border-white/5 bg-[var(--color-charcoal)]/30 h-full flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowUpRight className="text-[var(--color-accent)] w-6 h-6" />
                  </div>

                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-[10px] font-mono text-[var(--color-accent)] uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-[var(--aegis-text-muted)] text-[10px] font-mono uppercase">
                        <Clock size={12} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 leading-tight group-hover:text-white/90 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-[var(--aegis-text-muted)] font-body font-light leading-relaxed line-clamp-3 mb-10 group-hover:text-[var(--aegis-text-secondary)] transition-colors">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-8 border-t border-white/5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--aegis-text-muted)]">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                      Read Entry
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-32 opacity-20">
              <Sparkles className="w-16 h-16 mx-auto mb-6" />
              <p className="text-xl font-display uppercase tracking-widest">No matching dispatches found</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          NEWSLETTER
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-40 border-t border-white/5 bg-white/[0.01]">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white tracking-tight leading-[0.9]">STAY SYNCED</h2>
            <p className="text-xl text-[var(--aegis-text-muted)] mb-12 font-light font-body">
              Receive high-level breakthroughs and ecosystem updates directly to your terminal.
            </p>
            <Link to="/contact" className="btn-premium">
              {blogData.newsletter.cta}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}