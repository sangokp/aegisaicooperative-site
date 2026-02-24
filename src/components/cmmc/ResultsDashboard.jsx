import { CONTROL_FAMILIES, FAMILY_NAMES } from '../../lib/cmmc/types';
import { SPRS_MAX } from '../../lib/cmmc/assessment';
import { generatePrintableReport } from '../../lib/cmmc/report';

function ScoreCard({ label, value, color }) {
  return (
    <div className="card-noir p-5 text-center">
      <div className="font-mono text-3xl font-bold" style={{ color }}>{value}</div>
      <div className="text-xs text-[var(--aegis-text-muted)] mt-1">{label}</div>
    </div>
  );
}

function FamilyBar({ family, familyName, scores }) {
  const { met, total, percentage } = scores;
  const notAssessed = total === 0;

  return (
    <div className="flex items-center gap-3 py-2">
      <span className="font-mono text-xs text-[var(--aegis-accent)] w-6 shrink-0">{family}</span>
      <span className="text-xs text-[var(--aegis-text-secondary)] w-48 truncate">{familyName}</span>
      <div className="flex-1 h-2 bg-[var(--aegis-elevated)] rounded-full overflow-hidden">
        {!notAssessed && (
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${percentage}%`,
              backgroundColor: percentage === 100
                ? 'var(--aegis-success)'
                : percentage >= 50
                  ? 'var(--aegis-warning)'
                  : 'var(--aegis-error)',
            }}
          />
        )}
      </div>
      <span className="font-mono text-xs text-[var(--aegis-text-muted)] w-16 text-right">
        {met}/{total} ({percentage}%)
      </span>
    </div>
  );
}

const PRIORITY_COLORS = {
  CRITICAL: 'var(--aegis-error)',
  HIGH: '#F97316',
  MEDIUM: 'var(--aegis-warning)',
  LOW: 'var(--aegis-text-muted)',
};

export default function ResultsDashboard({ result, gaps, otWarnings, poamDetails, profile, onReset }) {
  const passing = result.sprsScore >= 80;

  const handleDownloadReport = () => {
    const html = generatePrintableReport(result, gaps, otWarnings, poamDetails, profile);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  };

  return (
    <div>
      <div className="mb-8">
        <span className="font-mono text-xs tracking-wider text-[var(--aegis-accent)] uppercase">Step 3 of 3</span>
        <h1 className="font-display text-3xl font-bold text-[var(--aegis-text-primary)] mt-2 mb-2 tracking-tight">
          Assessment Results
        </h1>
        <p className="text-[var(--aegis-text-secondary)]">
          CMMC Level 2 gap analysis for {result.organizationName}
        </p>
      </div>

      {/* SPRS Score Hero */}
      <div className={`card-noir p-8 mb-6 text-center border ${passing ? 'border-[var(--aegis-success)]30' : 'border-[var(--aegis-error)]30'}`}>
        <div className="font-mono text-6xl font-bold mb-2" style={{ color: passing ? 'var(--aegis-success)' : 'var(--aegis-error)' }}>
          {result.sprsScore}
        </div>
        <div className="text-sm text-[var(--aegis-text-muted)] mb-3">
          SPRS Score (out of {SPRS_MAX})
        </div>
        <span
          className="inline-block font-mono text-sm font-medium px-4 py-1.5 rounded-full"
          style={{
            color: passing ? 'var(--aegis-success)' : 'var(--aegis-error)',
            backgroundColor: passing ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
          }}
        >
          {passing ? 'PASSING (>= 80)' : 'FAILING (< 80)'}
        </span>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <ScoreCard label="MET" value={result.metCount} color="var(--aegis-success)" />
        <ScoreCard label="PARTIAL" value={result.partialCount} color="var(--aegis-warning)" />
        <ScoreCard label="NOT MET" value={result.notMetCount} color="var(--aegis-error)" />
        <ScoreCard label="N/A" value={result.naCount} color="var(--aegis-text-muted)" />
      </div>

      {/* POA&M Eligibility */}
      <div className="card-noir p-5 mb-6">
        <h2 className="font-display text-lg font-bold text-[var(--aegis-text-primary)] mb-3">POA&M Eligibility</h2>
        {poamDetails.eligible ? (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[var(--aegis-success)]" />
            <span className="text-sm text-[var(--aegis-success)] font-medium">
              Eligible for conditional CMMC Level 2 authorization with POA&M
            </span>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--aegis-error)]" />
              <span className="text-sm text-[var(--aegis-error)] font-medium">Not eligible for POA&M conditional authorization</span>
            </div>
            <ul className="space-y-1 ml-4">
              {poamDetails.reasons.map((reason, i) => (
                <li key={i} className="text-xs text-[var(--aegis-text-secondary)]">
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Family Breakdown */}
      <div className="card-noir p-5 mb-6">
        <h2 className="font-display text-lg font-bold text-[var(--aegis-text-primary)] mb-4">Family Breakdown</h2>
        <div className="space-y-1">
          {CONTROL_FAMILIES.map(f => (
            <FamilyBar
              key={f}
              family={f}
              familyName={FAMILY_NAMES[f]}
              scores={result.familyScores[f]}
            />
          ))}
        </div>
      </div>

      {/* Gap Analysis */}
      {gaps.length > 0 && (
        <div className="card-noir p-5 mb-6">
          <h2 className="font-display text-lg font-bold text-[var(--aegis-text-primary)] mb-4">
            Gap Analysis ({gaps.length} gaps)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--aegis-border)]">
                  <th className="text-left py-2 font-mono text-xs text-[var(--aegis-text-muted)] font-medium">Priority</th>
                  <th className="text-left py-2 font-mono text-xs text-[var(--aegis-text-muted)] font-medium">Control</th>
                  <th className="text-left py-2 font-mono text-xs text-[var(--aegis-text-muted)] font-medium hidden md:table-cell">Family</th>
                  <th className="text-left py-2 font-mono text-xs text-[var(--aegis-text-muted)] font-medium hidden lg:table-cell">Effort</th>
                </tr>
              </thead>
              <tbody>
                {gaps.map(gap => (
                  <tr key={gap.controlId} className="border-b border-[var(--aegis-border)] last:border-b-0">
                    <td className="py-2.5 pr-3">
                      <span
                        className="font-mono text-[10px] font-medium px-2 py-0.5 rounded"
                        style={{
                          color: PRIORITY_COLORS[gap.priority],
                          backgroundColor: `${PRIORITY_COLORS[gap.priority]}15`,
                        }}
                      >
                        {gap.priority}
                      </span>
                    </td>
                    <td className="py-2.5 pr-3">
                      <span className="font-mono text-xs text-[var(--aegis-accent)]">{gap.controlId}</span>
                      <span className="ml-2 text-[var(--aegis-text-primary)]">{gap.title}</span>
                    </td>
                    <td className="py-2.5 pr-3 hidden md:table-cell text-[var(--aegis-text-muted)]">
                      {FAMILY_NAMES[gap.family]}
                    </td>
                    <td className="py-2.5 hidden lg:table-cell text-xs text-[var(--aegis-text-muted)]">
                      {gap.estimatedEffort}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* OT Warnings */}
      {otWarnings.length > 0 && (
        <div className="card-noir p-5 mb-6 border border-[var(--aegis-warning)]20">
          <h2 className="font-display text-lg font-bold text-[var(--aegis-warning)] mb-4">
            OT/Manufacturing Warnings ({otWarnings.length})
          </h2>
          <div className="space-y-3">
            {otWarnings.map(w => (
              <div key={w.controlId} className="bg-[var(--aegis-elevated)] rounded p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-[var(--aegis-accent)]">{w.controlId}</span>
                  <span className="text-sm text-[var(--aegis-text-primary)]">{w.title}</span>
                </div>
                <p className="text-xs text-[var(--aegis-text-secondary)]">{w.otConsideration}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-[var(--aegis-border)]">
        <button
          type="button"
          onClick={onReset}
          className="text-sm text-[var(--aegis-text-secondary)] hover:text-[var(--aegis-text-primary)] transition-colors"
        >
          Start New Assessment
        </button>
        <button
          type="button"
          onClick={handleDownloadReport}
          className="btn-premium flex items-center gap-2 py-3 px-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          Download Report
        </button>
      </div>
    </div>
  );
}
