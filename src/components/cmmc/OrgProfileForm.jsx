import { useState } from 'react';

const CUI_TYPES = [
  'Controlled Technical Information (CTI)',
  'Controlled Defense Information (CDI)',
  'Export-Controlled (ITAR/EAR)',
  'Naval Nuclear Propulsion Information (NNPI)',
  'Operations Security (OPSEC)',
  'Other',
];

const OT_TYPES = ['SCADA', 'PLC', 'HMI', 'DCS', 'RTU', 'ICS', 'OTHER'];

function TextInput({ label, value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-[var(--aegis-text-secondary)] mb-1.5">
        {label} {required && <span className="text-[var(--aegis-error)]">*</span>}
      </label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-2.5 bg-[var(--aegis-surface)] border border-[var(--aegis-border)] rounded-lg text-[var(--aegis-text-primary)] placeholder:text-[var(--aegis-text-muted)] focus:outline-none focus:border-[var(--aegis-accent)] transition-colors"
      />
    </div>
  );
}

function TextArea({ label, value, onChange, placeholder, rows = 3 }) {
  return (
    <div>
      <label className="block text-sm font-medium text-[var(--aegis-text-secondary)] mb-1.5">
        {label}
      </label>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-2.5 bg-[var(--aegis-surface)] border border-[var(--aegis-border)] rounded-lg text-[var(--aegis-text-primary)] placeholder:text-[var(--aegis-text-muted)] focus:outline-none focus:border-[var(--aegis-accent)] transition-colors resize-y"
      />
    </div>
  );
}

export default function OrgProfileForm({ profile, onComplete }) {
  const [form, setForm] = useState({
    name: profile.name || '',
    systemName: profile.systemName || '',
    systemDescription: profile.systemDescription || '',
    systemBoundary: profile.systemBoundary || '',
    cuiTypes: profile.cuiTypes || [],
    networkDescription: profile.networkDescription || '',
    personnelCount: profile.personnelCount || '',
    locations: profile.locations?.length ? profile.locations : [''],
    hasOT: (profile.otSystems?.length || 0) > 0,
    otSystems: profile.otSystems?.length ? profile.otSystems : [],
    issoName: profile.roles?.[0]?.name || '',
  });

  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => { const next = { ...prev }; delete next[field]; return next; });
    }
  };

  const toggleCUI = (cui) => {
    setForm(prev => ({
      ...prev,
      cuiTypes: prev.cuiTypes.includes(cui)
        ? prev.cuiTypes.filter(c => c !== cui)
        : [...prev.cuiTypes, cui],
    }));
  };

  const addOTSystem = () => {
    setForm(prev => ({
      ...prev,
      otSystems: [...prev.otSystems, { name: '', type: 'PLC', description: '', networkSegment: '', handlesCUI: false }],
    }));
  };

  const updateOT = (index, field, value) => {
    setForm(prev => {
      const systems = [...prev.otSystems];
      systems[index] = { ...systems[index], [field]: value };
      return { ...prev, otSystems: systems };
    });
  };

  const removeOT = (index) => {
    setForm(prev => ({
      ...prev,
      otSystems: prev.otSystems.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = true;
    if (!form.systemName.trim()) newErrors.systemName = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onComplete({
      name: form.name.trim(),
      systemName: form.systemName.trim(),
      systemDescription: form.systemDescription.trim(),
      systemBoundary: form.systemBoundary.trim(),
      cuiTypes: form.cuiTypes,
      networkDescription: form.networkDescription.trim(),
      personnelCount: parseInt(form.personnelCount) || 0,
      locations: form.locations.filter(l => l.trim()),
      otSystems: form.hasOT ? form.otSystems : [],
      roles: [{ title: 'ISSO', name: form.issoName.trim(), responsibilities: ['Security oversight'] }],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-8">
        <span className="font-mono text-xs tracking-wider text-[var(--aegis-accent)] uppercase">Step 1 of 3</span>
        <h1 className="font-display text-3xl font-bold text-[var(--aegis-text-primary)] mt-2 mb-2 tracking-tight">
          Organization Profile
        </h1>
        <p className="text-[var(--aegis-text-secondary)]">
          Provide information about your organization and the system boundary for CUI processing.
        </p>
      </div>

      {/* Organization Info */}
      <div className="card-noir p-6 mb-6 space-y-5">
        <h2 className="font-display text-lg font-bold text-[var(--aegis-text-primary)]">Organization Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <TextInput
              label="Organization Name"
              value={form.name}
              onChange={v => updateField('name', v)}
              placeholder="Acme Defense Manufacturing"
              required
            />
            {errors.name && <p className="text-xs text-[var(--aegis-error)] mt-1">Required</p>}
          </div>
          <div>
            <TextInput
              label="System Name"
              value={form.systemName}
              onChange={v => updateField('systemName', v)}
              placeholder="Production Network"
              required
            />
            {errors.systemName && <p className="text-xs text-[var(--aegis-error)] mt-1">Required</p>}
          </div>
        </div>
        <TextArea
          label="System Description"
          value={form.systemDescription}
          onChange={v => updateField('systemDescription', v)}
          placeholder="Describe the system that processes, stores, or transmits CUI..."
        />
        <TextArea
          label="System Boundary"
          value={form.systemBoundary}
          onChange={v => updateField('systemBoundary', v)}
          placeholder="Define the boundary of the system (networks, devices, facilities)..."
        />
        <TextArea
          label="Network Description"
          value={form.networkDescription}
          onChange={v => updateField('networkDescription', v)}
          placeholder="Describe the network architecture (VLANs, segmentation, DMZ)..."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <TextInput
            label="Personnel Count"
            value={form.personnelCount}
            onChange={v => updateField('personnelCount', v)}
            placeholder="50"
          />
          <TextInput
            label="ISSO Name"
            value={form.issoName}
            onChange={v => updateField('issoName', v)}
            placeholder="Jane Smith"
          />
        </div>
      </div>

      {/* CUI Types */}
      <div className="card-noir p-6 mb-6">
        <h2 className="font-display text-lg font-bold text-[var(--aegis-text-primary)] mb-4">CUI Types Handled</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {CUI_TYPES.map(cui => (
            <label key={cui} className="flex items-center gap-3 cursor-pointer group">
              <div className={`
                w-5 h-5 rounded border-2 flex items-center justify-center transition-colors
                ${form.cuiTypes.includes(cui)
                  ? 'bg-[var(--aegis-accent)] border-[var(--aegis-accent)]'
                  : 'border-[var(--aegis-border)] group-hover:border-[var(--aegis-border-hover)]'}
              `}>
                {form.cuiTypes.includes(cui) && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-sm text-[var(--aegis-text-secondary)]">{cui}</span>
            </label>
          ))}
        </div>
      </div>

      {/* OT Systems */}
      <div className="card-noir p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-lg font-bold text-[var(--aegis-text-primary)]">OT/ICS Systems</h2>
          <label className="flex items-center gap-3 cursor-pointer">
            <span className="text-sm text-[var(--aegis-text-secondary)]">Manufacturing OT environment</span>
            <button
              type="button"
              onClick={() => updateField('hasOT', !form.hasOT)}
              className={`
                w-11 h-6 rounded-full transition-colors relative
                ${form.hasOT ? 'bg-[var(--aegis-accent)]' : 'bg-[var(--aegis-elevated)]'}
              `}
            >
              <div className={`
                w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform
                ${form.hasOT ? 'translate-x-5.5' : 'translate-x-0.5'}
              `} />
            </button>
          </label>
        </div>

        {form.hasOT && (
          <div className="space-y-4">
            {form.otSystems.map((ot, i) => (
              <div key={i} className="bg-[var(--aegis-elevated)] rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[var(--aegis-text-muted)]">OT System {i + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeOT(i)}
                    className="text-xs text-[var(--aegis-error)] hover:underline"
                  >
                    Remove
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    value={ot.name}
                    onChange={e => updateOT(i, 'name', e.target.value)}
                    placeholder="System name"
                    className="px-3 py-2 bg-[var(--aegis-surface)] border border-[var(--aegis-border)] rounded text-sm text-[var(--aegis-text-primary)] placeholder:text-[var(--aegis-text-muted)] focus:outline-none focus:border-[var(--aegis-accent)]"
                  />
                  <select
                    value={ot.type}
                    onChange={e => updateOT(i, 'type', e.target.value)}
                    className="px-3 py-2 bg-[var(--aegis-surface)] border border-[var(--aegis-border)] rounded text-sm text-[var(--aegis-text-primary)] focus:outline-none focus:border-[var(--aegis-accent)]"
                  >
                    {OT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <input
                    type="text"
                    value={ot.networkSegment}
                    onChange={e => updateOT(i, 'networkSegment', e.target.value)}
                    placeholder="Network segment"
                    className="px-3 py-2 bg-[var(--aegis-surface)] border border-[var(--aegis-border)] rounded text-sm text-[var(--aegis-text-primary)] placeholder:text-[var(--aegis-text-muted)] focus:outline-none focus:border-[var(--aegis-accent)]"
                  />
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={ot.handlesCUI}
                    onChange={e => updateOT(i, 'handlesCUI', e.target.checked)}
                    className="accent-[var(--aegis-accent)]"
                  />
                  <span className="text-sm text-[var(--aegis-text-secondary)]">Handles CUI</span>
                </label>
              </div>
            ))}
            <button
              type="button"
              onClick={addOTSystem}
              className="text-sm text-[var(--aegis-accent)] hover:text-[var(--aegis-accent-hover)] font-medium"
            >
              + Add OT System
            </button>
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="btn-premium flex items-center gap-2 py-3 px-8"
        >
          Continue to Assessment
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </form>
  );
}
