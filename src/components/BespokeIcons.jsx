import React from 'react';

/**
 * AEGIS PRECISION ARTIFACTS v2.0
 * Style: Technical Engineering / Blueprint Noir
 * 8-Figure Standard: Precision lines, geometric weight, and surgical gold accents.
 */

const SharedDefs = () => (
  <svg style={{ width: 0, height: 0, position: 'absolute' }}>
    <defs>
      <linearGradient id="gold-accent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#A67C00', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </svg>
);

export const ArtifactIntelligence = ({ className = "w-8 h-8" }) => (
  <div className={className}>
    <SharedDefs />
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <rect x="2" y="2" width="20" height="20" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
      <path d="M12 4V20M4 12H20" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
      <path d="M7 7L17 17M17 7L7 17" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
      <circle cx="12" cy="12" r="4" stroke="url(#gold-accent)" strokeWidth="1.5" />
      <rect x="10.5" y="10.5" width="3" height="3" fill="white" />
    </svg>
  </div>
);

export const ArtifactInfrastructure = ({ className = "w-8 h-8" }) => (
  <div className={className}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <path d="M12 2L20 6V18L12 22L4 18V6L12 2Z" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      <path d="M12 2V22M20 6L4 18M4 6L20 18" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
      <path d="M12 6L16 8V16L12 18L8 16V8L12 6Z" fill="url(#gold-accent)" fillOpacity="0.8" />
    </svg>
  </div>
);

export const ArtifactConnectivity = ({ className = "w-8 h-8" }) => (
  <div className={className}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
      <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
      <path d="M12 2V22M2 12H22" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
      <rect x="11" y="11" width="2" height="2" fill="url(#gold-accent)" />
      <path d="M12 7L14 12L12 17L10 12L12 7Z" fill="white" fillOpacity="0.2" />
    </svg>
  </div>
);

export const ArtifactSpeed = ({ className = "w-8 h-8" }) => (
  <div className={className}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <path d="M4 14H20M4 10H20M4 6H20M4 18H20" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
      <path d="M13 3L10 11H15L11 21L14 13H9L13 3Z" fill="url(#gold-accent)" stroke="white" strokeWidth="0.5" />
    </svg>
  </div>
);

export const ArtifactEnterprise = ({ className = "w-8 h-8" }) => (
  <div className={className}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <path d="M3 21H21" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      <rect x="6" y="4" width="12" height="17" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
      <rect x="9" y="7" width="6" height="3" stroke="url(#gold-accent)" strokeWidth="1" />
      <path d="M9 13H15M9 16H15" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
    </svg>
  </div>
);

export const ArtifactAlliance = ({ className = "w-8 h-8" }) => (
  <div className={className}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <circle cx="8" cy="8" r="4" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="16" cy="16" r="4" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      <path d="M11 11L13 13" stroke="url(#gold-accent)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1" fill="white" />
    </svg>
  </div>
);

export const ArtifactMission = ({ className = "w-8 h-8" }) => (
  <div className={className}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <rect x="3" y="3" width="18" height="18" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
      <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
      <circle cx="12" cy="12" r="2" fill="url(#gold-accent)" />
      <path d="M12 4V8M12 16V20M4 12H8M16 12H20" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
    </svg>
  </div>
);

export const ArtifactTransparency = ({ className = "w-8 h-8" }) => (
  <div className={className}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="12" cy="12" r="4" stroke="url(#gold-accent)" strokeWidth="1" />
      <path d="M12 10V14M10 12H14" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" />
    </svg>
  </div>
);

export const ArtifactDevelopment = ({ className = "w-8 h-8" }) => (
  <div className={className}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <path d="M8 17L3 12L8 7" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
      <path d="M16 7L21 12L16 17" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
      <path d="M13 4L11 20" stroke="url(#gold-accent)" strokeWidth="1.5" />
    </svg>
  </div>
);

export const ArtifactInnovation = ({ className = "w-8 h-8" }) => (
  <div className={className}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <path d="M12 3V5M12 19V21M21 12H19M5 12H3" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
      <path d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7Z" stroke="url(#gold-accent)" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.5" fill="white" />
    </svg>
  </div>
);

export const ArtifactNetwork = ({ className = "w-8 h-8" }) => (
  <div className={className}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <rect x="4" y="4" width="16" height="16" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
      <circle cx="19" cy="5" r="1.5" fill="url(#gold-accent)" />
      <circle cx="5" cy="19" r="1.5" fill="url(#gold-accent)" />
      <circle cx="5" cy="5" r="1.5" fill="white" fillOpacity="0.3" />
      <circle cx="19" cy="19" r="1.5" fill="white" fillOpacity="0.3" />
      <path d="M12 9V6M12 15V18M15 12H18M9 12H6" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
    </svg>
  </div>
);

export const ArtifactCommunication = ({ className = "w-8 h-8" }) => (
  <div className={className}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <path d="M4 6H20V18H4V6Z" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      <path d="M4 6L12 13L20 6" stroke="url(#gold-accent)" strokeWidth="1" />
      <path d="M12 13V20" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
    </svg>
  </div>
);

export const ArtifactTime = ({ className = "w-8 h-8" }) => (
  <div className={className}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
      <path d="M12 6V12L16 14" stroke="url(#gold-accent)" strokeWidth="1.5" strokeLinecap="square" />
      <path d="M12 2V4M12 20V22M2 12H4M20 12H22" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
    </svg>
  </div>
);

export const ArtifactSecurity = ({ className = "w-8 h-8" }) => (
  <div className={className}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <path d="M12 2L4 5V11C4 16.5 12 21 12 21C12 21 20 16.5 20 11V5L12 2Z" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="12" cy="11" r="3" stroke="url(#gold-accent)" strokeWidth="1" />
      <path d="M12 14V17" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
    </svg>
  </div>
);

export const ArtifactJustice = ({ className = "w-8 h-8" }) => (
  <div className={className}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <path d="M12 3V21M3 7L12 5L21 7" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      <path d="M6 12C6 12 6 16 12 16C18 16 18 12 18 12" stroke="url(#gold-accent)" strokeWidth="1.5" />
      <path d="M12 5V3" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" />
    </svg>
  </div>
);

export const ArtifactWarning = ({ className = "w-8 h-8" }) => (
  <div className={className}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
      <path d="M12 3L2 21H22L12 3Z" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
      <rect x="11.5" y="10" width="1" height="5" fill="url(#gold-accent)" />
      <rect x="11.5" y="17" width="1" height="1" fill="white" />
    </svg>
  </div>
);