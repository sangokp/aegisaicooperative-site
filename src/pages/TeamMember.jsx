import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, ArrowLeft } from 'lucide-react';
import teamData from '../data/team.json';

export default function TeamMember() {
  const { id } = useParams();
  const member = teamData.members.find(m => m.id === id);

  if (!member) {
    return (
      <div className="min-h-screen bg-[var(--aegis-void)] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <h1 className="font-display text-4xl font-bold text-[var(--aegis-text-primary)] mb-8">
            Member Not Found
          </h1>
          <Link
            to="/team"
            className="inline-flex items-center gap-2 text-[var(--aegis-accent)] hover:text-[var(--aegis-accent-hover)] transition-colors"
          >
            <ArrowLeft size={16} /> Back to Team
          </Link>
        </div>
      </div>
    );
  }

  const department = member.role.includes("Co-Founder") ? "Leadership" :
    member.role.includes("Creative") ? "Creative (CDO)" :
      member.role.includes("Brand") ? "Marketing (CMO)" : "Operations";

  return (
    <div className="bg-[var(--aegis-void)] min-h-screen">

      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <Link
          to="/team"
          className="inline-flex items-center gap-2 text-[var(--aegis-text-muted)] hover:text-[var(--aegis-text-primary)] transition-colors mb-12 text-sm"
        >
          <ArrowLeft size={16} /> Back to Team
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-12 gap-16 items-start"
        >
          {/* Avatar */}
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] rounded-xl border border-[var(--aegis-border)] bg-[var(--aegis-engine)] flex items-center justify-center">
              <span className="font-display font-extrabold text-[var(--aegis-charcoal)] text-[12rem] select-none">
                {member.name.charAt(0)}
              </span>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-mono text-xs text-[var(--aegis-accent)] tracking-wider block mb-4">
                {member.role}
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-[var(--aegis-text-primary)] mb-6 tracking-tight">
                {member.name}
              </h1>
            </div>

            <div className="space-y-6">
              <div>
                <span className="section-label text-[var(--aegis-text-muted)] block mb-3">Focus</span>
                <p className="text-xl text-[var(--aegis-text-primary)] leading-relaxed">
                  {member.focus}
                </p>
              </div>

              <div className="divider" />

              <div>
                <span className="section-label text-[var(--aegis-text-muted)] block mb-3">Biography</span>
                <p className="text-[var(--aegis-text-secondary)] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="card-noir p-6">
                <span className="section-label text-[var(--aegis-text-muted)] block mb-2">Department</span>
                <p className="text-[var(--aegis-text-primary)] font-display text-lg font-bold">
                  {department}
                </p>
              </div>
              <div className="card-noir p-6">
                <span className="section-label text-[var(--aegis-text-muted)] block mb-2">Connect</span>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--aegis-text-primary)] hover:text-[var(--aegis-accent)] transition-colors"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
