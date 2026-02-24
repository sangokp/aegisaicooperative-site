/**
 * CMMC Level 2 / NIST SP 800-171 Rev 2 - Control Database
 * Auto-generated from ~/.claude/tools/compliance/cmmc/controls.ts
 * All 110 security controls across 14 families.
 */

export const ALL_CONTROLS = [
  {
    "id": "3.1.1",
    "family": "AC",
    "title": "Authorized Access Control",
    "description": "Limit system access to authorized users, processes acting on behalf of authorized users, and devices (including other systems).",
    "assessmentObjectives": [
      "Authorized users are identified",
      "Processes acting on behalf of authorized users are identified",
      "Devices (and other systems) authorized to connect are identified",
      "System access is limited to authorized users",
      "System access is limited to processes acting on behalf of authorized users",
      "System access is limited to authorized devices (including other systems)"
    ],
    "implementationGuidance": "Implement access control lists, role-based access control, or attribute-based access control. Maintain current list of authorized users with access privileges. Review access authorizations at least annually.",
    "otConsiderations": "For SCADA/ICS environments, ensure PLCs and HMIs have access controls. Legacy OT devices may lack built-in authentication; compensating controls (network segmentation, physical access) may be required.",
    "evidenceExamples": [
      "Access control policy",
      "User account list with roles",
      "Active Directory group membership exports",
      "Network access control configurations"
    ],
    "weight": 1
  },
  {
    "id": "3.1.2",
    "family": "AC",
    "title": "Transaction & Function Control",
    "description": "Limit system access to the types of transactions and functions that authorized users are permitted to execute.",
    "assessmentObjectives": [
      "Types of transactions and functions that authorized users are permitted to execute are defined",
      "System access is limited to the defined types of transactions and functions for authorized users"
    ],
    "implementationGuidance": "Implement role-based access control. Define permitted transactions per role. Use principle of least privilege. Restrict administrative functions to designated accounts.",
    "otConsiderations": "Restrict operator actions on HMI/SCADA to role-specific functions (e.g., operators can monitor but not change setpoints without supervisor approval).",
    "evidenceExamples": [
      "RBAC matrix",
      "Application permission configurations",
      "Privileged access management tool settings"
    ],
    "weight": 1
  },
  {
    "id": "3.1.3",
    "family": "AC",
    "title": "CUI Flow Control",
    "description": "Control the flow of CUI in accordance with approved authorizations.",
    "assessmentObjectives": [
      "Information flow control policies are defined",
      "Methods and enforcement mechanisms for controlling the flow of CUI are defined",
      "Approved authorizations for controlling the flow of CUI are identified",
      "The flow of CUI is controlled in accordance with approved authorizations"
    ],
    "implementationGuidance": "Implement data loss prevention (DLP). Configure firewalls and access controls to restrict CUI movement. Use encryption for CUI in transit. Label and track CUI data flows.",
    "otConsiderations": "Map CUI flow through manufacturing execution systems (MES). Ensure CUI on engineering workstations does not flow to unprotected OT network segments.",
    "evidenceExamples": [
      "Data flow diagrams showing CUI paths",
      "DLP policy configurations",
      "Firewall rules restricting CUI movement",
      "Network segmentation documentation"
    ],
    "weight": 1
  },
  {
    "id": "3.1.4",
    "family": "AC",
    "title": "Separation of Duties",
    "description": "Separate the duties of individuals to reduce the risk of malevolent activity without collusion.",
    "assessmentObjectives": [
      "The duties of individuals requiring separation are defined",
      "Responsibilities for duties that require separation are assigned to separate individuals",
      "Access privileges that enable individuals to exercise the duties that require separation are granted to separate individuals"
    ],
    "implementationGuidance": "Identify critical functions requiring separation. Assign different individuals to security audit, administration, and operations. Implement dual-control for sensitive operations.",
    "otConsiderations": "Separate OT engineering (PLC programming) from OT operations (running the line). Separate IT admin from OT admin roles.",
    "evidenceExamples": [
      "Separation of duties matrix",
      "Role assignments showing separation",
      "Dual authorization procedures"
    ],
    "weight": 1
  },
  {
    "id": "3.1.5",
    "family": "AC",
    "title": "Least Privilege",
    "description": "Employ the principle of least privilege, including for specific security functions and privileged accounts.",
    "assessmentObjectives": [
      "Privileged accounts are identified",
      "Access to privileged accounts is authorized in accordance with the principle of least privilege",
      "Security functions are identified",
      "Access to security functions is authorized in accordance with the principle of least privilege"
    ],
    "implementationGuidance": "Create separate admin and user accounts. Restrict privileged access to minimum necessary. Implement privileged access management (PAM). Review privileges regularly.",
    "otConsiderations": "Limit PLC programming access to authorized engineers. Default HMI accounts should be read-only. Remove default/shared vendor accounts from OT devices.",
    "evidenceExamples": [
      "Admin account inventory",
      "PAM tool configurations",
      "Privilege review records",
      "Least privilege policy"
    ],
    "weight": 1
  },
  {
    "id": "3.1.6",
    "family": "AC",
    "title": "Non-Privileged Account Use",
    "description": "Use non-privileged accounts or roles when accessing nonsecurity functions.",
    "assessmentObjectives": [
      "Nonsecurity functions are identified",
      "Users are required to use non-privileged accounts or roles when accessing nonsecurity functions"
    ],
    "implementationGuidance": "Require administrators to use standard user accounts for email, web browsing, and other non-admin tasks. Implement separate accounts for privileged vs. non-privileged use.",
    "otConsiderations": "Engineering workstations used for both PLC programming and general tasks should have separate accounts for each function.",
    "evidenceExamples": [
      "Separate admin/user account documentation",
      "Policy requiring non-privileged account use",
      "Login records showing dual-account usage"
    ],
    "weight": 1
  },
  {
    "id": "3.1.7",
    "family": "AC",
    "title": "Privileged Function Restriction",
    "description": "Prevent non-privileged users from executing privileged functions and capture the execution of such functions in audit logs.",
    "assessmentObjectives": [
      "Privileged functions are defined",
      "Non-privileged users are prevented from executing privileged functions",
      "The execution of privileged functions is captured in audit logs"
    ],
    "implementationGuidance": "Use OS controls to restrict privilege escalation. Log all administrative actions. Implement application whitelisting for privileged operations.",
    "otConsiderations": "Log all configuration changes to PLCs, RTUs, and SCADA servers. Prevent operator-level accounts from modifying OT device firmware.",
    "evidenceExamples": [
      "Audit logs showing privileged function execution",
      "Group policy objects restricting privileges",
      "Application control configurations"
    ],
    "weight": 1
  },
  {
    "id": "3.1.8",
    "family": "AC",
    "title": "Unsuccessful Logon Attempts",
    "description": "Limit unsuccessful logon attempts.",
    "assessmentObjectives": [
      "The means of limiting unsuccessful logon attempts is defined",
      "Unsuccessful logon attempts are limited"
    ],
    "implementationGuidance": "Configure account lockout after a defined number of failed attempts (e.g., 3-5). Set lockout duration. Alert on repeated failures. Implement progressive delays.",
    "otConsiderations": "Account lockout on HMI/SCADA systems must balance security with operational availability. Consider alert-only mode for safety-critical OT systems where lockout could cause production stoppage.",
    "evidenceExamples": [
      "Account lockout policy settings",
      "Active Directory lockout configurations",
      "Failed logon attempt logs"
    ],
    "weight": 1
  },
  {
    "id": "3.1.9",
    "family": "AC",
    "title": "Privacy & Security Notices",
    "description": "Provide privacy and security notices consistent with applicable CUI rules.",
    "assessmentObjectives": [
      "Privacy and security notices required by CUI rules are identified",
      "Privacy and security notices are displayed"
    ],
    "implementationGuidance": "Display system use notification/banner at login. Include warnings about monitoring, unauthorized use, and CUI handling requirements.",
    "otConsiderations": "Display login banners on SCADA workstations and engineering terminals. Physical signage in manufacturing areas handling CUI.",
    "evidenceExamples": [
      "Login banner screenshots",
      "System use notification text",
      "Policy requiring notices"
    ],
    "weight": 1
  },
  {
    "id": "3.1.10",
    "family": "AC",
    "title": "Session Lock",
    "description": "Use session lock with pattern-hiding displays to prevent access and viewing of data after a period of inactivity.",
    "assessmentObjectives": [
      "The period of inactivity after which the system initiates a session lock is defined",
      "Access to the system and viewing of data is prevented by initiating a session lock after the defined period of inactivity",
      "Previously visible information is concealed via a pattern-hiding display after the defined period of inactivity"
    ],
    "implementationGuidance": "Configure screensaver/session lock to activate after 15 minutes of inactivity. Require re-authentication to unlock. Use blank screen or pattern display.",
    "otConsiderations": "HMI sessions displaying real-time process data should lock but may need shorter timeouts for CUI-displaying screens vs. process monitoring screens.",
    "evidenceExamples": [
      "Group policy showing lock settings",
      "Screensaver timeout configurations",
      "Screenshots of lock screens"
    ],
    "weight": 1
  },
  {
    "id": "3.1.11",
    "family": "AC",
    "title": "Session Termination",
    "description": "Terminate (automatically) a user session after a defined condition.",
    "assessmentObjectives": [
      "Conditions requiring a user session to be terminated are defined",
      "A user session is automatically terminated after any of the defined conditions"
    ],
    "implementationGuidance": "Define session timeout conditions (inactivity period, time of day, concurrent sessions). Implement automatic session termination. Require re-authentication after termination.",
    "otConsiderations": "Balance session termination with OT operational needs. Long-running batch processes on SCADA may need exception handling for session timeouts.",
    "evidenceExamples": [
      "Session timeout policy",
      "Application timeout configurations",
      "VPN session timeout settings"
    ],
    "weight": 1
  },
  {
    "id": "3.1.12",
    "family": "AC",
    "title": "Remote Access Control",
    "description": "Monitor and control remote access sessions.",
    "assessmentObjectives": [
      "Remote access sessions are permitted",
      "The types of permitted remote access are identified",
      "Remote access sessions are controlled",
      "Remote access sessions are monitored"
    ],
    "implementationGuidance": "Use VPN with MFA for remote access. Log all remote sessions. Restrict remote access to authorized personnel. Monitor for anomalous remote access patterns.",
    "otConsiderations": "Remote access to OT networks must traverse a DMZ or jump server. Vendor remote access to PLCs/SCADA requires supervision and session recording.",
    "evidenceExamples": [
      "VPN configurations",
      "Remote access policy",
      "Remote session logs",
      "MFA enrollment records"
    ],
    "weight": 1
  },
  {
    "id": "3.1.13",
    "family": "AC",
    "title": "Remote Access Encryption",
    "description": "Employ cryptographic mechanisms to protect the confidentiality of remote access sessions.",
    "assessmentObjectives": [
      "Cryptographic mechanisms to protect the confidentiality of remote access sessions are identified",
      "Cryptographic mechanisms to protect the confidentiality of remote access sessions are implemented"
    ],
    "implementationGuidance": "Use FIPS-validated encryption for VPN tunnels (AES-256, TLS 1.2+). Disable weak cipher suites. Use encrypted protocols (SSH, HTTPS) for all remote management.",
    "otConsiderations": "Ensure encrypted tunnels for remote vendor access to OT devices. Legacy OT protocols (Modbus, DNP3) lack encryption; tunnel through encrypted VPN.",
    "evidenceExamples": [
      "VPN encryption settings",
      "TLS configuration screenshots",
      "FIPS compliance documentation"
    ],
    "weight": 1
  },
  {
    "id": "3.1.14",
    "family": "AC",
    "title": "Remote Access Routing",
    "description": "Route remote access via managed access control points.",
    "assessmentObjectives": [
      "Managed access control points are identified",
      "Remote access is routed through managed network access control points"
    ],
    "implementationGuidance": "Route all remote access through centralized VPN concentrators or secure gateways. Prevent split tunneling. Use network access control to enforce routing.",
    "otConsiderations": "All remote access to OT zones must pass through IT/OT DMZ with inspection capabilities. No direct remote connections to OT devices.",
    "evidenceExamples": [
      "Network diagram showing access control points",
      "VPN topology documentation",
      "Firewall rules enforcing routing"
    ],
    "weight": 1
  },
  {
    "id": "3.1.15",
    "family": "AC",
    "title": "Privileged Remote Access",
    "description": "Authorize remote execution of privileged commands and remote access to security-relevant information.",
    "assessmentObjectives": [
      "Privileged commands authorized for remote execution are identified",
      "Security-relevant information authorized for remote access is identified",
      "The execution of the identified privileged commands via remote access is authorized",
      "Access to the identified security-relevant information via remote access is authorized"
    ],
    "implementationGuidance": "Restrict remote administrative access to designated admin accounts. Require MFA for remote privileged sessions. Log all remote privileged commands. Implement just-in-time privilege elevation.",
    "otConsiderations": "Remote PLC programming, firmware updates, and SCADA configuration changes require explicit authorization per session. Time-limited access windows preferred.",
    "evidenceExamples": [
      "Remote admin access policy",
      "MFA for remote admin records",
      "Jump server/PAM configurations",
      "Privileged session recordings"
    ],
    "weight": 1
  },
  {
    "id": "3.1.16",
    "family": "AC",
    "title": "Wireless Access Authorization",
    "description": "Authorize wireless access prior to allowing such connections.",
    "assessmentObjectives": [
      "Wireless access points are identified",
      "Wireless access is authorized before a connection is allowed"
    ],
    "implementationGuidance": "Implement WPA3 or WPA2-Enterprise with 802.1X. Maintain inventory of authorized access points. Conduct periodic rogue AP scans. Separate guest wireless from corporate networks.",
    "otConsiderations": "Wireless in manufacturing environments must be segregated from OT control networks. Wireless sensors on the shop floor require dedicated VLANs with no CUI access.",
    "evidenceExamples": [
      "Wireless access point inventory",
      "802.1X/RADIUS configurations",
      "Rogue AP scan results",
      "Wireless security policy"
    ],
    "weight": 1
  },
  {
    "id": "3.1.17",
    "family": "AC",
    "title": "Wireless Access Protection",
    "description": "Protect wireless access using authentication and encryption.",
    "assessmentObjectives": [
      "Wireless access to the system is protected using authentication",
      "Wireless access to the system is protected using encryption"
    ],
    "implementationGuidance": "Use WPA3 or WPA2-Enterprise with AES encryption. Implement certificate-based authentication. Disable WEP and open networks. Use unique PSKs per device or 802.1X.",
    "otConsiderations": "Industrial wireless protocols (WirelessHART, ISA100.11a) have built-in security but must be properly configured. Wi-Fi-connected OT devices need the same encryption standards.",
    "evidenceExamples": [
      "Wireless encryption settings",
      "802.1X certificate configurations",
      "Wireless security assessment results"
    ],
    "weight": 1
  },
  {
    "id": "3.1.18",
    "family": "AC",
    "title": "Mobile Device Connection",
    "description": "Control connection of mobile devices.",
    "assessmentObjectives": [
      "Mobile devices that process, store, or transmit CUI are identified",
      "Mobile device connections are authorized",
      "Mobile device connections are monitored",
      "Mobile device connections are controlled"
    ],
    "implementationGuidance": "Implement MDM solution. Require device enrollment and compliance before network access. Enforce encryption and PIN/biometric on mobile devices. Restrict CUI-capable apps.",
    "otConsiderations": "Tablets and mobile devices used on the shop floor for work instructions or quality inspection must be enrolled in MDM. Personal devices prohibited in CUI areas.",
    "evidenceExamples": [
      "MDM enrollment records",
      "Mobile device policy",
      "Device compliance reports",
      "BYOD restrictions documentation"
    ],
    "weight": 1
  },
  {
    "id": "3.1.19",
    "family": "AC",
    "title": "Encrypt CUI on Mobile Devices",
    "description": "Encrypt CUI on mobile devices and mobile computing platforms.",
    "assessmentObjectives": [
      "Mobile devices and mobile computing platforms that process, store, or transmit CUI are identified",
      "Encryption is employed to protect CUI on identified mobile devices and mobile computing platforms"
    ],
    "implementationGuidance": "Enable full-device encryption on all mobile devices handling CUI. Use FIPS-validated encryption. Implement remote wipe capability. Encrypt removable media.",
    "otConsiderations": "Ruggedized tablets used for CUI-containing work instructions on the shop floor must be encrypted. Ensure encryption does not impact real-time data display performance.",
    "evidenceExamples": [
      "Device encryption status reports",
      "MDM encryption policy",
      "FIPS validation certificates"
    ],
    "weight": 1
  },
  {
    "id": "3.1.20",
    "family": "AC",
    "title": "External System Connections",
    "description": "Verify and control/limit connections to and use of external systems.",
    "assessmentObjectives": [
      "Connections to external systems are identified",
      "The use of external systems is identified",
      "Connections to external systems are verified",
      "Connections to external systems are controlled/limited",
      "The use of external systems is controlled/limited"
    ],
    "implementationGuidance": "Maintain inventory of external connections. Establish connection agreements. Monitor external connections. Restrict data sharing with external systems.",
    "otConsiderations": "Vendor cloud monitoring services (predictive maintenance, equipment telemetry) connecting to OT networks require formal agreements and data classification review.",
    "evidenceExamples": [
      "External system inventory",
      "Interconnection security agreements",
      "External connection monitoring logs"
    ],
    "weight": 1
  },
  {
    "id": "3.1.21",
    "family": "AC",
    "title": "Portable Storage Use",
    "description": "Limit use of portable storage devices on external systems.",
    "assessmentObjectives": [
      "The use of portable storage devices on external systems is identified",
      "Limits on the use of portable storage devices on external systems are defined",
      "The use of portable storage devices on external systems is limited as defined"
    ],
    "implementationGuidance": "Restrict USB storage device use via group policy. Allow only encrypted and approved USB devices. Implement USB device control solutions. Scan all removable media.",
    "otConsiderations": "USB use for PLC programming, firmware updates, and data transfer between air-gapped OT systems requires controlled procedures. Designated clean USB stations for OT use.",
    "evidenceExamples": [
      "USB restriction policy",
      "Device control configurations",
      "Approved USB device list",
      "USB usage logs"
    ],
    "weight": 1
  },
  {
    "id": "3.1.22",
    "family": "AC",
    "title": "Publicly Accessible Content",
    "description": "Control information posted or processed on publicly accessible systems.",
    "assessmentObjectives": [
      "Individuals authorized to post or process information on publicly accessible systems are identified",
      "Procedures to ensure CUI is not posted or processed on publicly accessible systems are identified",
      "A review process is in place prior to posting of any content to publicly accessible systems",
      "Content on publicly accessible systems is reviewed to ensure that it does not include CUI"
    ],
    "implementationGuidance": "Implement review process for public web content. Train authorized posters on CUI identification. Scan public-facing systems for CUI. Maintain authorized poster list.",
    "otConsiderations": "Ensure manufacturing dashboards or production status displays visible to visitors do not contain CUI data (technical drawings, specifications, performance data covered by ITAR/EAR).",
    "evidenceExamples": [
      "Content review procedures",
      "Authorized poster list",
      "Public content review records",
      "CUI scanning results"
    ],
    "weight": 1
  },
  {
    "id": "3.2.1",
    "family": "AT",
    "title": "Security Awareness",
    "description": "Ensure that managers, systems administrators, and users of organizational systems are made aware of the security risks associated with their activities and of the applicable policies, standards, and procedures related to the security of those systems.",
    "assessmentObjectives": [
      "Security risks associated with organizational activities involving CUI are identified",
      "Applicable policies, standards, and procedures related to the security of the system are identified",
      "Managers, systems administrators, and users are made aware of the security risks",
      "Managers, systems administrators, and users are made aware of applicable policies, standards, and procedures"
    ],
    "implementationGuidance": "Conduct security awareness training at onboarding and annually. Cover phishing, social engineering, CUI handling, and reporting procedures. Track completion.",
    "otConsiderations": "Include OT-specific awareness for shop floor personnel: physical security of controllers, dangers of unauthorized USB use on OT equipment, recognizing abnormal equipment behavior as potential cyber indicator.",
    "evidenceExamples": [
      "Training records with dates and attendees",
      "Training materials/slides",
      "Awareness program documentation",
      "Phishing simulation results"
    ],
    "weight": 1
  },
  {
    "id": "3.2.2",
    "family": "AT",
    "title": "Role-Based Training",
    "description": "Ensure that personnel are trained to carry out their assigned information security-related duties and responsibilities.",
    "assessmentObjectives": [
      "Information security-related duties, roles, and responsibilities are defined",
      "Information security-related duties, roles, and responsibilities are assigned to designated personnel",
      "Personnel are adequately trained to carry out their assigned information security-related duties, roles, and responsibilities"
    ],
    "implementationGuidance": "Provide role-specific security training (admins, developers, CUI handlers). Train incident response team members. Maintain training plan and records. Refresh training annually.",
    "otConsiderations": "OT engineers and maintenance staff need training on secure PLC programming practices, patch management for ICS, and incident response procedures for OT environments.",
    "evidenceExamples": [
      "Role-based training plan",
      "Training completion records by role",
      "Training content for each role",
      "Certification records"
    ],
    "weight": 1
  },
  {
    "id": "3.2.3",
    "family": "AT",
    "title": "Insider Threat Awareness",
    "description": "Provide security awareness training on recognizing and reporting potential indicators of insider threat.",
    "assessmentObjectives": [
      "Potential indicators of insider threat are identified",
      "Security awareness training on recognizing and reporting potential indicators of insider threat is provided to managers and employees"
    ],
    "implementationGuidance": "Include insider threat indicators in awareness training. Establish reporting channels. Train on behavioral indicators (unusual access patterns, data hoarding, after-hours access).",
    "otConsiderations": "Include examples relevant to manufacturing: unauthorized PLC program changes, unusual data exports from engineering workstations, attempts to bypass safety interlocks.",
    "evidenceExamples": [
      "Insider threat training materials",
      "Reporting procedure documentation",
      "Training completion records"
    ],
    "weight": 1
  },
  {
    "id": "3.3.1",
    "family": "AU",
    "title": "System Auditing",
    "description": "Create and retain system audit logs and records to the extent needed to enable the monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity.",
    "assessmentObjectives": [
      "Audit logs needed to enable monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity are specified",
      "The content of audit records needed to support monitoring, analysis, investigation, and reporting is defined",
      "Audit records are created (generated)",
      "Audit records, once created, contain the defined content",
      "Retention requirements for audit records are defined",
      "Audit records are retained as defined"
    ],
    "implementationGuidance": "Enable auditing on all systems processing CUI. Log authentication events, access to CUI, privilege changes, and system events. Retain logs for minimum 1 year. Centralize log collection.",
    "otConsiderations": "Enable logging on SCADA historians, HMIs, and engineering workstations. OT device logs (PLC access logs, configuration change logs) may require separate collection due to protocol differences.",
    "evidenceExamples": [
      "Audit policy",
      "Sample audit logs",
      "Log retention configuration",
      "SIEM dashboard screenshots"
    ],
    "weight": 1
  },
  {
    "id": "3.3.2",
    "family": "AU",
    "title": "Individual Accountability",
    "description": "Ensure that the actions of individual system users can be uniquely traced to those users so they can be held accountable for their actions.",
    "assessmentObjectives": [
      "The content of audit records needed to support the ability to uniquely trace users to their actions is defined",
      "Audit records, once created, contain the defined content"
    ],
    "implementationGuidance": "Eliminate shared accounts. Ensure all actions are attributable to individual users. Include user identity in all audit records. Implement unique user IDs.",
    "otConsiderations": "Replace shared operator accounts on HMIs with individual accounts. Where shared accounts are operationally required (legacy OT), implement compensating controls (camera, badge-in logs).",
    "evidenceExamples": [
      "User account list showing no shared accounts",
      "Audit log samples showing user attribution",
      "Shared account elimination plan"
    ],
    "weight": 1
  },
  {
    "id": "3.3.3",
    "family": "AU",
    "title": "Event Review",
    "description": "Review and update logged events.",
    "assessmentObjectives": [
      "A process for determining when to review logged events is defined",
      "Event types being logged are reviewed",
      "Event types being logged are updated"
    ],
    "implementationGuidance": "Establish regular log review process (weekly/monthly). Update logged events based on changes in threat landscape, incidents, and system changes. Document review process.",
    "evidenceExamples": [
      "Log review schedule",
      "Log review meeting minutes",
      "Updated audit configurations after review"
    ],
    "weight": 1
  },
  {
    "id": "3.3.4",
    "family": "AU",
    "title": "Audit Failure Alerting",
    "description": "Alert in the event of an audit logging process failure.",
    "assessmentObjectives": [
      "Personnel or roles to be alerted in the event of an audit logging process failure are identified",
      "Types of audit logging process failures for which alert will be generated are defined",
      "Identified personnel or roles are alerted in the event of an audit logging process failure"
    ],
    "implementationGuidance": "Configure monitoring for audit log service health. Alert administrators when logging fails or disk space is low. Implement redundant logging where feasible.",
    "otConsiderations": "Monitor OT historian and SCADA logging processes. Alert on gaps in OT device communication logs that could indicate logging failure or network disruption.",
    "evidenceExamples": [
      "Alert configurations for log failures",
      "Monitoring dashboard showing log health",
      "Alert notification records"
    ],
    "weight": 1
  },
  {
    "id": "3.3.5",
    "family": "AU",
    "title": "Audit Review & Analysis",
    "description": "Correlate audit record review, analysis, and reporting processes to support organizational processes for investigation and response to indications of unlawful, unauthorized, suspicious, or unusual activity.",
    "assessmentObjectives": [
      "Audit record review, analysis, and reporting processes for investigating and responding to indications of unlawful, unauthorized, suspicious, or unusual activity are defined",
      "Audit record review, analysis, and reporting processes are correlated and integrated with organizational processes for investigation and response"
    ],
    "implementationGuidance": "Implement SIEM or centralized log analysis. Correlate events across systems. Establish procedures for escalating suspicious findings to incident response team.",
    "otConsiderations": "Correlate IT and OT security events. A failed login on IT followed by unusual OT access should trigger investigation. Integrate OT logs into SIEM if possible.",
    "evidenceExamples": [
      "SIEM correlation rules",
      "Investigation procedures",
      "Sample analysis reports",
      "Incident escalation records"
    ],
    "weight": 1
  },
  {
    "id": "3.3.6",
    "family": "AU",
    "title": "Audit Reduction & Reporting",
    "description": "Provide audit record reduction and report generation to support on-demand analysis and reporting.",
    "assessmentObjectives": [
      "An audit record reduction capability that supports on-demand analysis is provided",
      "A report generation capability that supports on-demand reporting is provided"
    ],
    "implementationGuidance": "Deploy log analysis tools (SIEM, ELK stack). Create dashboards for common queries. Enable ad-hoc search and reporting. Automate recurring reports.",
    "evidenceExamples": [
      "SIEM or log analysis tool deployment",
      "Dashboard screenshots",
      "Sample generated reports"
    ],
    "weight": 1
  },
  {
    "id": "3.3.7",
    "family": "AU",
    "title": "Time Synchronization",
    "description": "Provide a system capability that compares and synchronizes internal system clocks with an authoritative source to generate time stamps for audit records.",
    "assessmentObjectives": [
      "An authoritative source with which to compare and synchronize internal system clocks is specified",
      "Internal system clocks are compared and synchronized with the authoritative source"
    ],
    "implementationGuidance": "Configure NTP on all systems. Use authoritative time sources (NIST, GPS). Verify time synchronization regularly. Include timestamps in all audit records.",
    "otConsiderations": "OT devices may use different time sync protocols (PTP/IEEE 1588 for precision). Ensure OT and IT time sources are synchronized for cross-domain event correlation.",
    "evidenceExamples": [
      "NTP configuration files",
      "Time source documentation",
      "Time sync verification records"
    ],
    "weight": 1
  },
  {
    "id": "3.3.8",
    "family": "AU",
    "title": "Audit Protection",
    "description": "Protect audit information and audit logging tools from unauthorized access, modification, and deletion.",
    "assessmentObjectives": [
      "Audit information is protected from unauthorized access",
      "Audit information is protected from unauthorized modification",
      "Audit information is protected from unauthorized deletion",
      "Audit logging tools are protected from unauthorized access, modification, and deletion"
    ],
    "implementationGuidance": "Restrict access to log files and SIEM to authorized personnel. Use write-once storage or log forwarding. Implement integrity checking on log files.",
    "evidenceExamples": [
      "Log file permissions",
      "SIEM access controls",
      "Write-once storage configurations",
      "Log integrity verification records"
    ],
    "weight": 1
  },
  {
    "id": "3.3.9",
    "family": "AU",
    "title": "Audit Management Restriction",
    "description": "Limit management of audit logging functionality to a subset of privileged users.",
    "assessmentObjectives": [
      "A subset of privileged users granted access to manage audit logging functionality is defined",
      "Management of audit logging functionality is limited to the defined subset of privileged users"
    ],
    "implementationGuidance": "Restrict who can modify audit policies, disable logging, or delete logs. Implement role separation between system admins and audit admins.",
    "evidenceExamples": [
      "Audit admin role assignments",
      "Access control lists for audit management",
      "Policy restricting audit management"
    ],
    "weight": 1
  },
  {
    "id": "3.4.1",
    "family": "CM",
    "title": "Baseline Configurations",
    "description": "Establish and maintain baseline configurations and inventories of organizational systems (including hardware, software, firmware, and documentation) throughout the respective system development life cycles.",
    "assessmentObjectives": [
      "A baseline configuration is established",
      "An inventory of organizational systems is established",
      "Baseline configurations and inventories are maintained (up to date, as needed)"
    ],
    "implementationGuidance": "Create and maintain system baselines (OS configs, installed software, security settings). Use configuration management tools. Update baselines when systems change.",
    "otConsiderations": "Maintain baselines for PLC firmware versions, HMI software versions, and SCADA server configurations. Document OT network configurations including industrial switch and firewall settings.",
    "evidenceExamples": [
      "Hardware inventory",
      "Software inventory",
      "Baseline configuration documents",
      "Configuration management tool exports"
    ],
    "weight": 1
  },
  {
    "id": "3.4.2",
    "family": "CM",
    "title": "Security Configuration Enforcement",
    "description": "Establish and enforce security configuration settings for information technology products employed in organizational systems.",
    "assessmentObjectives": [
      "Security configuration settings for information technology products employed in the system are established and included in the baseline configuration",
      "Security configuration settings for information technology products employed in the system are enforced"
    ],
    "implementationGuidance": "Apply CIS benchmarks or DISA STIGs. Use group policy for Windows, configuration management for Linux. Enforce secure defaults. Scan for compliance.",
    "otConsiderations": "Apply OT-specific security configurations (ICS-CERT recommendations for PLCs, vendor hardening guides). Balance security settings with OT availability requirements.",
    "evidenceExamples": [
      "CIS/STIG benchmark compliance reports",
      "Group policy configurations",
      "Security configuration standards",
      "Compliance scan results"
    ],
    "weight": 1
  },
  {
    "id": "3.4.3",
    "family": "CM",
    "title": "Change Tracking",
    "description": "Track, review, approve or disapprove, and log changes to organizational systems.",
    "assessmentObjectives": [
      "Changes to the system are tracked",
      "Changes to the system are reviewed",
      "Changes to the system are approved or disapproved",
      "Changes to the system are logged"
    ],
    "implementationGuidance": "Implement change management process. Use change advisory board for significant changes. Log all configuration changes. Test changes before production deployment.",
    "otConsiderations": "All PLC program changes, firmware updates, and OT network changes must go through change management with OT-specific review and rollback procedures.",
    "evidenceExamples": [
      "Change management policy",
      "Change request records",
      "Change approval documentation",
      "Change logs"
    ],
    "weight": 1
  },
  {
    "id": "3.4.4",
    "family": "CM",
    "title": "Security Impact Analysis",
    "description": "Analyze the security impact of changes prior to implementation.",
    "assessmentObjectives": [
      "The security impact of changes to the system is analyzed prior to implementation"
    ],
    "implementationGuidance": "Conduct security impact analysis before implementing changes. Document analysis results. Include in change management process.",
    "otConsiderations": "OT changes (patches, firmware updates) require additional safety impact analysis. Test changes in development/staging OT environments before production deployment.",
    "evidenceExamples": [
      "Security impact analysis forms",
      "Change request with security review",
      "Test results from pre-production testing"
    ],
    "weight": 1
  },
  {
    "id": "3.4.5",
    "family": "CM",
    "title": "Access Restrictions for Change",
    "description": "Define, document, approve, and enforce physical and logical access restrictions associated with changes to organizational systems.",
    "assessmentObjectives": [
      "Physical access restrictions associated with changes to the system are defined",
      "Physical access restrictions associated with changes to the system are documented",
      "Physical access restrictions associated with changes to the system are approved",
      "Physical access restrictions associated with changes to the system are enforced",
      "Logical access restrictions associated with changes to the system are defined",
      "Logical access restrictions associated with changes to the system are documented",
      "Logical access restrictions associated with changes to the system are approved",
      "Logical access restrictions associated with changes to the system are enforced"
    ],
    "implementationGuidance": "Restrict who can make changes to production systems. Implement code review for software changes. Require approval for infrastructure changes. Use separate environments for development/test/production.",
    "otConsiderations": "Physical key switches on PLCs that restrict programming mode. Logical restrictions on who can upload programs to controllers. Separate engineering workstations from general-use computers.",
    "evidenceExamples": [
      "Access control for change management",
      "Change approval workflows",
      "Production access restrictions",
      "Code review records"
    ],
    "weight": 1
  },
  {
    "id": "3.4.6",
    "family": "CM",
    "title": "Least Functionality",
    "description": "Employ the principle of least functionality by configuring organizational systems to provide only essential capabilities.",
    "assessmentObjectives": [
      "Essential system capabilities are defined based on the principle of least functionality",
      "The system is configured to provide only the defined essential capabilities"
    ],
    "implementationGuidance": "Disable unnecessary services, ports, and protocols. Remove unnecessary software. Restrict installed applications to approved lists. Disable unused hardware features.",
    "otConsiderations": "Disable unused communication protocols on PLCs and RTUs (e.g., disable Telnet if SSH is available). Remove unused I/O modules. Disable unused network ports on industrial switches.",
    "evidenceExamples": [
      "Approved software list",
      "Disabled services list",
      "Port/protocol restriction configurations",
      "Application whitelisting policy"
    ],
    "weight": 1
  },
  {
    "id": "3.4.7",
    "family": "CM",
    "title": "Nonessential Functionality Restriction",
    "description": "Restrict, disable, or prevent the use of nonessential programs, functions, ports, protocols, and services.",
    "assessmentObjectives": [
      "Essential programs, functions, ports, protocols, and services are defined",
      "Nonessential programs, functions, ports, protocols, and services are defined",
      "Nonessential programs, functions, ports, protocols, and services are restricted, disabled, or prevented from use"
    ],
    "implementationGuidance": "Use application whitelisting. Disable unnecessary OS features. Block unauthorized ports at host firewall. Remove unused applications.",
    "otConsiderations": "Whitelist authorized applications on engineering workstations. Block peer-to-peer protocols on OT networks. Disable unused industrial protocols on OT devices.",
    "evidenceExamples": [
      "Application whitelist",
      "Host firewall configurations",
      "Disabled protocol list",
      "Vulnerability scan showing closed ports"
    ],
    "weight": 1
  },
  {
    "id": "3.4.8",
    "family": "CM",
    "title": "Application Execution Policy",
    "description": "Apply deny-by-exception (blacklisting) policy to prevent the use of unauthorized software or deny-all, permit-by-exception (whitelisting) policy to allow the execution of authorized software.",
    "assessmentObjectives": [
      "A policy specifying whether whitelisting or blacklisting is to be implemented is specified",
      "The software allowed to execute under whitelisting or denied use under blacklisting is specified",
      "Whitelisting or blacklisting of software is implemented as specified"
    ],
    "implementationGuidance": "Implement application whitelisting (preferred) or blacklisting. Use tools like AppLocker or similar. Maintain approved software list. Review and update regularly.",
    "otConsiderations": "Whitelisting is strongly preferred for OT systems due to their static application environment. Only authorized HMI, SCADA, and engineering software should be permitted.",
    "evidenceExamples": [
      "AppLocker or application control policy",
      "Approved software list",
      "Application control scan results"
    ],
    "weight": 1
  },
  {
    "id": "3.4.9",
    "family": "CM",
    "title": "User-Installed Software",
    "description": "Control and monitor user-installed software.",
    "assessmentObjectives": [
      "A policy for controlling the installation of software by users is established",
      "Installation of software by users is controlled based on the established policy",
      "Installation of software by users is monitored"
    ],
    "implementationGuidance": "Restrict user ability to install software. Require admin approval for new software. Monitor for unauthorized installations. Use software deployment tools.",
    "otConsiderations": "Prevent unauthorized software installation on SCADA servers and engineering workstations. Vendor tools and updates should go through approval process.",
    "evidenceExamples": [
      "Software installation policy",
      "Admin rights restriction configurations",
      "Software installation monitoring logs"
    ],
    "weight": 1
  },
  {
    "id": "3.5.1",
    "family": "IA",
    "title": "User Identification",
    "description": "Identify system users, processes acting on behalf of users, and devices.",
    "assessmentObjectives": [
      "System users are identified",
      "Processes acting on behalf of users are identified",
      "Devices accessing the system are identified"
    ],
    "implementationGuidance": "Assign unique user IDs. Implement device authentication (certificates, MAC filtering). Identify service accounts and automated processes.",
    "otConsiderations": "Identify all devices on the OT network including PLCs, RTUs, HMIs, and engineering laptops. Use asset inventory tools compatible with industrial protocols.",
    "evidenceExamples": [
      "User ID listing",
      "Device inventory with identifiers",
      "Service account inventory"
    ],
    "weight": 1
  },
  {
    "id": "3.5.2",
    "family": "IA",
    "title": "User Authentication",
    "description": "Authenticate (or verify) the identities of users, processes, or devices, as a prerequisite to allowing access to organizational systems.",
    "assessmentObjectives": [
      "The identity of each user is authenticated or verified as a prerequisite to system access",
      "The identity of each process acting on behalf of a user is authenticated or verified as a prerequisite to system access",
      "The identity of each device is authenticated or verified as a prerequisite to system access"
    ],
    "implementationGuidance": "Implement strong authentication (passwords meeting complexity requirements, MFA, certificates). Authenticate before granting any access. Verify device identity before network access.",
    "otConsiderations": "Legacy OT devices may not support modern authentication. Compensating controls: network segmentation, physical access controls, monitored jump servers for legacy device access.",
    "evidenceExamples": [
      "Authentication mechanism configurations",
      "MFA enrollment records",
      "Password policy settings",
      "Device certificate deployments"
    ],
    "weight": 1
  },
  {
    "id": "3.5.3",
    "family": "IA",
    "title": "Multifactor Authentication",
    "description": "Use multifactor authentication for local and network access to privileged accounts and for network access to non-privileged accounts.",
    "assessmentObjectives": [
      "Privileged accounts are identified",
      "Multifactor authentication is implemented for local access to privileged accounts",
      "Multifactor authentication is implemented for network access to privileged accounts",
      "Multifactor authentication is implemented for network access to non-privileged accounts"
    ],
    "implementationGuidance": "Deploy MFA for all privileged accounts (local and network). Deploy MFA for network access to non-privileged accounts. Use hardware tokens, push notifications, or TOTP. Phishing-resistant MFA preferred (FIDO2).",
    "otConsiderations": "MFA for OT access via jump servers. Where MFA is not feasible on legacy OT devices, implement network-level MFA at the access point (e.g., VPN to OT DMZ requires MFA).",
    "evidenceExamples": [
      "MFA configuration screenshots",
      "MFA enrollment records",
      "Conditional access policies",
      "MFA exception documentation"
    ],
    "weight": 5
  },
  {
    "id": "3.5.4",
    "family": "IA",
    "title": "Replay-Resistant Authentication",
    "description": "Employ replay-resistant authentication mechanisms for network access to privileged and non-privileged accounts.",
    "assessmentObjectives": [
      "Replay-resistant authentication mechanisms are implemented for network account access to privileged and non-privileged accounts"
    ],
    "implementationGuidance": "Use authentication protocols resistant to replay attacks (Kerberos, TLS client certificates, challenge-response). Avoid NTLM where possible. Implement session tokens with expiration.",
    "otConsiderations": "Legacy OT protocols (Modbus, DNP3) are inherently vulnerable to replay. Mitigate by wrapping in encrypted tunnels and monitoring for replayed commands.",
    "evidenceExamples": [
      "Authentication protocol configurations",
      "TLS/Kerberos settings",
      "Replay-resistant mechanism documentation"
    ],
    "weight": 1
  },
  {
    "id": "3.5.5",
    "family": "IA",
    "title": "Identifier Reuse Prevention",
    "description": "Prevent reuse of identifiers for a defined period.",
    "assessmentObjectives": [
      "A period within which identifiers cannot be reused is defined",
      "Reuse of identifiers is prevented within the defined period"
    ],
    "implementationGuidance": "Configure systems to prevent user ID reuse for at least 2 years. Disable (do not delete) departed user accounts. Maintain historical account records.",
    "evidenceExamples": [
      "Identifier reuse policy",
      "Active Directory account lifecycle settings",
      "Account disable/archive records"
    ],
    "weight": 1
  },
  {
    "id": "3.5.6",
    "family": "IA",
    "title": "Identifier Inactivity",
    "description": "Disable identifiers after a defined period of inactivity.",
    "assessmentObjectives": [
      "A period of inactivity after which an identifier is disabled is defined",
      "Identifiers are disabled after the defined period of inactivity"
    ],
    "implementationGuidance": "Disable accounts after 90 days of inactivity. Automate with AD policies or scripts. Review inactive accounts monthly. Exempt service accounts with documented justification.",
    "otConsiderations": "OT service accounts used for automated processes may appear inactive by login metrics. Document and exempt legitimate OT service accounts.",
    "evidenceExamples": [
      "Account inactivity policy",
      "AD configurations for inactivity",
      "Inactive account reports and actions taken"
    ],
    "weight": 1
  },
  {
    "id": "3.5.7",
    "family": "IA",
    "title": "Password Complexity",
    "description": "Enforce a minimum password complexity and change of characters when new passwords are created.",
    "assessmentObjectives": [
      "Password complexity requirements are defined",
      "Password change-of-character requirements are defined",
      "Minimum password complexity requirements as defined are enforced when new passwords are created",
      "Minimum password change-of-character requirements as defined are enforced when new passwords are created"
    ],
    "implementationGuidance": "Enforce minimum 12 characters with mix of upper, lower, numbers, symbols. Require change of at least 50% of characters from previous password. Block common/breached passwords.",
    "evidenceExamples": [
      "Password policy settings",
      "AD password complexity configurations",
      "Password filter/blocklist settings"
    ],
    "weight": 1
  },
  {
    "id": "3.5.8",
    "family": "IA",
    "title": "Password Reuse Prevention",
    "description": "Prohibit password reuse for a specified number of generations.",
    "assessmentObjectives": [
      "The number of generations during which a password cannot be reused is specified",
      "Reuse of passwords is prohibited during the specified number of generations"
    ],
    "implementationGuidance": "Configure password history to prevent reuse of at least 24 previous passwords. Enforce through AD policy.",
    "evidenceExamples": [
      "Password history settings",
      "AD password policy configurations"
    ],
    "weight": 1
  },
  {
    "id": "3.5.9",
    "family": "IA",
    "title": "Temporary Passwords",
    "description": "Allow temporary password use for system logons with an immediate change to a permanent password.",
    "assessmentObjectives": [
      "Temporary passwords for system logons are allowed",
      "An immediate change to a permanent password is required when a temporary password is used"
    ],
    "implementationGuidance": "Configure 'user must change password at next logon' for new/reset accounts. Use secure channel for temporary password distribution. Set short expiration on temporary passwords.",
    "evidenceExamples": [
      "Password reset procedures",
      "AD 'change at next logon' configurations",
      "Temporary password distribution policy"
    ],
    "weight": 1
  },
  {
    "id": "3.5.10",
    "family": "IA",
    "title": "Cryptographic Password Protection",
    "description": "Store and transmit only cryptographically-protected passwords.",
    "assessmentObjectives": [
      "Passwords are cryptographically protected in storage",
      "Passwords are cryptographically protected in transit"
    ],
    "implementationGuidance": "Use bcrypt, scrypt, or PBKDF2 for password storage. Enforce TLS for all authentication traffic. Disable legacy protocols transmitting passwords in cleartext.",
    "otConsiderations": "Legacy OT devices may transmit credentials in cleartext (Telnet, FTP). Wrap in encrypted tunnels or replace with encrypted alternatives.",
    "evidenceExamples": [
      "Password hashing algorithm documentation",
      "TLS configurations for authentication services",
      "Disabled cleartext protocol evidence"
    ],
    "weight": 1
  },
  {
    "id": "3.5.11",
    "family": "IA",
    "title": "Obscure Authentication Feedback",
    "description": "Obscure feedback of authentication information.",
    "assessmentObjectives": [
      "Authentication information is obscured during the authentication process"
    ],
    "implementationGuidance": "Mask password input fields. Do not display passwords in logs or error messages. Use generic error messages for failed authentication (do not reveal whether username or password was wrong).",
    "evidenceExamples": [
      "Login screen screenshots showing masked passwords",
      "Error message examples",
      "Log samples showing no password exposure"
    ],
    "weight": 1
  },
  {
    "id": "3.6.1",
    "family": "IR",
    "title": "Incident Handling",
    "description": "Establish an operational incident-handling capability for organizational systems that includes preparation, detection, analysis, containment, recovery, and user response activities.",
    "assessmentObjectives": [
      "An operational incident-handling capability is established",
      "The incident-handling capability includes preparation",
      "The incident-handling capability includes detection",
      "The incident-handling capability includes analysis",
      "The incident-handling capability includes containment",
      "The incident-handling capability includes recovery",
      "The incident-handling capability includes user response activities"
    ],
    "implementationGuidance": "Develop incident response plan. Define roles and responsibilities. Establish communication procedures. Define incident categories and severity levels. Include CUI-specific handling procedures.",
    "otConsiderations": "OT incident response must prioritize safety and production continuity. Containment actions should not cause unsafe OT conditions (e.g., isolating a network segment controlling a running process).",
    "evidenceExamples": [
      "Incident response plan",
      "IRT roster and contact information",
      "Incident response procedures",
      "Incident response training records"
    ],
    "weight": 1
  },
  {
    "id": "3.6.2",
    "family": "IR",
    "title": "Incident Reporting",
    "description": "Track, document, and report incidents to designated officials and/or authorities both internal and external to the organization.",
    "assessmentObjectives": [
      "Incidents are tracked",
      "Incidents are documented",
      "Incidents are reported to designated internal personnel",
      "Incidents are reported to designated external authorities"
    ],
    "implementationGuidance": "Implement incident tracking system. Document incidents from detection through resolution. Report to DIB ISAC and DC3 for cyber incidents affecting CUI. Comply with DFARS 7012 72-hour reporting.",
    "otConsiderations": "OT incidents affecting safety or environmental controls may have additional regulatory reporting requirements (OSHA, EPA) beyond cyber reporting.",
    "evidenceExamples": [
      "Incident tracking system screenshots",
      "Sample incident reports",
      "Reporting procedure documentation",
      "Contact information for reporting authorities"
    ],
    "weight": 1
  },
  {
    "id": "3.6.3",
    "family": "IR",
    "title": "Incident Response Testing",
    "description": "Test the organizational incident response capability.",
    "assessmentObjectives": [
      "The incident response capability is tested"
    ],
    "implementationGuidance": "Conduct tabletop exercises at least annually. Test detection, response, and recovery procedures. Document results and lessons learned. Update IR plan based on test findings.",
    "otConsiderations": "Include OT-specific scenarios in exercises (e.g., ransomware affecting SCADA, unauthorized PLC program modification). Involve both IT and OT personnel in exercises.",
    "evidenceExamples": [
      "Tabletop exercise documentation",
      "Exercise results and after-action reports",
      "IR plan updates from exercises"
    ],
    "weight": 1
  },
  {
    "id": "3.7.1",
    "family": "MA",
    "title": "System Maintenance",
    "description": "Perform maintenance on organizational systems.",
    "assessmentObjectives": [
      "A system maintenance policy is defined",
      "Maintenance is performed on the system in accordance with the policy"
    ],
    "implementationGuidance": "Establish and follow maintenance schedules. Apply security patches. Perform preventive maintenance. Document all maintenance activities.",
    "otConsiderations": "OT maintenance windows must coordinate with production schedules. Firmware updates to PLCs should be tested in development environments first. Maintain rollback capability.",
    "evidenceExamples": [
      "Maintenance policy",
      "Maintenance schedules",
      "Patch management records",
      "Maintenance logs"
    ],
    "weight": 1
  },
  {
    "id": "3.7.2",
    "family": "MA",
    "title": "Maintenance Control",
    "description": "Provide controls on the tools, techniques, mechanisms, and personnel used to conduct system maintenance.",
    "assessmentObjectives": [
      "Tools used to conduct system maintenance are controlled",
      "Techniques used to conduct system maintenance are controlled",
      "Mechanisms used to conduct system maintenance are controlled",
      "Personnel used to conduct system maintenance are controlled"
    ],
    "implementationGuidance": "Approve and track maintenance tools. Inspect maintenance tools for improper modifications. Supervise maintenance personnel without required access. Sanitize equipment after off-site maintenance.",
    "otConsiderations": "Vendor laptops brought on-site for PLC programming must be scanned and approved. Maintenance tools (programming cables, diagnostic equipment) should be inventoried and controlled.",
    "evidenceExamples": [
      "Approved maintenance tool list",
      "Vendor escorting procedures",
      "Equipment sanitization procedures",
      "Maintenance personnel authorization records"
    ],
    "weight": 1
  },
  {
    "id": "3.7.3",
    "family": "MA",
    "title": "Equipment Sanitization",
    "description": "Ensure equipment removed for off-site maintenance is sanitized of any CUI.",
    "assessmentObjectives": [
      "Equipment to be removed from organizational spaces for off-site maintenance is sanitized of any CUI"
    ],
    "implementationGuidance": "Wipe CUI from equipment before sending for repair. Use NIST 800-88 media sanitization methods. Document sanitization. Verify no CUI remains before release.",
    "otConsiderations": "PLCs and HMIs sent for repair may contain CUI in programs, configurations, or logs. Sanitize before shipping. Consider removing memory cards and hard drives.",
    "evidenceExamples": [
      "Sanitization procedures",
      "Sanitization records",
      "NIST 800-88 compliance documentation"
    ],
    "weight": 1
  },
  {
    "id": "3.7.4",
    "family": "MA",
    "title": "Media Inspection",
    "description": "Check media containing diagnostic and test programs for malicious code before the media are used in organizational systems.",
    "assessmentObjectives": [
      "Media containing diagnostic and test programs are checked for malicious code before use in organizational systems"
    ],
    "implementationGuidance": "Scan all media before connecting to systems. Use dedicated scanning stations. Maintain anti-malware tools with current signatures. Quarantine suspicious media.",
    "otConsiderations": "USB drives used for PLC programming, firmware updates, and data transfer between air-gapped OT and IT networks must be scanned. Use a designated clean station for media sanitization.",
    "evidenceExamples": [
      "Media scanning procedures",
      "Scan station documentation",
      "Scan logs",
      "Anti-malware tool configurations"
    ],
    "weight": 1
  },
  {
    "id": "3.7.5",
    "family": "MA",
    "title": "Remote Maintenance",
    "description": "Require multifactor authentication to establish nonlocal maintenance sessions via external network connections and terminate such connections when nonlocal maintenance is complete.",
    "assessmentObjectives": [
      "Nonlocal maintenance sessions are established via external network connections using multifactor authentication",
      "Nonlocal maintenance sessions established via external network connections are terminated when nonlocal maintenance is complete"
    ],
    "implementationGuidance": "Require MFA for all remote maintenance sessions. Use VPN with MFA for remote access. Terminate sessions when maintenance is complete. Log all remote maintenance activity.",
    "otConsiderations": "Vendor remote access for OT maintenance must use MFA through controlled jump servers. Sessions should be monitored and recorded. Time-limited access windows.",
    "evidenceExamples": [
      "Remote maintenance MFA configurations",
      "VPN logs showing MFA usage",
      "Session termination records",
      "Remote maintenance authorization forms"
    ],
    "weight": 1
  },
  {
    "id": "3.7.6",
    "family": "MA",
    "title": "Maintenance Personnel Supervision",
    "description": "Supervise the maintenance activities of maintenance personnel without required access authorization.",
    "assessmentObjectives": [
      "Maintenance personnel without required access authorization are supervised during maintenance activities"
    ],
    "implementationGuidance": "Escort and supervise unauthorized maintenance personnel. Document supervision. Verify work performed. Remove temporary access after maintenance completion.",
    "otConsiderations": "Vendor technicians working on OT equipment must be escorted by authorized plant personnel. Document all vendor activities on OT systems.",
    "evidenceExamples": [
      "Visitor/vendor escort policy",
      "Escort logs",
      "Maintenance supervision records",
      "Vendor access authorization forms"
    ],
    "weight": 1
  },
  {
    "id": "3.8.1",
    "family": "MP",
    "title": "Media Protection",
    "description": "Protect (i.e., physically control and securely store) system media containing CUI, both paper and digital.",
    "assessmentObjectives": [
      "System media containing CUI is physically controlled",
      "System media containing CUI is securely stored"
    ],
    "implementationGuidance": "Store CUI media in locked cabinets/rooms. Control access to media storage areas. Track media containing CUI. Include both digital media (USBs, drives) and paper.",
    "otConsiderations": "Technical drawings, schematics, and CUI-containing work instructions on the shop floor must be controlled. Secure storage for OT backup media (PLC programs, configurations).",
    "evidenceExamples": [
      "Media storage procedures",
      "Physical security of media storage",
      "Media inventory",
      "Access controls for media storage areas"
    ],
    "weight": 1
  },
  {
    "id": "3.8.2",
    "family": "MP",
    "title": "Media Access Restriction",
    "description": "Limit access to CUI on system media to authorized users.",
    "assessmentObjectives": [
      "Access to CUI on system media is limited to authorized users"
    ],
    "implementationGuidance": "Implement access controls on digital media. Restrict physical access to media containing CUI. Maintain access list for media containing CUI.",
    "evidenceExamples": [
      "Media access control lists",
      "Physical access restrictions",
      "Digital media encryption status"
    ],
    "weight": 1
  },
  {
    "id": "3.8.3",
    "family": "MP",
    "title": "Media Sanitization",
    "description": "Sanitize or destroy system media containing CUI before disposal or release for reuse.",
    "assessmentObjectives": [
      "System media containing CUI is sanitized or destroyed before disposal",
      "System media containing CUI is sanitized before release for reuse"
    ],
    "implementationGuidance": "Follow NIST SP 800-88 for media sanitization. Use degaussing, secure erase, or physical destruction. Document sanitization. Use certified destruction services for physical destruction.",
    "otConsiderations": "OT devices being decommissioned may contain CUI in firmware, memory cards, and configuration files. Ensure complete sanitization of all storage in OT equipment.",
    "evidenceExamples": [
      "Media sanitization procedures",
      "Destruction certificates",
      "Sanitization logs",
      "NIST 800-88 compliance records"
    ],
    "weight": 1
  },
  {
    "id": "3.8.4",
    "family": "MP",
    "title": "Media Marking",
    "description": "Mark media with necessary CUI markings and distribution limitations.",
    "assessmentObjectives": [
      "Media containing CUI is marked with applicable CUI markings",
      "Media containing CUI is marked with distribution limitations"
    ],
    "implementationGuidance": "Apply CUI markings to all media containing CUI. Include distribution limitations. Use consistent marking format per CUI registry. Mark both physical and digital media.",
    "evidenceExamples": [
      "Media marking procedures",
      "Examples of marked media",
      "CUI marking guide used"
    ],
    "weight": 1
  },
  {
    "id": "3.8.5",
    "family": "MP",
    "title": "Media Accountability",
    "description": "Control access to media containing CUI and maintain accountability for media during transport outside of controlled areas.",
    "assessmentObjectives": [
      "Access to media containing CUI is controlled",
      "Accountability for media containing CUI is maintained during transport outside of controlled areas"
    ],
    "implementationGuidance": "Track media custody during transport. Use tamper-evident packaging. Maintain chain of custody documentation. Use secure courier services.",
    "evidenceExamples": [
      "Media transport procedures",
      "Chain of custody forms",
      "Courier service agreements",
      "Media tracking logs"
    ],
    "weight": 1
  },
  {
    "id": "3.8.6",
    "family": "MP",
    "title": "Portable Storage Encryption",
    "description": "Implement cryptographic mechanisms to protect the confidentiality of CUI stored on digital media during transport unless otherwise protected by alternative physical safeguards.",
    "assessmentObjectives": [
      "Cryptographic mechanisms to protect confidentiality of CUI on digital media during transport are implemented",
      "Alternative physical safeguards to protect confidentiality of CUI on digital media during transport are implemented (if not using encryption)"
    ],
    "implementationGuidance": "Use AES-256 encryption on all portable storage containing CUI. Use encrypted USB drives. Full-disk encryption on portable computers. FIPS 140-2/3 validated encryption.",
    "otConsiderations": "USB drives used to transfer CUI between air-gapped OT and IT networks must be encrypted. Backup media for OT systems containing CUI must be encrypted.",
    "evidenceExamples": [
      "Encrypted USB drive inventory",
      "Full-disk encryption status",
      "FIPS encryption validation",
      "Encryption policy"
    ],
    "weight": 1
  },
  {
    "id": "3.8.7",
    "family": "MP",
    "title": "Removable Media Control",
    "description": "Control the use of removable media on system components.",
    "assessmentObjectives": [
      "The use of removable media on system components is controlled"
    ],
    "implementationGuidance": "Restrict USB and removable media use via policy and technical controls. Implement device control solutions. Allow only approved encrypted devices. Disable autorun.",
    "otConsiderations": "Tightly control USB use on OT systems. Designate approved media for PLC programming and firmware updates. Scan all media before connection to OT devices.",
    "evidenceExamples": [
      "Removable media policy",
      "Device control configurations",
      "USB restriction GPO settings",
      "Approved media registry"
    ],
    "weight": 1
  },
  {
    "id": "3.8.8",
    "family": "MP",
    "title": "Shared System Resources",
    "description": "Prohibit the use of portable storage devices when such devices have no identifiable owner.",
    "assessmentObjectives": [
      "The use of portable storage devices is prohibited when such devices have no identifiable owner"
    ],
    "implementationGuidance": "Label all portable storage with owner identification. Prohibit use of unidentified/found storage devices. Implement policy requiring device registration.",
    "evidenceExamples": [
      "Portable storage registration policy",
      "Device labeling procedures",
      "Registered device list"
    ],
    "weight": 1
  },
  {
    "id": "3.8.9",
    "family": "MP",
    "title": "CUI Backup Protection",
    "description": "Protect the confidentiality of backup CUI at storage locations.",
    "assessmentObjectives": [
      "The confidentiality of backup CUI at storage locations is protected"
    ],
    "implementationGuidance": "Encrypt backup media containing CUI. Store backups in physically secure locations. Restrict access to backup storage. Test backup restoration periodically.",
    "otConsiderations": "OT system backups (PLC programs, SCADA configurations, historian databases) containing CUI must be encrypted and stored securely. Test OT backup restoration regularly.",
    "evidenceExamples": [
      "Backup encryption configurations",
      "Backup storage physical security",
      "Backup access controls",
      "Backup testing records"
    ],
    "weight": 1
  },
  {
    "id": "3.10.1",
    "family": "PE",
    "title": "Physical Access Limitation",
    "description": "Limit physical access to organizational systems, equipment, and the respective operating environments to authorized individuals.",
    "assessmentObjectives": [
      "Authorized individuals allowed physical access are identified",
      "Physical access to organizational systems is limited to authorized individuals",
      "Physical access to equipment is limited to authorized individuals",
      "Physical access to operating environments is limited to authorized individuals"
    ],
    "implementationGuidance": "Implement badge access systems. Maintain visitor logs. Escort visitors in secure areas. Secure server rooms and wiring closets. Control access to areas where CUI is processed.",
    "otConsiderations": "Secure physical access to OT control rooms, PLC cabinets, and networking equipment on the manufacturing floor. Badge access for areas with CUI-processing OT equipment.",
    "evidenceExamples": [
      "Badge access system configurations",
      "Physical access control policy",
      "Visitor logs",
      "Server room access records"
    ],
    "weight": 1
  },
  {
    "id": "3.10.2",
    "family": "PE",
    "title": "Physical Facility Protection",
    "description": "Protect and monitor the physical facility and support infrastructure for organizational systems.",
    "assessmentObjectives": [
      "The physical facility where organizational systems reside is protected",
      "The support infrastructure for organizational systems is protected",
      "The physical facility where organizational systems reside is monitored",
      "The support infrastructure for organizational systems is monitored"
    ],
    "implementationGuidance": "Install security cameras. Implement intrusion detection. Protect power and HVAC. Monitor environmental conditions (temperature, humidity). Implement fire suppression.",
    "otConsiderations": "Monitor environmental conditions in OT areas (temperature for electronics, humidity for manufacturing). Protect power supplies for critical OT systems with UPS.",
    "evidenceExamples": [
      "Security camera coverage maps",
      "Intrusion detection configurations",
      "Environmental monitoring records",
      "Fire suppression documentation"
    ],
    "weight": 1
  },
  {
    "id": "3.10.3",
    "family": "PE",
    "title": "Visitor Escort",
    "description": "Escort visitors and monitor visitor activity.",
    "assessmentObjectives": [
      "Visitors are escorted",
      "Visitor activity is monitored"
    ],
    "implementationGuidance": "Require visitor sign-in. Issue temporary badges. Escort visitors in secure areas. Monitor visitor activities. Maintain visitor logs.",
    "otConsiderations": "Escort visitors on the manufacturing floor, especially near OT control systems. Prevent unauthorized photography of CUI-containing equipment and processes.",
    "evidenceExamples": [
      "Visitor sign-in logs",
      "Visitor badge procedures",
      "Escort policy",
      "Visitor area restrictions"
    ],
    "weight": 1
  },
  {
    "id": "3.10.4",
    "family": "PE",
    "title": "Physical Access Logs",
    "description": "Maintain audit logs of physical access.",
    "assessmentObjectives": [
      "Audit logs of physical access are maintained"
    ],
    "implementationGuidance": "Maintain logs of badge access events. Record visitor sign-in/out. Retain physical access logs for defined period. Review logs regularly for anomalies.",
    "evidenceExamples": [
      "Badge access system logs",
      "Visitor sign-in sheets",
      "Physical access log retention policy",
      "Log review records"
    ],
    "weight": 1
  },
  {
    "id": "3.10.5",
    "family": "PE",
    "title": "Physical Access Device Management",
    "description": "Control and manage physical access devices.",
    "assessmentObjectives": [
      "Physical access devices are identified",
      "Physical access devices are controlled",
      "Physical access devices are managed"
    ],
    "implementationGuidance": "Inventory all physical access devices (keys, badges, combinations, PINs). Change combinations/PINs regularly. Recover badges from departed personnel. Audit physical access device inventory.",
    "evidenceExamples": [
      "Badge/key inventory",
      "Badge recovery procedures for departing personnel",
      "Combination/PIN change records",
      "Physical access device audit records"
    ],
    "weight": 1
  },
  {
    "id": "3.10.6",
    "family": "PE",
    "title": "Alternative Work Sites",
    "description": "Enforce safeguarding measures for CUI at alternative work sites.",
    "assessmentObjectives": [
      "Safeguarding measures for CUI are defined for alternative work sites",
      "Safeguarding measures for CUI at alternative work sites are enforced"
    ],
    "implementationGuidance": "Define security requirements for telework. Require VPN and encrypted devices. Prohibit CUI handling in public areas. Implement clean desk policy. Require physical security for home offices.",
    "otConsiderations": "Remote engineering work (PLC programming from home) must use encrypted VPN through managed jump servers. CUI-containing technical documents must not be printed at home without approval.",
    "evidenceExamples": [
      "Telework security policy",
      "Remote work agreements",
      "Home office security requirements",
      "VPN usage records for remote workers"
    ],
    "weight": 1
  },
  {
    "id": "3.9.1",
    "family": "PS",
    "title": "Individual Screening",
    "description": "Screen individuals prior to authorizing access to organizational systems containing CUI.",
    "assessmentObjectives": [
      "Individuals are screened prior to authorizing access to organizational systems containing CUI"
    ],
    "implementationGuidance": "Conduct background checks before granting CUI access. Define screening criteria based on risk level. Re-screen at defined intervals. Screen contractors and vendors.",
    "otConsiderations": "Screen OT personnel with access to CUI-containing systems (engineers, operators, maintenance staff). Include vendor/contractor personnel who access OT systems.",
    "evidenceExamples": [
      "Background check policy",
      "Screening records",
      "Vendor screening requirements",
      "Re-screening schedule"
    ],
    "weight": 1
  },
  {
    "id": "3.9.2",
    "family": "PS",
    "title": "Personnel Actions",
    "description": "Ensure that organizational systems containing CUI are protected during and after personnel actions such as terminations and transfers.",
    "assessmentObjectives": [
      "Policy and/or processes for protecting organizational systems containing CUI during and after personnel actions are established",
      "Organizational systems containing CUI are protected during and after personnel actions"
    ],
    "implementationGuidance": "Revoke access within 24 hours of termination. Conduct exit interviews covering CUI obligations. Recover badges, keys, equipment. Transfer CUI responsibilities during role changes.",
    "otConsiderations": "Immediately revoke OT system access (HMI, engineering workstation, VPN) for terminated employees. Change shared credentials on OT devices if the departing person had knowledge of them.",
    "evidenceExamples": [
      "Termination checklist",
      "Access revocation records",
      "Exit interview documentation",
      "Equipment recovery records"
    ],
    "weight": 1
  },
  {
    "id": "3.11.1",
    "family": "RA",
    "title": "Risk Assessment",
    "description": "Periodically assess the risk to organizational operations (including mission, functions, image, or reputation), organizational assets, and individuals, resulting from the operation of organizational systems and the associated processing, storage, or transmission of CUI.",
    "assessmentObjectives": [
      "The frequency to assess risk to organizational operations, organizational assets, and individuals is defined",
      "Risk to organizational operations, organizational assets, and individuals resulting from the operation of organizational systems and the associated processing, storage, or transmission of CUI is assessed with the defined frequency"
    ],
    "implementationGuidance": "Conduct risk assessments at least annually and when significant changes occur. Identify threats, vulnerabilities, and impacts. Document risk assessment results. Update risk register.",
    "otConsiderations": "Include OT-specific threats in risk assessments (targeted ICS malware, insider threat to safety systems, supply chain attacks on PLC firmware). Use ICS-CERT advisories for threat intelligence.",
    "evidenceExamples": [
      "Risk assessment report",
      "Risk register",
      "Threat analysis documentation",
      "Risk assessment schedule"
    ],
    "weight": 1
  },
  {
    "id": "3.11.2",
    "family": "RA",
    "title": "Vulnerability Scanning",
    "description": "Scan for vulnerabilities in organizational systems and applications periodically and when new vulnerabilities affecting those systems and applications are identified.",
    "assessmentObjectives": [
      "The frequency to scan for vulnerabilities in organizational systems and applications is defined",
      "Vulnerability scans are performed on organizational systems and applications with the defined frequency",
      "Vulnerability scans are performed on organizational systems and applications when new vulnerabilities are identified"
    ],
    "implementationGuidance": "Scan at least monthly with authenticated scans. Scan when new vulnerabilities are announced. Prioritize remediation by severity. Track remediation to completion.",
    "otConsiderations": "OT vulnerability scanning requires OT-safe scanners that will not disrupt industrial protocols. Passive scanning preferred for production OT networks. Active scanning only during maintenance windows.",
    "evidenceExamples": [
      "Vulnerability scan reports",
      "Scan schedule",
      "Remediation tracking records",
      "Scan tool configurations"
    ],
    "weight": 1
  },
  {
    "id": "3.11.3",
    "family": "RA",
    "title": "Vulnerability Remediation",
    "description": "Remediate vulnerabilities in accordance with risk assessments.",
    "assessmentObjectives": [
      "Vulnerabilities are remediated in accordance with risk assessments"
    ],
    "implementationGuidance": "Prioritize remediation by risk level. Track remediation progress. Implement compensating controls when patches are unavailable. Define remediation timelines by severity.",
    "otConsiderations": "OT patching requires careful scheduling around production. Compensating controls (network segmentation, monitoring) when OT vendors have not released patches or patches cannot be applied immediately.",
    "evidenceExamples": [
      "Vulnerability remediation records",
      "Patch management reports",
      "Compensating control documentation",
      "Remediation timeline tracking"
    ],
    "weight": 1
  },
  {
    "id": "3.12.1",
    "family": "CA",
    "title": "Security Control Assessment",
    "description": "Periodically assess the security controls in organizational systems to determine if the controls are effective in their application.",
    "assessmentObjectives": [
      "The frequency of security control assessments is defined",
      "Security controls are assessed with the defined frequency to determine if the controls are effective in their application"
    ],
    "implementationGuidance": "Assess security controls at least annually. Use NIST 800-171A assessment procedures. Document assessment results. Assign assessors independent of control implementation.",
    "evidenceExamples": [
      "Security assessment plan",
      "Security assessment report",
      "Assessment schedule",
      "Assessor qualifications"
    ],
    "weight": 1
  },
  {
    "id": "3.12.2",
    "family": "CA",
    "title": "Plan of Action",
    "description": "Develop and implement plans of action designed to correct deficiencies and reduce or eliminate vulnerabilities in organizational systems.",
    "assessmentObjectives": [
      "Deficiencies and vulnerabilities to be addressed by the plan of action are identified",
      "A plan of action is developed to correct identified deficiencies and reduce or eliminate identified vulnerabilities",
      "The plan of action is implemented to correct identified deficiencies and reduce or eliminate identified vulnerabilities"
    ],
    "implementationGuidance": "Create POA&M for each unmet control. Define milestones, timeline, and responsible parties. Track progress monthly. Close items when remediated and verified.",
    "evidenceExamples": [
      "Plan of Action and Milestones (POA&M)",
      "POA&M tracking records",
      "Milestone completion evidence",
      "Verification of remediation"
    ],
    "weight": 1
  },
  {
    "id": "3.12.3",
    "family": "CA",
    "title": "Security Control Monitoring",
    "description": "Monitor security controls on an ongoing basis to ensure the continued effectiveness of the controls.",
    "assessmentObjectives": [
      "Security controls are monitored on an ongoing basis to ensure the continued effectiveness of the controls"
    ],
    "implementationGuidance": "Implement continuous monitoring strategy. Use automated tools for ongoing assessment. Review control effectiveness regularly. Update controls based on monitoring results.",
    "evidenceExamples": [
      "Continuous monitoring strategy",
      "Automated monitoring tool configurations",
      "Monitoring reports",
      "Control update records"
    ],
    "weight": 1
  },
  {
    "id": "3.12.4",
    "family": "CA",
    "title": "System Security Plan",
    "description": "Develop, document, and periodically update system security plans that describe system boundaries, system environments of operation, how security requirements are implemented, and the relationships with or connections to other systems.",
    "assessmentObjectives": [
      "A system security plan is developed",
      "A system security plan is documented",
      "The system security plan describes the system boundary",
      "The system security plan describes the system environment of operation",
      "The system security plan describes how security requirements are implemented",
      "The system security plan describes the relationships with or connections to other systems",
      "The system security plan is periodically updated"
    ],
    "implementationGuidance": "Create SSP covering all 110 controls. Include system boundary, data flows, interconnections, roles. Update when system changes occur. Review at least annually.",
    "evidenceExamples": [
      "System Security Plan document",
      "Network diagrams",
      "Data flow diagrams",
      "SSP update records"
    ],
    "weight": 1
  },
  {
    "id": "3.13.1",
    "family": "SC",
    "title": "Boundary Protection",
    "description": "Monitor, control, and protect communications (i.e., information transmitted or received by organizational systems) at the external boundaries and key internal boundaries of organizational systems.",
    "assessmentObjectives": [
      "The external system boundary is defined",
      "Key internal boundaries of the system are defined",
      "Communications at the external system boundary are monitored",
      "Communications at key internal boundaries are monitored",
      "Communications at the external system boundary are controlled",
      "Communications at key internal boundaries are controlled",
      "Communications at the external system boundary are protected",
      "Communications at key internal boundaries are protected"
    ],
    "implementationGuidance": "Deploy firewalls at network boundaries. Implement IDS/IPS. Define and enforce DMZ architecture. Monitor traffic at boundaries. Log boundary crossing events.",
    "otConsiderations": "Implement IT/OT DMZ with industrial firewalls. Monitor Purdue Model level boundaries. Use OT-aware IDS for industrial protocol inspection.",
    "evidenceExamples": [
      "Network boundary diagrams",
      "Firewall configurations",
      "IDS/IPS configurations",
      "Boundary monitoring logs"
    ],
    "weight": 1
  },
  {
    "id": "3.13.2",
    "family": "SC",
    "title": "Architectural Design",
    "description": "Employ architectural designs, software development techniques, and systems engineering principles that promote effective information security within organizational systems.",
    "assessmentObjectives": [
      "Architectural designs that promote effective information security are employed",
      "Software development techniques that promote effective information security are employed",
      "Systems engineering principles that promote effective information security are employed"
    ],
    "implementationGuidance": "Implement defense in depth. Use network segmentation. Apply secure coding practices. Minimize attack surface. Separate security functions from non-security functions.",
    "otConsiderations": "Follow IEC 62443 zones and conduits model for OT network architecture. Implement Purdue Model segmentation. Separate safety systems from control systems.",
    "evidenceExamples": [
      "Security architecture documentation",
      "Network segmentation diagrams",
      "Defense-in-depth strategy",
      "Secure development lifecycle documentation"
    ],
    "weight": 1
  },
  {
    "id": "3.13.3",
    "family": "SC",
    "title": "Role-Based Security",
    "description": "Separate user functionality from system management functionality.",
    "assessmentObjectives": [
      "User functionality is identified",
      "System management functionality is identified",
      "User functionality is separated from system management functionality"
    ],
    "implementationGuidance": "Use separate interfaces for user and administrative access. Implement management networks/VLANs. Restrict management interface access to authorized administrators.",
    "otConsiderations": "Separate OT engineering/management interfaces from operator interfaces. Use dedicated engineering workstations on management networks separate from operator HMI networks.",
    "evidenceExamples": [
      "Network diagrams showing management network separation",
      "Administrative interface access controls",
      "VLAN configurations"
    ],
    "weight": 1
  },
  {
    "id": "3.13.4",
    "family": "SC",
    "title": "Shared Resource Control",
    "description": "Prevent unauthorized and unintended information transfer via shared system resources.",
    "assessmentObjectives": [
      "Unauthorized and unintended information transfer via shared system resources is prevented"
    ],
    "implementationGuidance": "Clear shared memory after use. Implement memory protection. Use separate virtual environments. Prevent data leakage through shared resources.",
    "evidenceExamples": [
      "Shared resource protection configurations",
      "Virtual environment isolation settings",
      "Memory management configurations"
    ],
    "weight": 1
  },
  {
    "id": "3.13.5",
    "family": "SC",
    "title": "Public Access Network Separation",
    "description": "Implement subnetworks for publicly accessible system components that are physically or logically separated from internal networks.",
    "assessmentObjectives": [
      "Publicly accessible system components are identified",
      "Subnetworks for publicly accessible system components are physically or logically separated from internal networks"
    ],
    "implementationGuidance": "Place public-facing systems in DMZ. Implement firewall rules between DMZ and internal networks. Restrict DMZ-to-internal traffic to minimum necessary.",
    "otConsiderations": "Any OT data shared publicly (production dashboards, equipment status) must be served from DMZ systems with no direct connection to OT control networks.",
    "evidenceExamples": [
      "DMZ architecture diagrams",
      "Firewall rules between DMZ and internal",
      "Public-facing system inventory"
    ],
    "weight": 1
  },
  {
    "id": "3.13.6",
    "family": "SC",
    "title": "Network Communication by Exception",
    "description": "Deny network communications traffic by default and allow network communications traffic by exception (i.e., deny all, permit by exception).",
    "assessmentObjectives": [
      "Network communications traffic is denied by default",
      "Network communications traffic is allowed by exception"
    ],
    "implementationGuidance": "Configure firewalls with default deny rules. Whitelist only required traffic. Document all firewall exceptions. Review exceptions regularly.",
    "otConsiderations": "Apply deny-by-default on OT firewalls. Whitelist only required industrial protocols (Modbus TCP, EtherNet/IP, OPC UA) between specific devices.",
    "evidenceExamples": [
      "Firewall rules showing default deny",
      "Exception documentation",
      "Firewall rule review records"
    ],
    "weight": 1
  },
  {
    "id": "3.13.7",
    "family": "SC",
    "title": "Split Tunneling Prevention",
    "description": "Prevent remote devices from simultaneously establishing non-remote connections with organizational systems and communicating via some other connection to resources in external networks (i.e., split tunneling).",
    "assessmentObjectives": [
      "Split tunneling is prevented in remote devices"
    ],
    "implementationGuidance": "Configure VPN clients to prevent split tunneling. Route all traffic through organizational VPN when connected. Enforce via endpoint management policies.",
    "otConsiderations": "Remote engineering laptops connecting to OT networks via VPN must not simultaneously connect to internet. Prevents lateral movement from internet to OT.",
    "evidenceExamples": [
      "VPN configuration showing split tunnel disabled",
      "Endpoint management policy",
      "VPN client configurations"
    ],
    "weight": 1
  },
  {
    "id": "3.13.8",
    "family": "SC",
    "title": "CUI Transmission Encryption",
    "description": "Implement cryptographic mechanisms to prevent unauthorized disclosure of CUI during transmission unless otherwise protected by alternative physical safeguards.",
    "assessmentObjectives": [
      "Cryptographic mechanisms to prevent unauthorized disclosure of CUI during transmission are identified",
      "Cryptographic mechanisms to prevent unauthorized disclosure of CUI during transmission are implemented",
      "Alternative physical safeguards to prevent unauthorized disclosure of CUI during transmission are identified and implemented (if not using encryption)"
    ],
    "implementationGuidance": "Use TLS 1.2+ for all CUI transmissions. Use FIPS-validated encryption. Encrypt email containing CUI. Use encrypted file transfer protocols (SFTP, SCP).",
    "otConsiderations": "Encrypt CUI transmitted between IT and OT networks. Legacy OT protocols lacking encryption must tunnel through encrypted VPN connections.",
    "evidenceExamples": [
      "TLS configurations",
      "Email encryption settings",
      "FIPS validation certificates",
      "Encrypted protocol configurations"
    ],
    "weight": 1
  },
  {
    "id": "3.13.9",
    "family": "SC",
    "title": "Network Connection Termination",
    "description": "Terminate network connections associated with communications sessions at the end of the sessions or after a defined period of inactivity.",
    "assessmentObjectives": [
      "A period of inactivity to terminate network connections associated with communications sessions is defined",
      "Network connections associated with communications sessions are terminated at the end of the sessions or after the defined period of inactivity"
    ],
    "implementationGuidance": "Configure session timeouts on all network services. Terminate idle VPN sessions. Implement TCP keepalive and session timeout settings.",
    "evidenceExamples": [
      "Session timeout configurations",
      "VPN timeout settings",
      "Network service timeout parameters"
    ],
    "weight": 1
  },
  {
    "id": "3.13.10",
    "family": "SC",
    "title": "Cryptographic Key Management",
    "description": "Establish and manage cryptographic keys for cryptography employed in organizational systems.",
    "assessmentObjectives": [
      "Cryptographic keys are established for cryptography employed in organizational systems",
      "Cryptographic keys are managed for cryptography employed in organizational systems"
    ],
    "implementationGuidance": "Implement key management procedures. Protect private keys. Rotate keys per policy. Use hardware security modules (HSM) for critical keys. Document key lifecycle.",
    "otConsiderations": "Manage keys for OT VPN tunnels, encrypted backups, and any encrypted OT communications. Ensure key rotation does not disrupt OT operations.",
    "evidenceExamples": [
      "Key management policy",
      "Key inventory",
      "Key rotation records",
      "HSM documentation"
    ],
    "weight": 1
  },
  {
    "id": "3.13.11",
    "family": "SC",
    "title": "FIPS-Validated Cryptography",
    "description": "Employ FIPS-validated cryptography when used to protect the confidentiality of CUI.",
    "assessmentObjectives": [
      "FIPS-validated cryptography is employed to protect the confidentiality of CUI"
    ],
    "implementationGuidance": "Use only FIPS 140-2/3 validated cryptographic modules. Verify operating system and application crypto modules are FIPS-certified. Configure FIPS mode on endpoints.",
    "otConsiderations": "Verify VPN appliances and encryption solutions used for OT network protection are FIPS-validated. Some OT-specific encryption solutions may need FIPS waiver documentation.",
    "evidenceExamples": [
      "FIPS module certificates",
      "FIPS mode configuration screenshots",
      "Cryptographic module inventory with validation status"
    ],
    "weight": 3
  },
  {
    "id": "3.13.12",
    "family": "SC",
    "title": "Collaborative Device Control",
    "description": "Prohibit remote activation of collaborative computing devices and provide indication of devices in use to users present at the device.",
    "assessmentObjectives": [
      "Remote activation of collaborative computing devices is prohibited",
      "Indication of use of collaborative computing devices is provided to users present at the device"
    ],
    "implementationGuidance": "Disable remote activation of cameras and microphones. Use indicator lights when cameras/mics are active. Configure conference room devices to require local activation.",
    "evidenceExamples": [
      "Conference device configurations",
      "Camera/microphone policy",
      "Indicator light documentation"
    ],
    "weight": 1
  },
  {
    "id": "3.13.13",
    "family": "SC",
    "title": "Mobile Code Control",
    "description": "Control and monitor the use of mobile code.",
    "assessmentObjectives": [
      "Use of mobile code is controlled",
      "Use of mobile code is monitored"
    ],
    "implementationGuidance": "Define acceptable mobile code types. Block unauthorized mobile code at boundaries. Monitor for malicious mobile code. Use browser security settings to restrict scripts.",
    "evidenceExamples": [
      "Mobile code policy",
      "Browser security settings",
      "Web proxy configurations filtering mobile code"
    ],
    "weight": 1
  },
  {
    "id": "3.13.14",
    "family": "SC",
    "title": "Voice over IP Control",
    "description": "Control and monitor the use of Voice over Internet Protocol (VoIP) technologies.",
    "assessmentObjectives": [
      "Use of VoIP technologies is controlled",
      "Use of VoIP technologies is monitored"
    ],
    "implementationGuidance": "Segment VoIP traffic on separate VLANs. Encrypt VoIP signaling and media (SRTP/TLS). Monitor VoIP for anomalies. Restrict VoIP to authorized systems.",
    "evidenceExamples": [
      "VoIP VLAN configurations",
      "VoIP encryption settings",
      "VoIP security policy",
      "VoIP monitoring configurations"
    ],
    "weight": 1
  },
  {
    "id": "3.13.15",
    "family": "SC",
    "title": "Session Authenticity",
    "description": "Protect the authenticity of communications sessions.",
    "assessmentObjectives": [
      "The authenticity of communications sessions is protected"
    ],
    "implementationGuidance": "Use TLS for session integrity. Implement session tokens with anti-forgery protection. Validate session establishment. Protect against session hijacking.",
    "evidenceExamples": [
      "TLS configurations",
      "Session management configurations",
      "Anti-forgery token implementations"
    ],
    "weight": 1
  },
  {
    "id": "3.13.16",
    "family": "SC",
    "title": "CUI at Rest Encryption",
    "description": "Protect the confidentiality of CUI at rest.",
    "assessmentObjectives": [
      "The confidentiality of CUI at rest is protected"
    ],
    "implementationGuidance": "Encrypt storage containing CUI. Use full-disk encryption on endpoints. Encrypt databases containing CUI. Use FIPS-validated encryption. Manage encryption keys securely.",
    "otConsiderations": "Encrypt OT system storage containing CUI (engineering workstation drives, historian databases, backup media). Verify encryption does not impact OT system performance.",
    "evidenceExamples": [
      "Full-disk encryption status reports",
      "Database encryption configurations",
      "FIPS encryption validation",
      "Storage encryption audit"
    ],
    "weight": 1
  },
  {
    "id": "3.14.1",
    "family": "SI",
    "title": "Flaw Remediation",
    "description": "Identify, report, and correct system flaws in a timely manner.",
    "assessmentObjectives": [
      "The time within which to identify system flaws is specified",
      "System flaws are identified within the specified time frame",
      "The time within which to report system flaws is specified",
      "System flaws are reported within the specified time frame",
      "The time within which to correct system flaws is specified",
      "System flaws are corrected within the specified time frame"
    ],
    "implementationGuidance": "Implement patch management process. Define patching timelines by severity (critical: 72hrs, high: 30 days, medium: 90 days). Test patches before deployment. Track patching status.",
    "otConsiderations": "OT patching requires vendor validation and testing in development environments. Coordinate with production schedules. Document compensating controls when patches cannot be applied timely.",
    "evidenceExamples": [
      "Patch management policy",
      "Patching status reports",
      "Patch testing records",
      "Compensating control documentation"
    ],
    "weight": 1
  },
  {
    "id": "3.14.2",
    "family": "SI",
    "title": "Malicious Code Protection",
    "description": "Provide protection from malicious code at designated locations within organizational systems.",
    "assessmentObjectives": [
      "Designated locations for malicious code protection are identified",
      "Protection from malicious code at designated locations is provided"
    ],
    "implementationGuidance": "Deploy anti-malware on all endpoints and servers. Keep signatures current. Implement real-time scanning. Scan email attachments and downloads. Configure automatic updates.",
    "otConsiderations": "Use OT-compatible anti-malware that does not interfere with real-time control processes. Application whitelisting is often preferred over signature-based AV on OT systems.",
    "evidenceExamples": [
      "Anti-malware deployment records",
      "Signature update status",
      "Scan configuration settings",
      "Malware detection logs"
    ],
    "weight": 1
  },
  {
    "id": "3.14.3",
    "family": "SI",
    "title": "Security Alert Monitoring",
    "description": "Monitor system security alerts and advisories and take action in response.",
    "assessmentObjectives": [
      "System security alerts and advisories from internal and external sources are identified",
      "System security alerts and advisories are monitored",
      "Actions in response to system security alerts and advisories are taken"
    ],
    "implementationGuidance": "Subscribe to vendor security advisories. Monitor CISA alerts. Subscribe to US-CERT/ICS-CERT advisories. Assess applicability and take action. Document response actions.",
    "otConsiderations": "Subscribe to ICS-CERT advisories for all OT vendor products in use. Monitor vendor-specific security bulletins for PLCs, SCADA, and HMIs.",
    "evidenceExamples": [
      "Advisory subscription evidence",
      "Advisory review records",
      "Action taken in response to advisories",
      "Alert tracking system"
    ],
    "weight": 1
  },
  {
    "id": "3.14.4",
    "family": "SI",
    "title": "Update Malicious Code Protection",
    "description": "Update malicious code protection mechanisms when new releases are available.",
    "assessmentObjectives": [
      "Malicious code protection mechanisms are updated when new releases are available"
    ],
    "implementationGuidance": "Configure automatic signature updates. Update anti-malware engines when new versions release. Verify update deployment across all endpoints. Monitor for failed updates.",
    "otConsiderations": "OT anti-malware updates should be tested for compatibility before deployment to production OT systems. Vendor-validated updates preferred.",
    "evidenceExamples": [
      "Automatic update configurations",
      "Update deployment reports",
      "Engine version inventory",
      "Failed update tracking"
    ],
    "weight": 1
  },
  {
    "id": "3.14.5",
    "family": "SI",
    "title": "System & File Scanning",
    "description": "Perform periodic scans of organizational systems and real-time scans of files from external sources as files are downloaded, opened, or executed.",
    "assessmentObjectives": [
      "The frequency for periodic scans of organizational systems is defined",
      "Periodic scans of organizational systems are performed with the defined frequency",
      "Real-time scans of files from external sources as files are downloaded, opened, or executed are performed"
    ],
    "implementationGuidance": "Configure weekly full system scans. Enable real-time file scanning. Scan removable media on insertion. Scan email attachments. Configure on-access scanning.",
    "otConsiderations": "Schedule OT system scans during maintenance windows to avoid impacting production. Real-time scanning on OT systems may need performance tuning.",
    "evidenceExamples": [
      "Scan schedule configurations",
      "Real-time scanning settings",
      "Scan result logs",
      "Scan coverage reports"
    ],
    "weight": 1
  },
  {
    "id": "3.14.6",
    "family": "SI",
    "title": "Inbound/Outbound Traffic Monitoring",
    "description": "Monitor organizational systems, including inbound and outbound communications traffic, to detect attacks and indicators of potential attacks.",
    "assessmentObjectives": [
      "The system is monitored to detect attacks and indicators of potential attacks",
      "Inbound communications traffic is monitored to detect attacks and indicators of potential attacks",
      "Outbound communications traffic is monitored to detect attacks and indicators of potential attacks"
    ],
    "implementationGuidance": "Deploy IDS/IPS at network boundaries. Monitor DNS for C2 indicators. Analyze NetFlow data. Implement SIEM with correlation rules. Monitor for data exfiltration.",
    "otConsiderations": "Deploy OT-aware network monitoring that understands industrial protocols. Monitor for unauthorized Modbus writes, anomalous DNP3 traffic, and unexpected OPC UA operations.",
    "evidenceExamples": [
      "IDS/IPS configurations",
      "SIEM alert rules",
      "Traffic monitoring dashboard screenshots",
      "Network monitoring tool deployments"
    ],
    "weight": 1
  },
  {
    "id": "3.14.7",
    "family": "SI",
    "title": "Unauthorized Use Detection",
    "description": "Identify unauthorized use of organizational systems.",
    "assessmentObjectives": [
      "Unauthorized use of the system is identified"
    ],
    "implementationGuidance": "Monitor for unauthorized access attempts. Analyze login patterns for anomalies. Detect unauthorized software installations. Monitor for policy violations. Alert on suspicious behavior.",
    "otConsiderations": "Detect unauthorized PLC program changes, unexpected OT device communications, and unauthorized access to engineering workstations. Monitor for deviations from known-good OT baselines.",
    "evidenceExamples": [
      "Unauthorized use detection tool configurations",
      "Alert records for unauthorized activity",
      "User behavior analytics settings",
      "Baseline deviation reports"
    ],
    "weight": 1
  }
];

const controlMap = new Map(ALL_CONTROLS.map(c => [c.id, c]));

export function getControl(id) {
  return controlMap.get(id) || null;
}

export function getControlsByFamily(family) {
  return ALL_CONTROLS.filter(c => c.family === family);
}

export function getOTRelevantControls() {
  return ALL_CONTROLS.filter(c => c.otConsiderations && c.otConsiderations.length > 0);
}

export function getHighWeightControls() {
  return ALL_CONTROLS.filter(c => c.weight > 1);
}
