export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  category: 'Security' | 'Web & Systems';
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  featured?: boolean;
  securityControls: string[];
}

export interface Writeup {
  id: string;
  title: string;
  date: string;
  category: 'CTF' | 'Web' | 'Forensics' | 'Network';
  readTime: string;
  difficulty: 'Entry' | 'Intermediate' | 'Advanced';
  summary: string;
  findings: string;
}

export interface Milestone {
  year: string;
  event: string;
  role: string;
  details: string;
  badge: string;
  highlight?: boolean;
}

export interface LabActivity {
  id: string;
  title: string;
  period: string;
  category: 'Midterms' | 'Finals';
  description: string;
  tags: string[];
  viewUrl: string;
}

export interface Certification {
  id: string;
  title: string;
  subtitle: string;
  issuer: string;
  date: string;
  credentialId?: string;
  category: 'Pentesting & Security' | 'Networking (CCNA)' | 'Linux & AI' | 'Hackathons & CTFs';
  badge: string;
  image: string;
}

const base = import.meta.env.BASE_URL;

export const PERSONAL_INFO = {
  name: "John Ivan Miranda",
  handle: "miranda.sec",
  fullHandle: "janayban",
  role: "Cybersecurity Enthusiast & Computer Science Student",
  institution: "City College of Angeles",
  status: "Available for Security Roles & Internships",
  location: "Pampanga, Philippines",
  bio: "Focused on Red Teaming, Blue Teaming, Web Security, and GRC. As a Computer Science student at City College of Angeles and champion of the 2026 Cisco Ethical Hacker CTF, experiencing hands-on penetration testing and web vulnerability exploitation.",
  email: "johnivanmiranda1020@gmail.com",
  github: "https://github.com/janayban",
  linkedin: "https://www.linkedin.com/in/john-ivan-miranda-8082733a4/",
  resumeUrl: `${base}docs/MIRANDA-CV.pdf`,
  securityTxtUrl: `${base}.well-known/security.txt`,
  image: `${base}images/profile-formal.jpg`,
};

export const PROJECTS: Project[] = [
  {
    id: "hrms-thesis",
    title: "Human Resource Management System | Thesis Project",
    tagline: "Comprehensive HRMO platform with ATS, Employee Processing & Analytics",
    description: "An institutional management system built for the HRMO, featuring an Applicant Tracking System (ATS), Employee Service Processing, and Data Analytics. Served as QA and UI/UX Tester, auditing workflows, testing interface accessibility, and validating system edge cases.",
    tags: ["Web App", "HRMO", "ATS", "Data Analytics", "QA & UI/UX Testing"],
    category: "Web Application",
    image: `${base}images/hrms.jpg`,
    featured: false,
    securityControls: [
      "Role: QA & UI/UX Tester of the whole system",
      "Applicant Tracking System (ATS) pipeline verification",
      "Employee Service Processing & Data Analytics reporting"
    ]
  },
  {
    id: "notecode",
    title: "NoteCode",
    tagline: "Air-gapped Android note management system",
    description: "An offline Android note app that transfers encrypted notes between physical devices via QR codes and utilizes Firebase for secure storage and synchronization without open network vulnerabilities.",
    tags: ["Android", "Java", "Firebase", "QR Protocol"],
    category: "Mobile Application",
    image: `${base}images/notecode.jpg`,
    featured: false,
    securityControls: [
      "Zero network permissions required in AndroidManifest",
      "Sanitized chunked QR code transmission",
      "Firebase cloud storage & data synchronization"
    ]
  },
  {
    id: "trimclick",
    title: "TrimClick",
    tagline: "Barbershop booking system with customer loyalty rewards",
    description: "A web-based appointment booking system designed for barbershops, featuring automated slot scheduling, client appointment management, and customer loyalty discount programs.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    category: "Web Application",
    image: `${base}images/trimclick.jpg`,
    featured: false,
    securityControls: [
      "Barbershop appointment & slot scheduling",
      "Customer loyalty program with automated discounts",
      "Client & service management dashboard"
    ]
  },
  {
    id: "oras",
    title: "ORAS Registrar Queue",
    tagline: "University registrar queue & appointment manager",
    description: "A desktop appointment scheduling and student queue management system featuring real-time ticket tracking, student ID validation, and administrative audit logging.",
    tags: ["Python", "Tkinter", "SQLite", "Queue System"],
    category: "Desktop Application",
    image: `${base}images/oras.jpg`,
    featured: false,
    securityControls: [
      "Student ID token validation",
      "Real-time ticket display & queue telemetry",
      "Tamper-resistant local audit logs"
    ]
  }
];

export const WRITEUPS: Writeup[] = [
  {
    id: "cisco-ctf",
    title: "Cisco Ethical Hacker CTF: Packet Reconstruction & Linux PrivEsc",
    date: "Mar 2026",
    category: "CTF",
    readTime: "5 min",
    difficulty: "Advanced",
    summary: "Complete breakdown of challenge vectors from the national Cisco tournament, including packet carving in Wireshark and exploiting an unrestricted sudo binary to gain root.",
    findings: "Demonstrated how plaintext TCP streams leak session tokens, and provided hardening steps using sudoers directive restrictions."
  },
  {
    id: "hack4gov-dump",
    title: "Hack4Gov Regional CTF: Memory Dump & C2 DNS Beacon Analysis",
    date: "Feb 2026",
    category: "Forensics",
    readTime: "6 min",
    difficulty: "Advanced",
    summary: "Investigation into infected memory images using Volatility 3 to trace process injection, isolate malware persistence mechanisms, and decode encrypted C2 DNS beacons.",
    findings: "Identified base64 reverse shell payloads encoded inside DNS TXT request queries and outlined Suricata detection rules."
  },
  {
    id: "owasp-bola",
    title: "Auditing & Mitigating Broken Object Level Authorization (BOLA)",
    date: "Jan 2026",
    category: "Web",
    readTime: "4 min",
    difficulty: "Intermediate",
    summary: "Deep dive into OWASP API Security #1 flaw. Explored how parameter tampering enables horizontal privilege escalation, followed by architectural middleware remediation.",
    findings: "Enforced strict tenant ownership validations at the data access layer, preventing unauthorized object access."
  },
  {
    id: "network-telemetry",
    title: "Detecting Lateral Movement in Segmented Internal Subnets",
    date: "Nov 2025",
    category: "Network",
    readTime: "4 min",
    difficulty: "Intermediate",
    summary: "Hands-on packet analysis of SMB session setups, Pass-the-Hash indicators, and ARP poisoning artifacts generated during simulated internal red team assessments.",
    findings: "Documented signature-based alerting rules for abnormal SMB RPC pipes."
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: "2026",
    event: "Hack5Gov Region 3 CTF 2026",
    role: "Student-Coach",
    details: "Taught and guided school's representatives regarding OSINT, Networking, Web Penetration, and Forensics.",
    badge: "Student-Coach",
  },
  {
    year: "2026",
    event: "DICT Central Luzon CTF 2026",
    role: "Participant",
    details: "Participated in a jeopardy-style capture the flag competition organized by DICT Region 3 and in partnership with HAU.",
    badge: "Participant",
  },
  {
    year: "2026",
    event: "Cisco Ethical Hacker CTF",
    role: "1st Place Champion",
    details: "Ranked #1 in regional jeopardy-style CTF covering packet analysis, exploitation, and systems security.",
    badge: "1st Place 🏆",
    highlight: true,
  },
  {
    year: "2025",
    event: "Hack4Gov Regional CTF",
    role: "Participant",
    details: "Solved advanced challenges in digital forensics, steganography, cryptographic ciphers, and web exploitation.",
    badge: "Participant",
  },
  {
    year: "2025",
    event: "Cloudstaff Hackathon",
    role: "Participant",
    details: "Built \"Shelter Finder\", an app built for disaster-related events and emergency relief coordination, within 48 hours.",
    badge: "Participant",
  },
];

export const SKILL_GROUPS = [
  {
    title: "Offensive & Defensive Security",
    skills: [
      "Web AppSec (OWASP Top 10)",
      "Red Teaming & Pentesting",
      "Blue Teaming & Detection",
      "Network Packet Inspection",
      "Digital Forensics (DFIR)",
      "Vulnerability Auditing & CVEs"
    ]
  },
  {
    title: "Security Tooling & Platforms",
    skills: [
      "Burpsuite",
      "Wireshark",
      "Nmap",
      "Nikto",
      "JohnTheRipper",
      "Kali Linux & Parrot OS"
    ]
  },
  {
    title: "Development & Systems",
    skills: [
      "Python",
      "TypeScript",
      "React",
      "PHP",
      "SQL",
      "RESTful APIs & JSON Schema"
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "capen",
    title: "Certified AppSec Pentester (CAPen)",
    subtitle: "Passed with Merit Distinction",
    issuer: "The SecOps Group / PentestingExams.com",
    date: "Aug 01, 2026",
    credentialId: "11718086",
    category: "Pentesting & Security",
    badge: "Merit Distinction 🛡️",
    image: `${base}certs/cert-01-capen.jpg`,
  },
  {
    id: "cloudstaff-ai-hackathon",
    title: "AI Hackathon 2025",
    subtitle: "Shelter Finder - Disaster Coordination & Relief System",
    issuer: "Cloudstaff",
    date: "Nov 25, 2025",
    category: "Hackathons & CTFs",
    badge: "Hackathon",
    image: `${base}certs/cert-02-cloudstaff-hackathon.jpg`,
  },
  {
    id: "dict-hack4gov-2025",
    title: "HackForGov 2025 Region 3",
    subtitle: "Regional CTF - Team Exploit Unit (CCA)",
    issuer: "DICT & NCERT",
    date: "Dec 04, 2025",
    category: "Hackathons & CTFs",
    badge: "CTF Competition",
    image: `${base}certs/cert-03-dict-hack4gov.jpg`,
  },
  {
    id: "cisco-ccna1",
    title: "CCNAv7: Introduction to Networks",
    subtitle: "Network Architectures, IPv4/IPv6 & Ethernet Switching",
    issuer: "Cisco Networking Academy",
    date: "Jan 22, 2025",
    category: "Networking (CCNA)",
    badge: "Cisco CCNA",
    image: `${base}certs/cert-04-cisco-ccna1.jpg`,
  },
  {
    id: "cisco-ccna3",
    title: "CCNA: Enterprise Networking, Security, & Automation",
    subtitle: "OSPFv2, ACLs, Network Security, VPNs & RESTful APIs",
    issuer: "Cisco Networking Academy / CCA",
    date: "Jun 27, 2026",
    category: "Networking (CCNA)",
    badge: "Cisco CCNA",
    image: `${base}certs/cert-05-cisco-ccna3.jpg`,
  },
  {
    id: "cisco-ccna2",
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    subtitle: "VLANs, Inter-VLAN Routing, STP, EtherChannel & WLANs",
    issuer: "Cisco Networking Academy / CCA",
    date: "Feb 09, 2026",
    category: "Networking (CCNA)",
    badge: "Cisco CCNA",
    image: `${base}certs/cert-06-cisco-ccna2.jpg`,
  },
  {
    id: "ched-ai-literacy",
    title: "Introduction to AI Literacy & Responsible Use",
    subtitle: "Foundational AI Competencies & Responsible Implementation",
    issuer: "CHED & Mapúa University",
    date: "Sep 14, 2026",
    category: "Linux & AI",
    badge: "AI Literacy",
    image: `${base}certs/cert-07-ched-ai-literacy.jpg`,
  },
  {
    id: "cisco-ethical-hacker",
    title: "Ethical Hacker",
    subtitle: "Penetration Testing, Reconnaissance & Vulnerability Assessment",
    issuer: "Cisco Networking Academy",
    date: "May 28, 2026",
    category: "Pentesting & Security",
    badge: "Ethical Hacking",
    image: `${base}certs/cert-08-cisco-ethical-hacker.jpg`,
  },
  {
    id: "devcon-convergence-1",
    title: "Convergence I: Inside the Mind of a Penetration Tester",
    subtitle: "Adversary Mindset, Attack Vectors & Penetration Testing",
    issuer: "DEVCON Pampanga",
    date: "Jul 18, 2026",
    category: "Pentesting & Security",
    badge: "DEVCON Seminar",
    image: `${base}certs/cert-09-devcon-convergence-1.jpg`,
  },
  {
    id: "devcon-convergence-2",
    title: "Convergence II: Operation Deep Dive",
    subtitle: "Operational DFIR, Advanced Diagnostics & Security Analysis",
    issuer: "DEVCON Pampanga",
    date: "Jul 18, 2026",
    category: "Pentesting & Security",
    badge: "DEVCON Seminar",
    image: `${base}certs/cert-10-devcon-convergence-2.jpg`,
  },
  {
    id: "devcon-convergence-3",
    title: "Convergence III: From Policy to People",
    subtitle: "Governance, Risk & Compliance (GRC) & The Human Side of Cyber Risk",
    issuer: "DEVCON Pampanga",
    date: "Jul 18, 2026",
    category: "Pentesting & Security",
    badge: "DEVCON Seminar",
    image: `${base}certs/cert-11-devcon-convergence-3.jpg`,
  },
  {
    id: "linux-secure-ai-ml",
    title: "Secure AI/ML-Driven Software Development",
    subtitle: "OpenSSF Secure Pipeline & AI/ML Software Integrity (LFEL1012)",
    issuer: "The Linux Foundation & OpenSSF",
    date: "Oct 31, 2025",
    credentialId: "LFEL1012",
    category: "Linux & AI",
    badge: "Linux Foundation",
    image: `${base}certs/cert-12-linux-secure-ai-ml.jpg`,
  },
  {
    id: "linux-security-self-assessments",
    title: "Security Self-Assessments for Open Source Projects",
    subtitle: "Threat Modeling, Vulnerability Mitigation & OpenSSF Standards (LFEL1005)",
    issuer: "The Linux Foundation & OpenSSF",
    date: "Nov 02, 2025",
    credentialId: "LFEL1005",
    category: "Linux & AI",
    badge: "Linux Foundation",
    image: `${base}certs/cert-13-linux-security-self-assessments.jpg`,
  },
  {
    id: "linux-cybersecurity-essentials",
    title: "Cybersecurity Essentials",
    subtitle: "Core Enterprise Defensive Protocols & Threat Mitigation (LFC108)",
    issuer: "The Linux Foundation",
    date: "Oct 30, 2025",
    credentialId: "LFC108",
    category: "Pentesting & Security",
    badge: "Linux Foundation",
    image: `${base}certs/cert-14-linux-cybersecurity-essentials.jpg`,
  },
];

export const LAB_ACTIVITIES: LabActivity[] = [
  {
    id: "lab-1",
    title: "Data Preparation and Cleaning Demo",
    period: "Feb 2026",
    category: "Midterms",
    description: "Removing duplicates, managing null fields, and validating structured pipeline integrity.",
    tags: ["Data Cleaning", "Integrity"],
    viewUrl: "https://drive.google.com/file/d/1dzijSED-VdtOUzmtVxoQAD5VA2Q7VpDx/view?usp=sharing"
  },
  {
    id: "lab-2",
    title: "Advanced Excel Logic & Automation",
    period: "Feb 2026",
    category: "Midterms",
    description: "Complex formulas, conditional computations, and automated calculation models.",
    tags: ["Excel", "Logic Automation"],
    viewUrl: "https://drive.google.com/file/d/1XjIwwaNywi7pepuspKm557ieyriT3b8K/view?usp=sharing"
  },
  {
    id: "lab-3",
    title: "Interactive Dashboards & Telemetry",
    period: "Feb 2026",
    category: "Midterms",
    description: "Multi-dimensional slicers, PivotTables, and dynamic charting for operational telemetry.",
    tags: ["Dashboards", "Telemetry"],
    viewUrl: "https://drive.google.com/file/d/1Gu9tnrXHQn7AOI99oWBoJKXQRQHEHHY8/view?usp=sharing"
  },
  {
    id: "lab-4",
    title: "Power Query ETL Pipeline",
    period: "Mar 2026",
    category: "Midterms",
    description: "Schema normalization, ETL pipeline transformation, and multi-source dataset merging.",
    tags: ["Power Query", "ETL"],
    viewUrl: "https://drive.google.com/file/d/1uF3u0zWq-137aBwH11Fsh36xSgL45q1i/view?usp=sharing"
  },
  {
    id: "lab-5",
    title: "SQL Data Analysis in MySQL Workbench",
    period: "Apr 2026",
    category: "Finals",
    description: "Relational queries, index optimization, and anomaly investigations on structured databases.",
    tags: ["MySQL", "SQL Queries"],
    viewUrl: "https://drive.google.com/file/d/1B98v9qR9jR6P6sM27T_p8rA7H4xL9z3/view?usp=sharing"
  },
  {
    id: "lab-6",
    title: "Power BI Modeling & Reports",
    period: "Apr 2026",
    category: "Finals",
    description: "Star-schema relational design, DAX time intelligence, and interactive analytical reporting.",
    tags: ["Power BI", "Data Modeling"],
    viewUrl: "https://drive.google.com/file/d/1vC3z6j20pZ55yW7rT4e9qU1p3M6b9X2/view?usp=sharing"
  }
];

export const TERMINAL_PRESETS: Record<string, string[]> = {
  whoami: [
    "ivan@cca-secbox:~$ whoami",
    "John Ivan Miranda (janayban) • Cybersecurity Enthusiast & BSCS Student",
    "Institution : City College of Angeles (Pampanga, PH)",
    "Focus       : Red Teaming | Blue Teaming | Web AppSec | GRC"
  ],
  stack: [
    "ivan@cca-secbox:~$ cat /etc/toolchain.conf",
    "SECURITY    : Burpsuite, Wireshark, Nmap, Nikto, JohnTheRipper",
    "DEVELOPMENT : Python, Typescript, React, PHP, SQL",
    "SYSTEMS     : Kali Linux, Ubuntu Server, Docker, Git"
  ],
  status: [
    "ivan@cca-secbox:~$ security-ctl status",
    "STATUS      : Available for security roles & internships"
  ],
  certs: [
    "ivan@cca-secbox:~$ list-certs --verified",
    "[AWARD] Cisco Ethical Hacker CTF Champion (1st Place)",
    "[AWARD] Hack4Gov Regional Capture The Flag Finalist",
    "[BADGE] Cisco Cybersecurity Essentials",
    "[BADGE] Credly Security Self-Assessments",
    "[BADGE] Secure AI/ML Software Certification"
  ],
  contact: [
    "ivan@cca-secbox:~$ cat /etc/endpoints",
    "EMAIL       : johnivanmiranda1020@gmail.com",
    "GITHUB      : https://github.com/janayban",
    "LINKEDIN    : https://www.linkedin.com/in/john-ivan-miranda-8082733a4/"
  ]
};
