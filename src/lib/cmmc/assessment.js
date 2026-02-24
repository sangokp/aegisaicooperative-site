/**
 * CMMC Level 2 / NIST SP 800-171 Rev 2 - Assessment Engine
 * Auto-generated from ~/.claude/tools/compliance/cmmc/assessment.ts
 */

import { CONTROL_FAMILIES, FAMILY_NAMES } from './types';
import { ALL_CONTROLS, getControl, getControlsByFamily, getOTRelevantControls } from './controls';

const HIGH_PRIORITY_FAMILIES = ["AC", "IA", "SC"];
const SPRS_MAX = 110;
const SPRS_FLOOR = -203;

function scoreControl(status, weight) {
  switch (status) {
    case "MET":
      return { earned: weight, deducted: 0, excluded: false };
    case "PARTIAL":
      return { earned: weight / 2, deducted: weight / 2, excluded: false };
    case "NOT_MET":
      return { earned: 0, deducted: weight, excluded: false };
    case "NA":
      return { earned: 0, deducted: 0, excluded: true };
    default:
      return { earned: 0, deducted: weight, excluded: false };
  }
}

function calculateSPRS(assessments) {
  let totalDeducted = 0;
  for (const a of assessments) {
    const result = scoreControl(a.status, a.weight);
    if (!result.excluded) {
      totalDeducted += result.deducted;
    }
  }
  const raw = SPRS_MAX - totalDeducted;
  return { score: Math.max(SPRS_FLOOR, raw), maxPossible: SPRS_MAX };
}

function getGapPriority(control) {
  if (control.weight > 1) return "CRITICAL";
  if (HIGH_PRIORITY_FAMILIES.includes(control.family)) return "HIGH";
  return "MEDIUM";
}

function estimateEffort(control) {
  if (control.weight > 3) return "High - requires MFA deployment or equivalent infrastructure change";
  if (control.weight > 1) return "High - requires cryptographic infrastructure changes";
  if (HIGH_PRIORITY_FAMILIES.includes(control.family)) return "Medium - access control or authentication configuration";
  return "Standard - policy, process, or configuration update";
}

function checkPOAMEligibility(sprsScore, assessments) {
  const reasons = [];
  if (sprsScore < 80) {
    reasons.push("SPRS score " + sprsScore + " is below the 80-point threshold");
  }
  const highWeightFails = assessments.filter(
    a => a.weight > 1 && a.status !== "MET" && a.status !== "NA"
  );
  for (const fail of highWeightFails) {
    reasons.push(
      "Control " + fail.controlId + " (weight " + fail.weight + ") is " + fail.status + " - high-weight controls cannot be on POA&M"
    );
  }
  return { eligible: reasons.length === 0, reasons };
}

function buildFamilyScores(assessments) {
  const scores = {};
  for (const family of CONTROL_FAMILIES) {
    const familyAssessments = assessments.filter(a => a.family === family);
    const applicable = familyAssessments.filter(a => a.status !== "NA");
    const met = familyAssessments.filter(a => a.status === "MET").length;
    const total = applicable.length;
    scores[family] = {
      met,
      total,
      percentage: total > 0 ? Math.round((met / total) * 100) : 100,
    };
  }
  return scores;
}

export function assessOrganization(profile) {
  const controlInputMap = new Map(profile.controls.map(c => [c.controlId, c]));
  const controlAssessments = [];
  const scoringInputs = [];

  let metCount = 0;
  let notMetCount = 0;
  let partialCount = 0;
  let naCount = 0;

  for (const control of ALL_CONTROLS) {
    const input = controlInputMap.get(control.id);
    const status = input?.status ?? "NOT_MET";

    controlAssessments.push({
      controlId: control.id,
      status,
      evidence: input?.evidence ?? "",
      notes: input?.notes ?? (input ? "" : "No assessment provided - defaulted to NOT_MET"),
      assessedBy: "AEGIS CMMC Assessment Engine",
      assessedAt: new Date().toISOString(),
    });

    scoringInputs.push({
      controlId: control.id,
      status,
      weight: control.weight,
      family: control.family,
    });

    switch (status) {
      case "MET": metCount++; break;
      case "NOT_MET": notMetCount++; break;
      case "PARTIAL": partialCount++; break;
      case "NA": naCount++; break;
    }
  }

  const { score: sprsScore } = calculateSPRS(scoringInputs);
  const { eligible: poamEligible } = checkPOAMEligibility(sprsScore, scoringInputs);
  const familyScores = buildFamilyScores(
    scoringInputs.map(s => ({ controlId: s.controlId, status: s.status, family: s.family }))
  );

  return {
    organizationName: profile.name,
    systemName: profile.systemName,
    assessmentDate: new Date().toISOString(),
    assessorName: "AEGIS CMMC Assessment Engine",
    controls: controlAssessments,
    sprsScore,
    totalControls: ALL_CONTROLS.length,
    metCount,
    notMetCount,
    partialCount,
    naCount,
    poamEligible,
    familyScores,
  };
}

export function extractGaps(result) {
  const gaps = [];
  for (const ca of result.controls) {
    if (ca.status === "NOT_MET" || ca.status === "PARTIAL") {
      const control = getControl(ca.controlId);
      if (!control) continue;
      gaps.push({
        controlId: control.id,
        title: control.title,
        family: control.family,
        priority: getGapPriority(control),
        remediation: control.implementationGuidance,
        estimatedEffort: estimateEffort(control),
      });
    }
  }
  const priorityOrder = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };
  gaps.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  return gaps;
}

export function extractOTWarnings(profile, result) {
  if (!profile.otSystems || profile.otSystems.length === 0) return [];
  const statusMap = new Map(result.controls.map(c => [c.controlId, c.status]));
  const otControls = getOTRelevantControls();
  const gaps = [];
  for (const control of otControls) {
    const status = statusMap.get(control.id);
    if (status === "NOT_MET" || status === "PARTIAL") {
      gaps.push({
        controlId: control.id,
        title: control.title,
        otConsideration: control.otConsiderations || "",
      });
    }
  }
  return gaps;
}

export function getPOAMDetails(result) {
  const scoringInputs = result.controls.map(ca => {
    const control = getControl(ca.controlId);
    return {
      controlId: ca.controlId,
      status: ca.status,
      weight: control?.weight ?? 1,
    };
  });
  return checkPOAMEligibility(result.sprsScore, scoringInputs);
}

/**
 * Calculate SPRS score from a map of controlId -> status.
 * Used for live score updates during assessment.
 */
export function calculateLiveSPRS(controlStatuses) {
  const inputs = ALL_CONTROLS.map(c => ({
    status: controlStatuses[c.id] || "NOT_MET",
    weight: c.weight,
  }));
  return calculateSPRS(inputs);
}

export { SPRS_MAX, SPRS_FLOOR };
