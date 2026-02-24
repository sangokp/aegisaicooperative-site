import { calculateLiveSPRS, SPRS_MAX } from '../../lib/cmmc/assessment';

export default function SprsScoreBar({ controlStatuses }) {
  const { score } = calculateLiveSPRS(controlStatuses);
  const assessed = Object.keys(controlStatuses).length;
  const percentage = Math.max(0, Math.min(100, ((score + 203) / 313) * 100));

  let color = 'var(--aegis-error)';
  let label = 'FAILING';
  if (score >= 80) {
    color = 'var(--aegis-success)';
    label = 'PASSING';
  } else if (score >= 50) {
    color = 'var(--aegis-warning)';
    label = 'BELOW THRESHOLD';
  }

  return (
    <div className="sticky top-[7.5rem] z-30 bg-[var(--aegis-engine)] border-b border-[var(--aegis-border)] py-3 px-6 -mx-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="font-mono text-2xl font-bold" style={{ color }}>
              {score}
            </div>
            <div className="font-mono text-[10px] text-[var(--aegis-text-muted)] tracking-wider">
              SPRS / {SPRS_MAX}
            </div>
          </div>
          <div className="hidden sm:block">
            <span
              className="font-mono text-xs font-medium px-2 py-1 rounded"
              style={{ color, backgroundColor: `${color}15` }}
            >
              {label}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-[var(--aegis-text-muted)] font-mono text-xs">
            {assessed}/110 assessed
          </span>
          <div className="w-24 h-1.5 bg-[var(--aegis-elevated)] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${(assessed / 110) * 100}%`,
                backgroundColor: 'var(--aegis-accent)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
