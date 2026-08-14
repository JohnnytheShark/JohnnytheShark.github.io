export const experiences = [
  {
    company: 'The Home Depot',
    title: 'Software Engineer II',
    period: '2024 — Present',
    location: 'Atlanta, GA',
    bullets: [
      'Developed and supported cloud-native backend services for retail and supply-chain platforms using Java, Spring Boot, REST APIs, and Google Cloud (GKE, Cloud Run), improving system reliability through structured logging, monitoring dashboards, and operational runbooks.',
      'Designed and maintained data integrations and event-driven workflows using Kafka/Pub-Sub, BigQuery, and SQL to process high-volume operational data, enabling near-real-time reporting and more accurate downstream decision-making.',
      'Increased engineering velocity and production stability by refactoring legacy components, expanding automated test coverage, and improving CI/CD pipelines to deliver safer, repeatable, and fully automated deployments.',
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
      'Developed and deployed an automated ETL process using Alteryx and Python to extract, clean, transform, and load remit data ($15 million daily) from various sources into Teradata for matching with invoices in DB2 SQL tables, enabling automated payment application every two hours.',
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
    skills: ['Alteryx', 'Teradata', 'MS SQL Server', 'DB2', 'SQLite', 'ETL Pipelines'],
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
