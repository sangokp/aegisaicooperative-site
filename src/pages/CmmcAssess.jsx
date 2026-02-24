import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OrgProfileForm from '../components/cmmc/OrgProfileForm';
import ControlAssessment from '../components/cmmc/ControlAssessment';
import ResultsDashboard from '../components/cmmc/ResultsDashboard';
import { assessOrganization, extractGaps, extractOTWarnings, getPOAMDetails } from '../lib/cmmc/assessment';
import { ALL_CONTROLS } from '../lib/cmmc/controls';
import { CONTROL_FAMILIES } from '../lib/cmmc/types';

const STEPS = ['Organization Profile', 'Control Assessment', 'Results'];

export default function CmmcAssess() {
  const [step, setStep] = useState(0);
  const [orgProfile, setOrgProfile] = useState({
    name: '',
    systemName: '',
    systemDescription: '',
    systemBoundary: '',
    cuiTypes: [],
    networkDescription: '',
    personnelCount: 0,
    locations: [''],
    otSystems: [],
    roles: [{ title: 'ISSO', name: '', responsibilities: ['Security oversight'] }],
    controls: [],
  });
  const [controlStatuses, setControlStatuses] = useState({});
  const [assessmentResult, setAssessmentResult] = useState(null);

  const handleProfileComplete = useCallback((profile) => {
    setOrgProfile(prev => ({ ...prev, ...profile }));
    setStep(1);
    window.scrollTo(0, 0);
  }, []);

  const handleAssessmentComplete = useCallback(() => {
    const controls = ALL_CONTROLS.map(c => ({
      controlId: c.id,
      status: controlStatuses[c.id] || 'NOT_MET',
      implementation: '',
      evidence: '',
    }));

    const profile = { ...orgProfile, controls };
    const result = assessOrganization(profile);
    const gaps = extractGaps(result);
    const otWarnings = extractOTWarnings(profile, result);
    const poamDetails = getPOAMDetails(result);

    setAssessmentResult({ result, gaps, otWarnings, poamDetails, profile });
    setStep(2);
    window.scrollTo(0, 0);
  }, [orgProfile, controlStatuses]);

  const handleReset = useCallback(() => {
    setStep(0);
    setOrgProfile({
      name: '',
      systemName: '',
      systemDescription: '',
      systemBoundary: '',
      cuiTypes: [],
      networkDescription: '',
      personnelCount: 0,
      locations: [''],
      otSystems: [],
      roles: [{ title: 'ISSO', name: '', responsibilities: ['Security oversight'] }],
      controls: [],
    });
    setControlStatuses({});
    setAssessmentResult(null);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[var(--aegis-void)] min-h-screen">
      {/* Progress bar */}
      <div className="sticky top-16 z-40 bg-[var(--aegis-engine)] border-b border-[var(--aegis-border)]">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2">
            {STEPS.map((label, i) => (
              <div key={label} className="flex items-center gap-2 flex-1">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-mono font-medium shrink-0
                  ${i < step ? 'bg-[var(--aegis-accent)] text-white' : ''}
                  ${i === step ? 'bg-[var(--aegis-accent)] text-white ring-2 ring-[var(--aegis-accent-glow)]' : ''}
                  ${i > step ? 'bg-[var(--aegis-elevated)] text-[var(--aegis-text-muted)]' : ''}
                `}>
                  {i < step ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <span className={`text-sm font-medium hidden sm:block ${
                  i <= step ? 'text-[var(--aegis-text-primary)]' : 'text-[var(--aegis-text-muted)]'
                }`}>
                  {label}
                </span>
                {i < STEPS.length - 1 && (
                  <div className={`h-px flex-1 ${
                    i < step ? 'bg-[var(--aegis-accent)]' : 'bg-[var(--aegis-border)]'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <OrgProfileForm
                profile={orgProfile}
                onComplete={handleProfileComplete}
              />
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="assessment"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ControlAssessment
                controlStatuses={controlStatuses}
                setControlStatuses={setControlStatuses}
                onComplete={handleAssessmentComplete}
                onBack={() => { setStep(0); window.scrollTo(0, 0); }}
              />
            </motion.div>
          )}

          {step === 2 && assessmentResult && (
            <motion.div
              key="results"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ResultsDashboard
                result={assessmentResult.result}
                gaps={assessmentResult.gaps}
                otWarnings={assessmentResult.otWarnings}
                poamDetails={assessmentResult.poamDetails}
                profile={assessmentResult.profile}
                onReset={handleReset}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
