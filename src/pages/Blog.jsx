import { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="small-caps text-xs text-[var(--aegis-rust)] mb-6 tracking-[0.2em]">
            Research & Insights
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-[var(--aegis-text-primary)] mb-8">
            From the Cooperative
          </h1>
          <p className="text-lg md:text-xl text-[var(--aegis-text-secondary)] leading-relaxed max-w-2xl">
            Insights, technical breakthroughs, and perspectives from the AEGIS engineering cooperative.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <hr className="border-t border-[var(--aegis-border)]" />
      </div>

      {/* Filters */}
      <section className="py-8 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap gap-3">
          {['All', ...blogData.categories].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs uppercase tracking-widest border transition-colors ${
                selectedCategory === category
                  ? 'bg-[var(--aegis-text-primary)] text-[var(--aegis-void)] border-[var(--aegis-text-primary)]'
                  : 'bg-transparent text-[var(--aegis-text-secondary)] border-[var(--aegis-border)] hover:border-[var(--aegis-text-primary)] hover:text-[var(--aegis-text-primary)]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 pb-24 md:pb-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${post.slug}`} className="block h-full">
                <div className="p-8 border border-[var(--aegis-border)] bg-[var(--aegis-surface)] h-full flex flex-col hover:border-[var(--aegis-border-hover)] transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs text-[var(--aegis-rust)] uppercase tracking-widest border-l-2 border-[var(--aegis-rust)] pl-2">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-[var(--aegis-text-muted)] text-xs">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-display text-xl md:text-2xl font-medium text-[var(--aegis-text-primary)] mb-4 leading-tight group-hover:text-[var(--aegis-rust)] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-[var(--aegis-text-secondary)] leading-relaxed line-clamp-3 mb-8 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-[var(--aegis-border)]">
                    <span className="text-xs text-[var(--aegis-text-muted)]">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="text-xs text-[var(--aegis-rust)] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
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
      <section className="py-24 md:py-32 bg-[var(--aegis-text-primary)] text-[var(--aegis-void)]">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-6">
            Stay Informed
          </h2>
          <p className="text-lg opacity-70 mb-10 max-w-xl mx-auto">
            Receive insights and updates from the cooperative directly in your inbox.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[var(--aegis-void)] text-[var(--aegis-text-primary)] px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-[var(--aegis-rust)] hover:text-[var(--aegis-void)] transition-colors"
          >
            {blogData.newsletter.cta}
          </Link>
        </div>
      </section>

    </div>
  );
}
