import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import blogData from '../data/blog.json';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogData.posts
    : blogData.posts.filter(post => post.category === selectedCategory);

  return (
    <div className="bg-[var(--aegis-void)] min-h-screen">

      {/* Hero */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="section-label">Research & Insights</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-[var(--aegis-text-primary)] mt-4 mb-8 tracking-tight">
            From the Cooperative
          </h1>
          <p className="text-lg md:text-xl text-[var(--aegis-text-secondary)] leading-relaxed max-w-2xl">
            Insights, technical breakthroughs, and perspectives from the AEGIS engineering cooperative.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="divider" />
      </div>

      {/* Filters */}
      <section className="py-8 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-wrap gap-2">
          {['All', ...blogData.categories].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg border transition-all ${selectedCategory === category
                  ? 'bg-[var(--aegis-accent)] text-white border-[var(--aegis-accent)]'
                  : 'bg-transparent text-[var(--aegis-text-muted)] border-[var(--aegis-border)] hover:border-[var(--aegis-border-hover)] hover:text-[var(--aegis-text-secondary)]'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 pb-24 md:pb-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <Link to={`/blog/${post.slug}`} className="block h-full">
                <div className="card-noir card-noir-glow p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-xs font-mono text-[var(--aegis-accent)] tracking-wider px-2 py-1 rounded bg-[var(--aegis-accent-muted)]">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-[var(--aegis-text-muted)] text-xs">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-display text-xl font-bold text-[var(--aegis-text-primary)] mb-3 leading-tight group-hover:text-[var(--aegis-accent)] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-[var(--aegis-text-secondary)] text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-5 border-t border-[var(--aegis-border)]">
                    <span className="text-xs font-mono text-[var(--aegis-text-muted)]">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="text-xs text-[var(--aegis-accent)] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-24">
            <p className="text-lg text-[var(--aegis-text-muted)]">No articles found in this category.</p>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--aegis-engine)]" />
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[var(--aegis-accent)]/5 blur-[100px]" />

        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--aegis-text-primary)] mb-6 tracking-tight">
            Stay Informed
          </h2>
          <p className="text-lg text-[var(--aegis-text-secondary)] mb-10 max-w-xl mx-auto">
            Receive insights and updates from the cooperative directly in your inbox.
          </p>
          <Link
            to="/contact"
            className="btn-premium inline-flex items-center gap-2 py-4"
          >
            {blogData.newsletter.cta}
          </Link>
        </div>
      </section>

    </div>
  );
}
