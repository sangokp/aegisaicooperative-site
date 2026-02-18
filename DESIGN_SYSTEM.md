# AEGIS OS DESIGN SYSTEM // v3.0.4
## Codename: Unified Convergence

This manifest governs the visual identity of AEGIS OS. All departments MUST adhere to these standards to eliminate user eye fatigue and maintain technical authority.

### 1. The Singular Trust Signal
- **Primary Accent**: `#0A75FF` (AEGIS Blue)
- **Usage**: Buttons, active states, key data metrics, brand icon.
- **Prohibition**: DO NOT use legacy Rust (#c45d3a) or Coral (#FF7E5F).

### 2. Surface Architecture (Noir)
- **Void (Background)**: `#020203`
- **Engine (Elevated)**: `#0A0A0C`
- **Charcoal (Cards)**: `#18181B`
- **Borders**: `rgba(255, 255, 255, 0.08)` (Blueprint-style)

### 3. Typography Hierarchy
- **Display (Visual Authority)**: `Syne` (font-weight: 700+)
- **System (Technical Data)**: `JetBrains Mono` (font-weight: 400-600)
- **UI (Functional)**: `Inter` or `Syne` (Standardized across ecosystem)

### 4. Components (The Forge)
Use components from `aegis-component-forge` skill:
- `BlueprintPanel`: The standard architectural container.
- `AegisIcon`: The official geometric "A" vector.
- `SystemStatus`: Standardized health indicators.

### 5. Kinetic Standards
- Use `framer-motion`.
- Default ease: `[0.16, 1, 0.3, 1]` (High-gravity, smooth).
- Animations should be functional (e.g., status pulses), not decorative.

**Ship it.**
