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
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="font-display text-4xl font-medium text-[var(--aegis-text-primary)] mb-8">
            Member Not Found
          </h1>
          <Link
            to="/team"
            className="inline-flex items-center gap-2 text-[var(--aegis-rust)] border-b border-[var(--aegis-rust)] hover:text-[var(--aegis-accent-hover)] transition-colors"
          >
            <ArrowLeft size={16} /> Back to Team
          </Link>
        </div>
      </div>
    );
  }

  const department = member.role.includes("CEO") ? "Executive" :
    member.role.includes("Creative") ? "Creative (CDO)" :
    member.role.includes("Brand") ? "Marketing (CMO)" : "Operations";

  return (
    <div className="bg-[var(--aegis-void)] min-h-screen">

      {/* Header */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
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
            <div className="aspect-[4/5] border border-[var(--aegis-border)] bg-[var(--aegis-surface)] flex items-center justify-center">
              <span className="font-display font-medium text-[var(--aegis-border)] text-[12rem] select-none">
                {member.name.charAt(0)}
              </span>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="small-caps text-xs text-[var(--aegis-rust)] mb-4 tracking-[0.15em]">
                {member.role}
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-medium text-[var(--aegis-text-primary)] mb-6">
                {member.name}
              </h1>
            </div>

            <div className="space-y-6">
              <div>
                <p className="small-caps text-xs text-[var(--aegis-sage)] mb-3 tracking-[0.15em]">
                  Focus
                </p>
                <p className="text-xl text-[var(--aegis-text-primary)] leading-relaxed">
                  {member.focus}
                </p>
              </div>

              <hr className="border-[var(--aegis-border)]" />

              <div>
                <p className="small-caps text-xs text-[var(--aegis-sage)] mb-3 tracking-[0.15em]">
                  Biography
                </p>
                <p className="text-[var(--aegis-text-secondary)] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-[var(--aegis-border)] bg-[var(--aegis-surface)]">
                <p className="small-caps text-xs text-[var(--aegis-rust)] mb-2 tracking-[0.15em]">
                  Department
                </p>
                <p className="text-[var(--aegis-text-primary)] font-display text-lg">
                  {department}
                </p>
              </div>
              <div className="p-6 border border-[var(--aegis-border)] bg-[var(--aegis-surface)]">
                <p className="small-caps text-xs text-[var(--aegis-rust)] mb-2 tracking-[0.15em]">
                  Connect
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--aegis-text-primary)] hover:text-[var(--aegis-rust)] transition-colors"
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
