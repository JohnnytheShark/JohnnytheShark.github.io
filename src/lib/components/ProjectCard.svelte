<script>
  export let project;
</script>

<article class="project-card" id="project-{project.id}">
  {#if project.featured}
    <span class="featured-badge" aria-label="Featured project">Featured</span>
  {/if}

  <div class="card-header">
    <svg class="card-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 3h18v18H3z" opacity="0.15"/>
      <path d="M9 8l3 3-3 3M13 14h3"/>
    </svg>
    <h3 class="card-name">{project.name}</h3>
    <span class="card-year">{project.year}</span>
  </div>

  <p class="card-tagline">{project.tagline}</p>
  <p class="card-description">{project.description}</p>

  <div class="card-stack">
    {#each project.stack as tech}
      <span class="tag">{tech}</span>
    {/each}
  </div>

  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    class="card-link"
    id="project-link-{project.id}"
    aria-label="View {project.name} project"
  >
    View Project
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M7 7h10v10"/>
    </svg>
  </a>
</article>

<style>
  .project-card {
    position: relative;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    padding: var(--space-md);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    transition: border-color var(--duration-normal) var(--ease),
                background var(--duration-normal) var(--ease),
                transform var(--duration-normal) var(--ease),
                box-shadow var(--duration-normal) var(--ease);
  }

  .project-card:hover {
    border-color: var(--border-accent);
    background: var(--bg-card-hover);
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  }

  .featured-badge {
    position: absolute;
    top: -1px;
    right: 1.25rem;
    background: var(--accent);
    color: var(--bg-dark);
    font-family: var(--font-body);
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.25rem 0.65rem;
    border-radius: 0 0 var(--radius-sm) var(--radius-sm);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 0.65rem;
  }

  .card-icon {
    color: var(--accent);
    flex-shrink: 0;
    opacity: 0.7;
  }

  .card-name {
    font-family: var(--font-display);
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: 0.04em;
    flex: 1;
    line-height: 1.2;
  }

  .card-year {
    font-size: 0.72rem;
    color: var(--text-subtle);
    letter-spacing: 0.08em;
    white-space: nowrap;
  }

  .card-tagline {
    font-family: var(--font-display);
    font-size: 0.78rem;
    font-weight: 400;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent);
    max-width: none;
  }

  .card-description {
    font-size: 0.9rem;
    line-height: 1.65;
    color: var(--text-muted);
    flex: 1;
    max-width: none;
  }

  .card-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .card-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
    text-decoration: none;
    margin-top: auto;
    padding-top: 0.5rem;
    border-top: 1px solid var(--border);
    transition: color var(--duration-fast) var(--ease),
                border-color var(--duration-fast) var(--ease);
  }

  .card-link:hover {
    color: var(--accent);
    border-top-color: var(--border-accent);
  }

  .card-link svg {
    transition: transform var(--duration-fast) var(--ease);
  }

  .card-link:hover svg {
    transform: translate(2px, -2px);
  }
</style>
