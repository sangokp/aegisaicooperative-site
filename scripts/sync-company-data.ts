#!/usr/bin/env bun
/**
 * Company.md → JSON Data Sync Script
 *
 * This script reads Company.md (the source of truth) and generates
 * structured JSON data files for the React frontend.
 *
 * Pipeline: Company.md → sync-company-data.ts → /src/data/*.json → React components
 *
 * Usage:
 *   bun scripts/sync-company-data.ts
 *   bun scripts/sync-company-data.ts --dry-run    # Preview changes without writing
 *   bun scripts/sync-company-data.ts --verbose    # Show detailed parsing info
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';

// Configuration
const COMPANY_MD_PATH = join(process.env.HOME || '~', '.claude/skills/CORE/Company.md');
const DATA_DIR = join(dirname(import.meta.path), '../src/data');

interface CompanyData {
  hero: {
    headline: string;
    subheadline: string;
    cta: {
      primary: { text: string; link: string };
      secondary: { text: string; link: string };
    };
  };
  proofStrip: Array<{ icon: string; label: string }>;
  grantServices: {
    headline: string;
    subheadline: string;
    services: Array<{
      icon: string;
      title: string;
      description: string;
      features: string[];
    }>;
  };
  differentiators: {
    headline: string;
    items: Array<{ title: string; description: string }>;
  };
  cta: {
    headline: string;
    subheadline: string;
    button: { text: string; link: string };
  };
}

interface TeamMember {
  name: string;
  role: string;
  focus: string;
  bio: string;
  linkedin: string;
}

interface TeamData {
  headline: string;
  subheadline: string;
  members: TeamMember[];
  culture: {
    headline: string;
    values: Array<{ title: string; description: string }>;
  };
}

// Parse flags
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const VERBOSE = args.includes('--verbose');

function log(message: string, verbose = false) {
  if (!verbose || VERBOSE) {
    console.log(message);
  }
}

function extractSection(content: string, sectionName: string): string {
  // Find section by ## heading
  const sectionRegex = new RegExp(`## ${sectionName}\\n([\\s\\S]*?)(?=\\n## |$)`, 'i');
  const match = content.match(sectionRegex);
  return match ? match[1].trim() : '';
}

function extractTableRows(tableContent: string): Array<Record<string, string>> {
  const lines = tableContent.split('\n').filter(line => line.trim().startsWith('|'));
  if (lines.length < 2) return [];

  // Get headers from first row
  const headers = lines[0].split('|').filter(h => h.trim()).map(h => h.trim().toLowerCase());

  // Skip separator row (second row with dashes)
  const dataRows = lines.slice(2);

  return dataRows.map(row => {
    const cells = row.split('|').filter(c => c.trim()).map(c => c.trim());
    const record: Record<string, string> = {};
    headers.forEach((header, i) => {
      record[header] = cells[i] || '';
    });
    return record;
  });
}

function parseCompanyMd(content: string): { company: Partial<CompanyData>; team: Partial<TeamData> } {
  log('Parsing Company.md...', true);

  const company: Partial<CompanyData> = {};
  const team: Partial<TeamData> = {};

  // Extract Mission section for hero content
  const missionSection = extractSection(content, 'Mission');
  if (missionSection) {
    log('  Found Mission section', true);
    // Mission content becomes the subheadline basis
  }

  // Extract Leadership section for team
  const leadershipSection = extractSection(content, 'Leadership');
  if (leadershipSection) {
    log('  Found Leadership section', true);
    const rows = extractTableRows(leadershipSection);
    team.members = rows.map(row => ({
      name: row.name || '',
      role: row.role || '',
      focus: '', // Not in current table
      bio: '', // Not in current table
      linkedin: '' // Not in current table
    })).filter(m => m.name && m.name !== '-');
  }

  // Extract Core Thesis for differentiators
  const thesisSection = extractSection(content, 'Core Thesis');
  if (thesisSection) {
    log('  Found Core Thesis section', true);
  }

  // Extract Neural-Corporate Architecture for proof strip
  const neuralSection = extractSection(content, 'Neural-Corporate Architecture');
  if (neuralSection) {
    log('  Found Neural-Corporate Architecture section', true);
  }

  return { company, team };
}

function mergeWithExisting<T>(existingPath: string, updates: Partial<T>): T {
  let existing: T = {} as T;

  if (existsSync(existingPath)) {
    try {
      existing = JSON.parse(readFileSync(existingPath, 'utf-8'));
      log(`  Loaded existing: ${existingPath}`, true);
    } catch (e) {
      log(`  Warning: Could not parse ${existingPath}, starting fresh`, true);
    }
  }

  // Deep merge updates into existing
  return deepMerge(existing, updates) as T;
}

function deepMerge(target: any, source: any): any {
  if (!source) return target;
  if (!target) return source;

  const result = { ...target };

  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key], source[key]);
    } else if (source[key] !== undefined && source[key] !== '') {
      result[key] = source[key];
    }
  }

  return result;
}

function writeJsonFile(filePath: string, data: any) {
  const content = JSON.stringify(data, null, 2) + '\n';

  if (DRY_RUN) {
    log(`[DRY RUN] Would write to: ${filePath}`);
    log(`  Content preview: ${content.substring(0, 200)}...`);
  } else {
    writeFileSync(filePath, content, 'utf-8');
    log(`✓ Written: ${filePath}`);
  }
}

async function main() {
  console.log('═══════════════════════════════════════════════════════════');
  console.log('  Company.md → JSON Data Sync');
  console.log('═══════════════════════════════════════════════════════════');

  if (DRY_RUN) {
    console.log('  Mode: DRY RUN (no files will be modified)\n');
  }

  // Check if Company.md exists
  if (!existsSync(COMPANY_MD_PATH)) {
    console.error(`❌ Company.md not found at: ${COMPANY_MD_PATH}`);
    process.exit(1);
  }

  log(`Reading: ${COMPANY_MD_PATH}`);
  const companyMdContent = readFileSync(COMPANY_MD_PATH, 'utf-8');

  // Parse Company.md
  const parsed = parseCompanyMd(companyMdContent);

  // Merge with existing JSON files (preserves manual edits)
  const companyJsonPath = join(DATA_DIR, 'company.json');
  const teamJsonPath = join(DATA_DIR, 'team.json');

  log('\nMerging with existing data files...');

  // For company.json - merge parsed data
  if (Object.keys(parsed.company).length > 0) {
    const mergedCompany = mergeWithExisting<CompanyData>(companyJsonPath, parsed.company);
    writeJsonFile(companyJsonPath, mergedCompany);
  } else {
    log('  No company updates from Company.md (using existing company.json)');
  }

  // For team.json - update members if parsed
  if (parsed.team.members && parsed.team.members.length > 0) {
    const existingTeam = mergeWithExisting<TeamData>(teamJsonPath, {});

    // Update member names/roles from Company.md, preserve other fields
    const updatedMembers = parsed.team.members.map(parsedMember => {
      const existing = existingTeam.members?.find(m =>
        m.name.toLowerCase().includes(parsedMember.name.toLowerCase().split(' ')[0])
      );
      return existing ? { ...existing, ...parsedMember, bio: existing.bio, linkedin: existing.linkedin } : parsedMember;
    });

    const mergedTeam: TeamData = {
      ...existingTeam,
      members: updatedMembers.length > 0 ? updatedMembers : existingTeam.members || []
    };

    writeJsonFile(teamJsonPath, mergedTeam);
  } else {
    log('  No team updates from Company.md (using existing team.json)');
  }

  console.log('\n═══════════════════════════════════════════════════════════');
  console.log('  Sync complete!');
  console.log('═══════════════════════════════════════════════════════════');

  if (!DRY_RUN) {
    console.log('\nNext steps:');
    console.log('  1. Review changes: git diff src/data/');
    console.log('  2. Test locally: bun run dev');
    console.log('  3. Commit if good: git add src/data/ && git commit -m "chore: sync data from Company.md"');
  }
}

main().catch(console.error);
