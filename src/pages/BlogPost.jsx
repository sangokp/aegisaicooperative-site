import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import blogData from '../data/blog.json';

// Full article content for each post
const articleContent = {
  'trust-architecture-future': {
    sections: [
      {
        heading: 'The Trust Problem in Enterprise AI',
        content: `As AI systems become more capable, organizations face a fundamental question: can we trust these systems to make decisions that affect our business, our customers, and our reputation?\n\nThe answer isn't simply "yes" or "no." Trust is a spectrum, and the real question is: how do we build AI systems where trust can be earned, verified, and maintained over time?\n\nAt AEGIS, we've developed what we call Trust Architecture - a comprehensive framework for building AI systems that are accountable, transparent, and controllable.`
      },
      {
        heading: 'What is Trust Architecture?',
        content: `Trust Architecture is the design philosophy that treats accountability and transparency as first-class requirements, not afterthoughts. It encompasses:\n\n**Immutable Audit Trails**: Every action an AI agent takes is logged with cryptographic verification. You can trace any decision back to its source.\n\n**Progressive Autonomy**: AI systems don't get full autonomy on day one. They earn it through demonstrated reliability across increasing levels of responsibility.\n\n**Human-in-the-Loop Design**: Critical decisions always have human oversight. The question is how much oversight, and Trust Architecture provides the framework for calibrating that.\n\n**Sandboxed Execution**: Before any AI touches production systems, it proves itself in isolated environments with synthetic data.`
      },
      {
        heading: 'Why This Matters Now',
        content: `The race to deploy AI is accelerating. Organizations that don't adopt AI risk falling behind. But organizations that deploy AI without proper governance risk something worse: catastrophic failures that destroy customer trust, invite regulatory action, and create liability exposure.\n\nTrust Architecture isn't about slowing down AI adoption. It's about making AI adoption sustainable. When you can prove what your AI did, why it did it, and demonstrate that you had proper controls in place, you can deploy with confidence.\n\nThe future belongs to organizations that can move fast AND maintain control. Trust Architecture makes that possible.`
      }
    ]
  },
  'multi-agent-verification': {
    sections: [
      {
        heading: 'The Hallucination Problem',
        content: `Every AI system can hallucinate - generate confident-sounding outputs that are completely wrong. A single AI checking its own work is like a student grading their own test. The incentives don't align.\n\nMulti-agent verification solves this by having multiple AI systems with different training, different architectures, and different perspectives evaluate the same output. When they agree, confidence is high. When they disagree, that's a signal for human review.`
      },
      {
        heading: 'How It Works at AEGIS',
        content: `Our verification system uses three independent checks:\n\n**Primary Agent**: Generates the initial response or action\n**Verification Agent**: Reviews the output against the original request and known facts\n**Adversarial Agent**: Actively tries to find flaws, inconsistencies, or potential issues\n\nOnly when all three agents reach consensus does an action proceed automatically. Disagreements trigger human review with full context about where the agents diverged.\n\nThis approach catches errors that would slip through single-agent systems, creating a layer of accountability that scales with complexity.`
      },
      {
        heading: 'The Economics of Verification',
        content: `"But doesn't running three agents cost three times as much?"\n\nYes, verification has a cost. But consider the alternative: what's the cost of an AI making a wrong decision that affects your customers, your compliance status, or your reputation?\n\nFor high-stakes decisions, the verification cost is trivial compared to the potential downside. And for low-stakes decisions, you can calibrate the verification level appropriately.\n\nTrust Architecture gives you the framework to make these tradeoffs explicitly, rather than hoping your single AI got it right.`
      }
    ]
  },
  'progressive-autonomy-model': {
    sections: [
      {
        heading: 'The Autonomy Spectrum',
        content: `Not all AI deployments need the same level of human oversight. A spelling checker can run fully autonomously. A system that sends emails on behalf of executives needs more control.\n\nProgressive Autonomy is our framework for calibrating oversight to risk. It defines three levels:\n\n**IN-LOOP**: Human approves every action before execution. Maximum oversight, minimum speed.\n**ON-LOOP**: AI proposes, human confirms. Balance of speed and control.\n**OUT-LOOP**: AI executes autonomously with logging and alerting. Maximum speed, minimum friction.`
      },
      {
        heading: 'Earning Trust Over Time',
        content: `The key insight is that autonomy should be earned, not granted. A new AI deployment starts IN-LOOP. As it demonstrates reliability - measured through actual performance data, not promises - it can graduate to ON-LOOP, then eventually OUT-LOOP for specific, well-defined tasks.\n\nThis isn't about distrusting AI. It's about building justified confidence through evidence. Would you give a new employee full signing authority on day one? Of course not. AI systems should follow the same principle.`
      },
      {
        heading: 'Implementing Progressive Autonomy',
        content: `The AEGIS platform makes this practical:\n\n1. **Define Trust Boundaries**: What actions fall into each autonomy level?\n2. **Measure Performance**: Track accuracy, speed, and error rates at each level\n3. **Set Graduation Criteria**: What metrics must an AI hit to move to higher autonomy?\n4. **Enable Demotion**: If performance degrades, automatically reduce autonomy\n\nThis creates a virtuous cycle: AI systems have incentive to perform well (more autonomy), humans have confidence in the systems (measurable track record), and the organization gets the benefits of AI without the risks of blind trust.`
      }
    ]
  },
  'grant-funding-ai-impact': {
    sections: [
      {
        heading: 'The Grant Accountability Gap',
        content: `Non-profit organizations running STEM and AI education programs face a persistent challenge: proving impact to funders. Grant applications promise outcomes, but demonstrating those outcomes requires data that's often difficult or impossible to collect.\n\nAEGIS solves this by building measurement into the infrastructure itself. When students interact with AI learning tools, every interaction is logged (with appropriate privacy protections). Progress is tracked automatically. Impact becomes measurable by default.`
      },
      {
        heading: 'What We Measure',
        content: `Our platform tracks:\n\n**Engagement Metrics**: How often do students use the tools? For how long? Which features do they use most?\n\n**Progress Metrics**: What skills are students developing? How does performance improve over time?\n\n**Outcome Metrics**: How do participants perform on assessments? What real-world projects do they complete?\n\nAll of this data feeds into dashboards that funders can access directly. No more waiting for quarterly reports. No more taking the organization's word for it. The data speaks for itself.`
      },
      {
        heading: 'Privacy-First Design',
        content: `Tracking student progress doesn't mean compromising privacy. AEGIS uses:\n\n- Anonymized identifiers that can't be traced back to individuals\n- Aggregate reporting that shows trends without exposing individuals\n- Strict data retention policies with automatic deletion\n- Full FERPA and COPPA compliance\n\nFunders get the accountability they need. Students get the privacy they deserve. Organizations get tools that actually work.`
      }
    ]
  },
  'against-black-box-ai': {
    sections: [
      {
        heading: 'The Explainability Crisis',
        content: `Most enterprise AI today is a black box. Data goes in, decisions come out, and nobody can explain what happened in between.\n\nThis is fine for recommendations on a streaming service. It's not fine for decisions about hiring, lending, medical treatment, or legal matters. In these domains, "the AI said so" is not an acceptable explanation.\n\nAEGIS builds AI systems where every decision can be traced back to its inputs, its reasoning, and its confidence level. Not because regulators require it (though many do), but because it's the right way to build trustworthy systems.`
      },
      {
        heading: 'What Explainability Looks Like',
        content: `For every AI decision, our systems can show:\n\n**Input Analysis**: What data did the AI consider? What did it ignore?\n**Reasoning Chain**: What logic led from inputs to outputs?\n**Confidence Assessment**: How certain is the AI? What would change its mind?\n**Alternative Paths**: What other decisions were considered and why were they rejected?\n\nThis isn't a retrofit. It's built into the architecture from the start. Explainability that's bolted on after the fact is never as good as explainability that's designed in.`
      },
      {
        heading: 'The Business Case for Transparency',
        content: `Beyond ethics and compliance, there's a business case for explainable AI:\n\n**Debugging**: When something goes wrong, you can find and fix the problem\n**Improvement**: Understanding decisions helps you make the system better\n**Trust**: Stakeholders who understand the system are more likely to use it\n**Liability**: Documented reasoning provides legal protection\n\nBlack-box AI might be easier to build, but explainable AI is easier to maintain, improve, and defend. In the long run, transparency wins.`
      }
    ]
  },
  'sandbox-isolation': {
    sections: [
      {
        heading: 'Test Before You Trust',
        content: `Would you deploy untested code directly to production? Of course not. So why would you deploy untested AI directly to your business operations?\n\nSandbox isolation is the practice of proving AI systems in controlled environments before they touch real data, real customers, or real operations. It's not optional. It's the foundation of responsible AI deployment.`
      },
      {
        heading: 'How Sandboxing Works',
        content: `AEGIS provides isolated environments that mirror production:\n\n**Synthetic Data**: Realistic but fake data that tests the full range of scenarios\n**Simulated Integrations**: Mock APIs and systems that behave like the real thing\n**Accelerated Time**: Run months of scenarios in hours\n**Adversarial Testing**: Deliberate attempts to break or confuse the system\n\nOnly after a system passes sandbox testing does it graduate to production - and even then, it starts with limited scope and gradually expands.`
      },
      {
        heading: 'Continuous Validation',
        content: `Sandboxing isn't a one-time event. As your business changes, as data patterns shift, as the AI system evolves, continuous validation ensures it still performs as expected.\n\nOur platform runs automated regression tests against sandbox environments, comparing current behavior to established baselines. Drift is detected early, before it becomes a production problem.\n\nThis is the difference between hoping your AI works and knowing it does.`
      }
    ]
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogData.posts.find(p => p.slug === slug);
  const content = articleContent[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-[var(--aegis-void)] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <h1 className="font-display text-4xl font-bold text-[var(--aegis-text-primary)] mb-8">
            Article Not Found
          </h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[var(--aegis-accent)] hover:text-[var(--aegis-accent-hover)] transition-colors"
          >
            <ArrowLeft size={16} /> Back to Research
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--aegis-void)] min-h-screen">

      <article className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[var(--aegis-text-muted)] hover:text-[var(--aegis-text-primary)] transition-colors mb-12 text-sm"
            >
              <ArrowLeft size={16} />
              Back to Research
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="text-xs font-mono text-[var(--aegis-accent)] tracking-wider px-2 py-1 rounded bg-[var(--aegis-accent-muted)]">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-2 text-[var(--aegis-text-muted)] text-sm">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="inline-flex items-center gap-2 text-[var(--aegis-text-muted)] text-sm">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--aegis-text-primary)] mb-8 leading-tight tracking-tight">
              {post.title}
            </h1>

            <p className="text-xl text-[var(--aegis-text-secondary)] leading-relaxed mb-16 border-l-2 border-[var(--aegis-accent)] pl-6">
              {post.excerpt}
            </p>
          </motion.div>

          <div className="space-y-16">
            {content?.sections.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                <h2 className="font-display text-2xl font-bold text-[var(--aegis-text-primary)] mb-6 tracking-tight">
                  {section.heading}
                </h2>
                <div className="prose prose-lg max-w-none">
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-[var(--aegis-text-secondary)] leading-relaxed mb-6"
                      dangerouslySetInnerHTML={{
                        __html: paragraph
                          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--aegis-text-primary)] font-semibold">$1</strong>')
                      }}
                    />
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border-t border-[var(--aegis-border)] pt-12 mt-16"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <p className="text-[var(--aegis-text-muted)] text-sm mb-2">Published by</p>
                <p className="text-[var(--aegis-text-primary)] font-display text-lg font-bold">AEGIS AI Cooperative</p>
              </div>
              <Link
                to="/contact"
                className="btn-premium inline-flex items-center gap-2 py-3"
              >
                Discuss This Topic
              </Link>
            </div>
          </motion.div>

        </div>
      </article>

    </div>
  );
}
