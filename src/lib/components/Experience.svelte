<script>
  const experiences = [
    {
      company: 'The Home Depot',
      title: 'Software Engineer II',
      period: '2023 — Present',
      location: 'Atlanta, GA',
      bullets: [
        'Design and develop scalable software solutions within a large-scale enterprise environment, collaborating across engineering, product, and business teams.',
        'Architect and implement features across the full stack, owning code from requirements through deployment and monitoring.',
        'Drive modernization efforts on critical internal tools, improving developer experience and operational reliability.',
        'Contribute to code reviews, technical design sessions, and mentorship of junior engineers.',
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
</script>

<section id="experience">
  <div class="container">
    <span class="section-label reveal">Experience</span>
    <h2 class="reveal" style="transition-delay: 60ms">Where I've Built</h2>
    <div class="divider reveal" style="transition-delay: 100ms"></div>

    <div class="timeline">
      {#each experiences as exp, i}
        <article class="timeline-item reveal" style="transition-delay: {150 + i * 80}ms">
          <div class="timeline-marker" aria-hidden="true">
            <span class="marker-dot"></span>
            <span class="marker-line"></span>
          </div>
          <div class="timeline-content">
            <div class="exp-header">
              <div class="exp-meta">
                <h3 class="exp-title">{exp.title}</h3>
                <span class="exp-company">{exp.company}</span>
              </div>
              <div class="exp-details">
                <span class="exp-period tag">{exp.period}</span>
                <span class="exp-location">{exp.location}</span>
              </div>
            </div>
            <ul class="exp-bullets">
              {#each exp.bullets as bullet}
                <li>{bullet}</li>
              {/each}
            </ul>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .timeline {
    margin-top: var(--space-lg);
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .timeline-item {
    display: grid;
    grid-template-columns: 28px 1fr;
    gap: 1.5rem;
    padding-bottom: var(--space-lg);
  }

  .timeline-marker {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0.3rem;
  }

  .marker-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--accent);
    border: 2px solid var(--bg-dark);
    box-shadow: 0 0 0 2px var(--accent);
    flex-shrink: 0;
    transition: box-shadow var(--duration-normal) var(--ease);
  }

  .timeline-item:hover .marker-dot {
    box-shadow: 0 0 0 4px rgba(202, 219, 200, 0.25);
  }

  .marker-line {
    flex: 1;
    width: 1px;
    background: var(--border);
    margin-top: 8px;
  }

  .timeline-item:last-child .marker-line { display: none; }

  .timeline-content {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    padding: var(--space-md);
    transition: border-color var(--duration-normal) var(--ease),
                background var(--duration-normal) var(--ease),
                transform var(--duration-normal) var(--ease);
  }

  .timeline-content:hover {
    border-color: var(--border-accent);
    background: var(--bg-card-hover);
    transform: translateX(4px);
  }

  .exp-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: var(--space-sm);
    margin-bottom: var(--space-sm);
    flex-wrap: wrap;
  }

  .exp-title {
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.2rem;
  }

  .exp-company {
    font-size: 0.88rem;
    font-weight: 500;
    color: var(--accent);
    letter-spacing: 0.04em;
  }

  .exp-details {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.4rem;
  }

  .exp-period {
    white-space: nowrap;
  }

  .exp-location {
    font-size: 0.72rem;
    color: var(--text-subtle);
    letter-spacing: 0.06em;
  }

  .exp-bullets {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .exp-bullets li {
    position: relative;
    padding-left: 1.25rem;
    font-size: 0.93rem;
    line-height: 1.7;
    color: var(--text-muted);
  }

  .exp-bullets li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--accent);
    font-size: 0.8rem;
    top: 0.1rem;
    opacity: 0.7;
  }

  @media (max-width: 640px) {
    .timeline-item { grid-template-columns: 20px 1fr; gap: 1rem; }
    .exp-header { flex-direction: column; }
    .exp-details { align-items: flex-start; }
  }
</style>
