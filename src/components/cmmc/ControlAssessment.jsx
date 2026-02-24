import { useCallback } from 'react';
import SprsScoreBar from './SprsScoreBar';
import FamilyAccordion from './FamilyAccordion';
import { CONTROL_FAMILIES, FAMILY_NAMES } from '../../lib/cmmc/types';
import { getControlsByFamily } from '../../lib/cmmc/controls';

export default function ControlAssessment({ controlStatuses, setControlStatuses, onComplete, onBack }) {
  const handleStatusChange = useCallback((controlId, status) => {
    setControlStatuses(prev => ({ ...prev, [controlId]: status }));
  }, [setControlStatuses]);

  const assessed = Object.keys(controlStatuses).length;

  const handleBulkAllNotMet = () => {
    const bulk = {};
    CONTROL_FAMILIES.forEach(f => {
      const controls = getControlsByFamily(f);
      controls.forEach(c => {
        if (!controlStatuses[c.id]) {
          bulk[c.id] = 'NOT_MET';
        }
      });
    });
    setControlStatuses(prev => ({ ...prev, ...bulk }));
  };

  return (
    <div>
      <div className="mb-4">
        <span className="font-mono text-xs tracking-wider text-[var(--aegis-accent)] uppercase">Step 2 of 3</span>
        <h1 className="font-display text-3xl font-bold text-[var(--aegis-text-primary)] mt-2 mb-2 tracking-tight">
          Control Assessment
        </h1>
        <p className="text-[var(--aegis-text-secondary)]">
          Assess each of the 110 NIST SP 800-171 controls. Expand a family to see its controls. Your SPRS score updates live.
        </p>
      </div>

      <SprsScoreBar controlStatuses={controlStatuses} />

      {/* Bulk action for all */}
      {assessed < 110 && (
        <div className="flex items-center justify-between py-4 border-b border-[var(--aegis-border)] mb-4">
          <span className="text-sm text-[var(--aegis-text-muted)]">
            {110 - assessed} controls remaining
          </span>
          <button
            type="button"
            onClick={handleBulkAllNotMet}
            className="text-sm text-[var(--aegis-accent)] hover:text-[var(--aegis-accent-hover)] font-medium"
          >
            Mark all remaining as NOT MET
          </button>
        </div>
      )}

      <div className="space-y-3">
        {CONTROL_FAMILIES.map(family => (
          <FamilyAccordion
            key={family}
            family={family}
            familyName={FAMILY_NAMES[family]}
            controls={getControlsByFamily(family)}
            controlStatuses={controlStatuses}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>

      <div className="flex items-center justify-between mt-8 pt-6 border-t border-[var(--aegis-border)]">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-[var(--aegis-text-secondary)] hover:text-[var(--aegis-text-primary)] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Profile
        </button>
        <button
          type="button"
          onClick={onComplete}
          className="btn-premium flex items-center gap-2 py-3 px-8"
        >
          View Results
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
