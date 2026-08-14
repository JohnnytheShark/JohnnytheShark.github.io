<script>
  import { skillGroups } from '../data/profile.js';
</script>

<section id="skills" class="skills-section">
  <div class="container">
    <span class="section-label reveal">Capabilities</span>
    <h2 class="reveal" style="transition-delay: 60ms">Skills & Technologies</h2>
    <div class="divider reveal" style="transition-delay: 100ms"></div>

    <div class="skills-grid">
      {#each skillGroups as group, i}
        <div class="skill-group reveal" style="transition-delay: {160 + i * 60}ms">
          <h4 class="group-label">{group.label}</h4>
          <div class="skill-list">
            {#each group.skills as skill}
              <span class="skill-pill">{skill}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .skills-section {
    background: rgba(255,255,255,0.015);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-md);
    margin-top: var(--space-lg);
  }

  .skill-group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .group-label {
    font-family: var(--font-display);
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);
    border-bottom: 1px solid var(--border);
    padding-bottom: 0.5rem;
    margin-bottom: 0.25rem;
  }

  .skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .skill-pill {
    display: inline-block;
    padding: 0.3rem 0.75rem;
    background: rgba(160, 160, 153, 0.08);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    font-size: 0.8rem;
    font-family: var(--font-body);
    color: var(--text-muted);
    letter-spacing: 0.03em;
    transition: background var(--duration-fast) var(--ease),
                color var(--duration-fast) var(--ease),
                border-color var(--duration-fast) var(--ease);
    cursor: default;
  }

  .skill-pill:hover {
    background: rgba(202, 219, 200, 0.12);
    border-color: var(--border-accent);
    color: var(--text-primary);
  }

  @media (max-width: 900px) {
    .skills-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 560px) {
    .skills-grid { grid-template-columns: 1fr; }
  }
</style>
