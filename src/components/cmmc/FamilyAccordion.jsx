import { useState } from 'react';
import ControlRow from './ControlRow';

export default function FamilyAccordion({ family, familyName, controls, controlStatuses, onStatusChange }) {
  const [open, setOpen] = useState(false);

  const assessed = controls.filter(c => controlStatuses[c.id]).length;
  const met = controls.filter(c => controlStatuses[c.id] === 'MET').length;
  const partial = controls.filter(c => controlStatuses[c.id] === 'PARTIAL').length;
  const notMet = controls.filter(c => controlStatuses[c.id] === 'NOT_MET').length;
  const na = controls.filter(c => controlStatuses[c.id] === 'NA').length;
  const total = controls.length;

  const handleBulkNotMet = () => {
    controls.forEach(c => {
      if (!controlStatuses[c.id]) {
        onStatusChange(c.id, 'NOT_MET');
      }
    });
  };

  return (
    <div className="card-noir overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-[var(--aegis-elevated)] transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-[var(--aegis-accent)] w-8">{family}</span>
          <span className="text-sm font-medium text-[var(--aegis-text-primary)]">{familyName}</span>
          <span className="font-mono text-xs text-[var(--aegis-text-muted)]">({total})</span>
        </div>
        <div className="flex items-center gap-3">
          {/* Mini progress bar */}
          <div className="hidden sm:flex items-center gap-1.5">
            {assessed > 0 && (
              <>
                {met > 0 && <span className="font-mono text-[10px] text-[var(--aegis-success)]">{met}M</span>}
                {partial > 0 && <span className="font-mono text-[10px] text-[var(--aegis-warning)]">{partial}P</span>}
                {notMet > 0 && <span className="font-mono text-[10px] text-[var(--aegis-error)]">{notMet}F</span>}
                {na > 0 && <span className="font-mono text-[10px] text-[var(--aegis-text-muted)]">{na}N</span>}
              </>
            )}
          </div>
          <span className="font-mono text-xs text-[var(--aegis-text-muted)]">
            {assessed}/{total}
          </span>
          <div className="w-16 h-1.5 bg-[var(--aegis-elevated)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--aegis-accent)] rounded-full transition-all duration-300"
              style={{ width: `${(assessed / total) * 100}%` }}
            />
          </div>
          <svg
            className={`w-4 h-4 text-[var(--aegis-text-muted)] transition-transform ${open ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {open && (
        <div className="border-t border-[var(--aegis-border)]">
          {/* Bulk action */}
          {assessed < total && (
            <div className="px-5 py-2 bg-[var(--aegis-elevated)] flex items-center justify-between">
              <span className="text-xs text-[var(--aegis-text-muted)]">
                {total - assessed} unassessed control{total - assessed !== 1 ? 's' : ''}
              </span>
              <button
                type="button"
                onClick={handleBulkNotMet}
                className="text-xs text-[var(--aegis-text-secondary)] hover:text-[var(--aegis-text-primary)] font-medium"
              >
                Mark remaining as NOT MET
              </button>
            </div>
          )}

          {controls.map(control => (
            <ControlRow
              key={control.id}
              control={control}
              status={controlStatuses[control.id] || ''}
              onStatusChange={onStatusChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}
