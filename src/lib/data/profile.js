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
    title: 'Systems Analyst · Software Engineering',
    period: '2019 — 2023',
    location: 'Atlanta, GA',
    bullets: [
      'Developed and deployed an automated ETL pipeline using Alteryx and Python to extract, clean, transform, and load remittance data from multiple source formats (PDFs, emails, CSVs, text files) into Teradata for invoice matching in DB2 — processing over 15 million records daily and enabling automated payment application every two hours.',
      'Rebuilt and modernized critical internal applications — including a time clock system, ticketing platform, check inventory tool, and security console — using ASP.NET, MS SQL Server, and React, improving functionality and UX across Payroll, Miscellaneous Billing, and System Administration departments.',
      'Automated the quarterly SOX lease accounting survey using Microsoft PowerApps and SharePoint, eliminating manual form rebuilding and streamlining compliance data collection and distribution across the enterprise.',
      'Worked at the intersection of software development and business analysis, translating operational requirements into maintainable technical solutions across the logistics and finance domains.',
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
