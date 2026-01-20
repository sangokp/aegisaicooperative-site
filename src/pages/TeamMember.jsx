import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, ArrowLeft, ArrowUpRight, Cpu, Network, Share2 } from 'lucide-react';
import teamData from '../data/team.json';

export default function TeamMember() {
  const { id } = useParams();
  const member = teamData.members.find(m => m.id === id);

  if (!member) {
    return (
      <div className="min-h-screen bg-[var(--color-void)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-white mb-4">MEMBER NOT FOUND</h1>
          <Link to="/team" className="text-[var(--color-accent)] font-mono uppercase tracking-widest hover:underline">
            Return to Team Grid
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-[var(--color-void)] min-h-screen">
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[var(--color-accent)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />
      
      {/* ═══════════════════════════════════════════════════════════════════════════
          HEADER
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-40 pb-12">
        <div className="container-custom">
          <Link to="/team" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 font-mono text-xs uppercase tracking-widest group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Intelligence Unit
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-12 gap-12 items-end"
          >
            <div className="lg:col-span-8">
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4 text-gradient-white">
                {member.name}
              </h1>
              <p className="font-mono text-[var(--color-accent)] text-lg uppercase tracking-widest">
                {member.role}
              </p>
            </div>
            
            <div className="lg:col-span-4 flex justify-start lg:justify-end gap-4">
              <a 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-white hover:text-black transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-white hover:text-black transition-all duration-300">
                <Share2 size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          PROFILE CONTENT
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="pb-32 relative z-10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left: Avatar/Visual */}
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="aspect-[4/5] rounded-[3rem] overflow-hidden relative glass-panel border border-white/10"
              >
                <div className="absolute inset-0 bg-[var(--color-charcoal)] flex items-center justify-center">
                  <span className="font-display font-black text-white/5 text-[12rem] md:text-[20rem] select-none">
                    {member.name.charAt(0)}
                  </span>
                </div>
                
                {/* Tech Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-4 text-white/40 font-mono text-xs mb-4">
                    <div className="flex items-center gap-2">
                      <Cpu size={14} /> ID: {member.id.toUpperCase()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Network size={14} /> NODE: ACTIVE
                    </div>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-[var(--color-accent)] animate-pulse" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Bio & Details */}
            <div className="lg:col-span-7 space-y-12 pt-8">
              
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-white">Core Focus</h3>
                <p className="font-body text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                  {member.focus}
                </p>
              </div>

              <div className="w-full h-px bg-white/10" />

              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-white">Biography</h3>
                <p className="font-body text-lg text-white/60 font-light leading-relaxed">
                  {member.bio}
                </p>
                {/* Fallback longer bio generation if simple bio is short - usually this would come from JSON */}
                <p className="font-body text-lg text-white/60 font-light leading-relaxed">
                  Responsible for key strategic initiatives within the AEGIS Cooperative, ensuring that our systems align with the core principles of sovereignty, transparency, and user-aligned AI. Working across departments to synthesize technical capability with human-centric design.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                 <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                   <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Department</h4>
                   <p className="text-white font-display text-lg">
                     {member.role.includes("CEO") ? "Executive" : 
                      member.role.includes("Creative") ? "Creative (CDO)" :
                      member.role.includes("Brand") ? "Marketing (CMO)" : "Operations"}
                   </p>
                 </div>
                 <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                   <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Status</h4>
                   <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                     <p className="text-white font-display text-lg">Online</p>
                   </div>
                 </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
