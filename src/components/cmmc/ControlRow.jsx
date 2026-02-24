import { useState } from 'react';

const STATUS_OPTIONS = [
  { value: 'MET', label: 'MET', color: 'var(--aegis-success)' },
  { value: 'PARTIAL', label: 'PARTIAL', color: 'var(--aegis-warning)' },
  { value: 'NOT_MET', label: 'NOT MET', color: 'var(--aegis-error)' },
  { value: 'NA', label: 'N/A', color: 'var(--aegis-text-muted)' },
];

export default function ControlRow({ control, status, onStatusChange }) {
  const [expanded, setExpanded] = useState(false);
  const currentStatus = STATUS_OPTIONS.find(s => s.value === status);

  return (
    <div className="border-b border-[var(--aegis-border)] last:border-b-0">
      <div className="flex items-start gap-4 py-3 px-4">
        {/* Control ID + Title */}
        <div className="flex-1 min-w-0">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="flex items-start gap-2 text-left w-full group"
          >
            <span className="font-mono text-xs text-[var(--aegis-accent)] shrink-0 mt-0.5 w-12">
              {control.id}
            </span>
            <div className="flex-1 min-w-0">
              <span className="text-sm text-[var(--aegis-text-primary)] group-hover:text-[var(--aegis-accent-hover)] transition-colors">
                {control.title}
              </span>
              {control.weight > 1 && (
                <span className="ml-2 font-mono text-[10px] px-1.5 py-0.5 rounded bg-[var(--aegis-error)]15 text-[var(--aegis-error)] align-middle">
                  WT:{control.weight}
                </span>
              )}
            </div>
            <svg
              className={`w-4 h-4 text-[var(--aegis-text-muted)] shrink-0 mt-0.5 transition-transform ${expanded ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Status selector */}
        <div className="flex gap-1 shrink-0">
          {STATUS_OPTIONS.map(opt => (
            <button
              key={opt.value}
              type="button"
              onClick={() => onStatusChange(control.id, opt.value)}
              className={`
                font-mono text-[10px] px-2 py-1 rounded transition-all
                ${status === opt.value
                  ? 'font-bold ring-1'
                  : 'opacity-40 hover:opacity-70'}
              `}
              style={status === opt.value ? {
                color: opt.color,
                backgroundColor: `${opt.color}15`,
                ringColor: opt.color,
              } : {
                color: opt.color,
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Expanded details */}
      {expanded && (
        <div className="px-4 pb-4 ml-16">
          <p className="text-sm text-[var(--aegis-text-secondary)] mb-3">
            {control.description}
          </p>

          {control.assessmentObjectives?.length > 0 && (
            <div className="mb-3">
              <h4 className="font-mono text-xs text-[var(--aegis-text-muted)] mb-1.5 tracking-wider">ASSESSMENT OBJECTIVES</h4>
              <ul className="space-y-1">
                {control.assessmentObjectives.map((obj, i) => (
                  <li key={i} className="text-xs text-[var(--aegis-text-secondary)] flex gap-2">
                    <span className="text-[var(--aegis-text-muted)] shrink-0">{i + 1}.</span>
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {control.otConsiderations && (
            <div className="bg-[var(--aegis-warning)]08 border border-[var(--aegis-warning)]20 rounded p-3 mb-3">
              <h4 className="font-mono text-xs text-[var(--aegis-warning)] mb-1 tracking-wider">OT CONSIDERATIONS</h4>
              <p className="text-xs text-[var(--aegis-text-secondary)]">{control.otConsiderations}</p>
            </div>
          )}

          {control.evidenceExamples?.length > 0 && (
            <div>
              <h4 className="font-mono text-xs text-[var(--aegis-text-muted)] mb-1.5 tracking-wider">EVIDENCE EXAMPLES</h4>
              <div className="flex flex-wrap gap-1.5">
                {control.evidenceExamples.map((ex, i) => (
                  <span key={i} className="text-xs bg-[var(--aegis-elevated)] text-[var(--aegis-text-secondary)] px-2 py-0.5 rounded">
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
