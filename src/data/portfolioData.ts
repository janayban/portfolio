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
  resumeUrl: "/docs/MIRANDA-CV.pdf",
  securityTxtUrl: "/.well-known/security.txt",
  image: "/images/profile-formal.jpg",
};

export const PROJECTS: Project[] = [
  {
    id: "notecode",
    title: "NoteCode",
    tagline: "Air-gapped Android note management system with secure QR transfer",
    description: "Native Android application built with Java and Android Studio. Features a zero-network air-gap QR transmission protocol allowing users to share encrypted notes between isolated physical devices without Wi-Fi, Bluetooth, or cellular connectivity.",
    tags: ["Android", "Java", "Air-Gap Protocol", "Local SQLite", "Input Sanitization"],
    category: "Web & Systems",
    githubUrl: "https://github.com/janayban",
    image: "/images/notecode.jpg",
    featured: true,
    securityControls: [
      "Zero network permissions required in AndroidManifest",
      "Sanitized chunked QR payload verification",
      "Isolated local SQLite storage with schema boundaries"
    ]
  },
  {
    id: "netscan",
    title: "NetSentinel CLI",
    tagline: "High-speed multi-threaded reconnaissance & service fingerprinting suite",
    description: "Tactical network auditing CLI built with Python and low-level socket APIs. Implements non-blocking TCP SYN/Connect scanning heuristics, automated service banner interrogation, and machine-parseable JSON audit logging for penetration tests.",
    tags: ["Python 3", "Socket API", "Network Recon", "CVE Mapping", "Threading"],
    category: "Security",
    githubUrl: "https://github.com/janayban",
    image: "/images/cisco1.png",
    featured: true,
    securityControls: [
      "Configurable timeout & rate-limiting to prevent network disruption",
      "Automated HTTP / SSH / FTP banner extraction",
      "Structured JSON / CSV report generation for SOC pipelines"
    ]
  },
  {
    id: "trimclick",
    title: "TrimClick Portal",
    tagline: "Appointment scheduling platform with Role-Based Access Control (RBAC)",
    description: "Full-stack appointment and client management portal. Implements robust defensive web security principles: parameterized PDO queries to eliminate SQL injection, CSRF token validation on sensitive state changes, and session fixation defenses.",
    tags: ["PHP", "MySQL", "JavaScript", "RBAC", "OWASP Defenses", "Bootstrap"],
    category: "Web & Systems",
    githubUrl: "https://github.com/janayban",
    image: "/images/trimclick.jpg",
    featured: true,
    securityControls: [
      "Prepared statements preventing SQL Injection (OWASP CWE-89)",
      "Cryptographic CSRF token verification per session form",
      "Strict role separation between customer and administrative endpoints"
    ]
  },
  {
    id: "oras",
    title: "ORAS Registrar Queue",
    tagline: "University registrar queue & appointment manager with access verification",
    description: "Institutional appointment booking and student queue manager developed in Python Tkinter with structured SQLite persistence, student token verification, and administrative audit trails.",
    tags: ["Python", "Tkinter", "SQLite", "Access Control"],
    category: "Web & Systems",
    githubUrl: "https://github.com/janayban",
    image: "/images/oras.jpg",
    featured: false,
    securityControls: [
      "Strict regex validation on student identification tokens",
      "Partitioned administrative views and queue telemetry",
      "Tamper-resistant local database logging"
    ]
  },
  {
    id: "logguard",
    title: "LogGuard Forensics",
    tagline: "Lightweight SIEM log ingestion engine with sigma-inspired detection rules",
    description: "Rule-based security log parser analyzing authentication events, Apache/Nginx web access records, and firewall traffic to isolate brute-force clustering and path traversal attempts.",
    tags: ["Python", "DFIR", "SIEM Rules", "Regex", "Threat Detection"],
    category: "Security",
    githubUrl: "https://github.com/janayban",
    image: "/images/fp.jpg",
    featured: false,
    securityControls: [
      "Automated detection of HTTP 401/403 brute force bursts",
      "Directory traversal (../) and SQLi payload pattern matching",
      "Exportable incident report timeline"
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
      "Vulnerability Auditing & CVEs",
      "Threat Modeling (STRIDE)",
      "Linux System Hardening"
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
      "Kali Linux & Parrot OS",
      "Docker Container Security",
      "Git & Secure CI/CD"
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
      "Astro 5 & Tailwind CSS",
      "Bash & POSIX Shell",
      "RESTful APIs & JSON Schema"
    ]
  }
];

export const CERTIFICATIONS = [
  { title: "Cybersecurity Essentials", issuer: "Cisco Networking Academy", file: "/images/badge1.png" },
  { title: "Security Self-Assessments", issuer: "Credly Verified", file: "/images/badge2.png" },
  { title: "Secure AI/ML Software", issuer: "Advanced DevSecOps", file: "/images/badge3.png" },
  { title: "AI Integration Systems", issuer: "Industry Alignment", file: "/images/badge4.png" },
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
