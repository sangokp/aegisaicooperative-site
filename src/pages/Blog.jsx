import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import blogData from '../data/blog.json';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogData.posts
    : blogData.posts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-16 pb-24">
      {/* Header */}
      <section className="py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-100">{blogData.headline}</h1>
            <p className="text-xl text-zinc-100/70 max-w-3xl mx-auto">
              {blogData.subheadline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="pb-12">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {blogData.categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[var(--accent)] text-white'
                    : 'bg-white/50 text-zinc-100/70 hover:bg-white/80 border border-[var(--accent)]/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/50 rounded-2xl border border-[var(--accent)]/20 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-zinc-100/50 text-sm">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-zinc-100 leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-zinc-100/70 text-sm mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-100/50">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="text-[var(--accent)] font-semibold text-sm inline-flex items-center gap-1 group cursor-pointer hover:underline">
                      Read more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-[var(--accent)]/30 mx-auto mb-4" />
              <p className="text-zinc-100/50 text-lg">No posts in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-white/50">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-zinc-100">{blogData.newsletter.headline}</h2>
            <p className="text-lg text-zinc-100/70 mb-8">
              {blogData.newsletter.subheadline}
            </p>
            <Link to="/contact" className="btn-primary">
              {blogData.newsletter.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
