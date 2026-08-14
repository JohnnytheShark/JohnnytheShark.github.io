export const experiences = [
  {
    company: 'The Home Depot',
    title: 'Software Engineer II',
    period: '2024 — Present',
    location: 'Atlanta, GA',
    bullets: [
      'Engineered cloud-native backend services for retail and supply-chain platforms using Java, Spring Boot, GCP (GKE, Cloud Run), and Apache Airflow — orchestrating pipelines that process millions of inventory records daily to drive warehouse replenishment decisions across seasonal demand cycles.',
      'Designed and maintained event-driven data workflows using Kafka, Pub/Sub, BigQuery, and SQL, enabling near-real-time operational reporting and downstream decision-making at enterprise scale.',
      'Increased engineering velocity and production stability by refactoring legacy components, expanding automated test coverage, and hardening CI/CD pipelines — delivering safer, fully automated deployments to production.',
    ],
  },
  {
    company: 'Norfolk Southern',
    title: 'Systems Analyst',
    period: '2021 — 2024',
    location: 'Atlanta, GA',
    bullets: [
      'Rebuilt and modernized critical internal applications (time clock, ticketing system, check inventory, security console) using a full-stack approach (ASP.Net, MS SQL, React) to enhance functionality, streamline workflows, and improve user experience across departments.',
      'Automated daily SOX control process using RPA to reconcile inbound/outbound charges between internal systems and SAP, ensuring data integrity for KPMG audits.',
      'Automated quarterly SOX lease accounting survey using Microsoft PowerApps and SharePoint, eliminating manual form rebuilding and streamlining data collection and distribution.',
      'Automated permission requests and Active Directory (AD) tasks by developing PowerShell scripts, streamlining processes and reducing the time needed for user management.',
    ],
  },
  {
    company: 'Norfolk Southern',
    title: 'Business Analyst',
    period: '2019 — 2021',
    location: 'Atlanta, GA',
    bullets: [
      'Developed and deployed an automated ETL pipeline using Alteryx and Python to identify and apply over $15 million in unidentified customer funds daily — extracting remittance data from disparate sources (PDFs, emails, CSVs), matching against invoices in DB2, and eliminating hours of manual research per analyst per day.',
      'Led a $150,000 annual efficiency improvement by leveraging Spotfire and Alteryx to streamline cash application processes, reducing manual staffing needs.',
      'Empowered colleagues by mentoring staff in Python coding and regular expressions (regex) to facilitate the development of an ETL process for cleaning customer remittances, improving data accuracy and efficiency.',
    ],
  },
];

export const skillGroups = [
  {
    label: 'Languages',
    skills: ['Rust', 'Python', 'JavaScript', 'TypeScript', 'C#', 'SQL'],
  },
  {
    label: 'Frontend',
    skills: ['Svelte', 'React', 'HTML/CSS', 'Vite'],
  },
  {
    label: 'Backend & APIs',
    skills: ['ASP.NET', 'Django', 'Node.js', 'REST APIs', 'MCP Protocol'],
  },
  {
    label: 'Data & Automation',
    skills: ['Apache Airflow', 'Alteryx', 'Teradata', 'MS SQL Server', 'DB2', 'SQLite', 'ETL Pipelines', 'BigQuery'],
  },
  {
    label: 'Cloud & DevOps',
    skills: ['GCP', 'Docker', 'GitHub Actions', 'Azure', 'PowerApps', 'SharePoint'],
  },
  {
    label: 'AI & Tooling',
    skills: ['MCP Servers', 'AI Agent Harnesses', 'LLM Integration', 'SQLite FTS5', 'CLI Tools'],
  },
];
