/**
 * CMMC Gap Analysis - Printable HTML Report Generator
 * Generates a standalone HTML document that can be printed to PDF.
 */

import { CONTROL_FAMILIES, FAMILY_NAMES } from './types';

const PRIORITY_COLORS = {
  CRITICAL: '#EF4444',
  HIGH: '#F97316',
  MEDIUM: '#F59E0B',
  LOW: '#71717A',
};

export function generatePrintableReport(result, gaps, otWarnings, poamDetails, profile) {
  const passing = result.sprsScore >= 80;
  const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const criticalGaps = gaps.filter(g => g.priority === 'CRITICAL');
  const highGaps = gaps.filter(g => g.priority === 'HIGH');
  const mediumGaps = gaps.filter(g => g.priority === 'MEDIUM');

  const familyRows = CONTROL_FAMILIES.map(f => {
    const s = result.familyScores[f];
    return `<tr>
      <td style="font-family:monospace;color:#0A75FF">${f}</td>
      <td>${FAMILY_NAMES[f]}</td>
      <td style="text-align:center">${s.met}</td>
      <td style="text-align:center">${s.total - s.met}</td>
      <td style="text-align:center">${s.total}</td>
      <td style="text-align:center;font-weight:bold;color:${s.percentage === 100 ? '#22C55E' : s.percentage >= 50 ? '#F59E0B' : '#EF4444'}">${s.percentage}%</td>
    </tr>`;
  }).join('\n');

  const gapRows = gaps.map(g => `<tr>
    <td><span style="display:inline-block;padding:2px 8px;border-radius:4px;font-size:11px;font-family:monospace;font-weight:600;color:${PRIORITY_COLORS[g.priority]};background:${PRIORITY_COLORS[g.priority]}15">${g.priority}</span></td>
    <td style="font-family:monospace;color:#0A75FF">${g.controlId}</td>
    <td>${g.title}</td>
    <td>${FAMILY_NAMES[g.family]}</td>
    <td style="font-size:12px">${g.estimatedEffort}</td>
  </tr>`).join('\n');

  const otSection = otWarnings.length > 0 ? `
    <h2>OT/Manufacturing Warnings</h2>
    <p>${otWarnings.length} controls with OT-specific considerations have gaps:</p>
    <table>
      <thead><tr><th>Control</th><th>Title</th><th>OT Consideration</th></tr></thead>
      <tbody>
        ${otWarnings.map(w => `<tr>
          <td style="font-family:monospace;color:#0A75FF">${w.controlId}</td>
          <td>${w.title}</td>
          <td style="font-size:12px">${w.otConsideration}</td>
        </tr>`).join('\n')}
      </tbody>
    </table>
  ` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CMMC Level 2 Gap Analysis - ${result.organizationName}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', -apple-system, sans-serif; color: #1a1a1a; max-width: 900px; margin: 0 auto; padding: 40px 32px; font-size: 14px; line-height: 1.6; }
    h1 { font-size: 24px; font-weight: 700; margin-bottom: 4px; }
    h2 { font-size: 18px; font-weight: 700; margin: 32px 0 12px; padding-bottom: 8px; border-bottom: 2px solid #e5e5e5; }
    h3 { font-size: 15px; font-weight: 600; margin: 20px 0 8px; }
    p { margin-bottom: 8px; }
    table { width: 100%; border-collapse: collapse; margin: 12px 0 20px; font-size: 13px; }
    th, td { padding: 8px 12px; text-align: left; border-bottom: 1px solid #e5e5e5; }
    th { font-weight: 600; background: #f5f5f5; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; }
    .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px; padding-bottom: 20px; border-bottom: 3px solid #0A75FF; }
    .score-box { text-align: center; padding: 20px 32px; border: 2px solid ${passing ? '#22C55E' : '#EF4444'}; border-radius: 8px; }
    .score-value { font-size: 48px; font-weight: 700; font-family: monospace; color: ${passing ? '#22C55E' : '#EF4444'}; }
    .score-label { font-size: 12px; color: #666; margin-top: 4px; }
    .score-status { font-size: 13px; font-weight: 600; color: ${passing ? '#22C55E' : '#EF4444'}; margin-top: 8px; }
    .stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 16px 0; }
    .stat { text-align: center; padding: 12px; border: 1px solid #e5e5e5; border-radius: 6px; }
    .stat-value { font-size: 24px; font-weight: 700; font-family: monospace; }
    .stat-label { font-size: 11px; color: #666; margin-top: 2px; }
    .poam-box { padding: 12px 16px; border-radius: 6px; margin: 12px 0; }
    .poam-pass { background: #f0fdf4; border: 1px solid #86efac; }
    .poam-fail { background: #fef2f2; border: 1px solid #fca5a5; }
    .footer { margin-top: 48px; padding-top: 16px; border-top: 1px solid #e5e5e5; font-size: 11px; color: #999; text-align: center; }
    @media print { body { padding: 20px; } .header { page-break-after: avoid; } table { page-break-inside: auto; } tr { page-break-inside: avoid; } }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <h1>CMMC Level 2 Gap Analysis Report</h1>
      <p style="color:#666">${result.organizationName} | ${result.systemName}</p>
      <p style="color:#999;font-size:12px">${date}</p>
    </div>
    <div class="score-box">
      <div class="score-value">${result.sprsScore}</div>
      <div class="score-label">SPRS Score / 110</div>
      <div class="score-status">${passing ? 'PASSING' : 'FAILING'}</div>
    </div>
  </div>

  <h2>Executive Summary</h2>
  <p>This report presents the CMMC Level 2 (NIST SP 800-171 Rev 2) gap analysis for <strong>${result.organizationName}</strong>, covering <strong>${result.systemName}</strong>.</p>
  <p>Of the 110 security controls assessed, <strong>${result.metCount}</strong> are fully implemented (MET), <strong>${result.partialCount}</strong> are partially implemented, <strong>${result.notMetCount}</strong> are not implemented, and <strong>${result.naCount}</strong> are not applicable.</p>
  <p>The calculated SPRS score is <strong>${result.sprsScore}</strong> out of a maximum 110. A score of 80 or above is required for conditional CMMC Level 2 authorization with a POA&M.</p>

  <div class="stat-grid">
    <div class="stat"><div class="stat-value" style="color:#22C55E">${result.metCount}</div><div class="stat-label">MET</div></div>
    <div class="stat"><div class="stat-value" style="color:#F59E0B">${result.partialCount}</div><div class="stat-label">PARTIAL</div></div>
    <div class="stat"><div class="stat-value" style="color:#EF4444">${result.notMetCount}</div><div class="stat-label">NOT MET</div></div>
    <div class="stat"><div class="stat-value" style="color:#999">${result.naCount}</div><div class="stat-label">N/A</div></div>
  </div>

  <h3>POA&M Eligibility</h3>
  ${poamDetails.eligible
    ? '<div class="poam-box poam-pass">Eligible for conditional CMMC Level 2 authorization with Plan of Action &amp; Milestones.</div>'
    : `<div class="poam-box poam-fail">
        <strong>Not eligible for POA&M conditional authorization.</strong>
        <ul style="margin-top:8px;padding-left:20px">
          ${poamDetails.reasons.map(r => `<li style="font-size:13px">${r}</li>`).join('')}
        </ul>
      </div>`
  }

  <h2>Family Breakdown</h2>
  <table>
    <thead>
      <tr><th>ID</th><th>Family</th><th style="text-align:center">Met</th><th style="text-align:center">Gaps</th><th style="text-align:center">Total</th><th style="text-align:center">Score</th></tr>
    </thead>
    <tbody>${familyRows}</tbody>
  </table>

  <h2>Gap Analysis (${gaps.length} gaps)</h2>
  ${criticalGaps.length > 0 ? `<p style="color:#EF4444;font-weight:600">${criticalGaps.length} CRITICAL gaps require immediate attention (high-weight controls).</p>` : ''}
  ${highGaps.length > 0 ? `<p style="color:#F97316;font-weight:600">${highGaps.length} HIGH priority gaps in core security families (AC/IA/SC).</p>` : ''}
  ${mediumGaps.length > 0 ? `<p>${mediumGaps.length} MEDIUM priority gaps across remaining families.</p>` : ''}

  ${gaps.length > 0 ? `
  <table>
    <thead><tr><th>Priority</th><th>Control</th><th>Title</th><th>Family</th><th>Effort</th></tr></thead>
    <tbody>${gapRows}</tbody>
  </table>
  ` : '<p style="color:#22C55E;font-weight:600">No gaps identified. All controls are MET or N/A.</p>'}

  ${otSection}

  <h2>Next Steps</h2>
  <ol style="padding-left:20px;margin-top:8px">
    ${criticalGaps.length > 0 ? '<li>Address CRITICAL gaps immediately: these high-weight controls cannot be placed on POA&M and will block certification.</li>' : ''}
    ${highGaps.length > 0 ? '<li>Remediate HIGH priority gaps in access control, identification/authentication, and system communications.</li>' : ''}
    <li>Develop POA&M with milestones and target dates for remaining gaps.</li>
    <li>Engage with your MEP center or C3PAO to schedule formal assessment.</li>
    <li>Implement continuous monitoring to maintain compliance posture.</li>
  </ol>

  <div class="footer">
    Generated by AEGIS CMMC Assessment Engine | AEGIS AI Cooperative, Mesa, Arizona<br>
    This report is for informational purposes and does not constitute a formal CMMC assessment.
    Contact a C3PAO for official certification.
  </div>
</body>
</html>`;
}
