<script>
  import ProjectCard from './ProjectCard.svelte';
  import { projects } from '../data/projects.js';
</script>

<section id="projects">
  <div class="container">
    <span class="section-label reveal">Work</span>
    <h2 class="reveal" style="transition-delay: 60ms">Recent Projects</h2>
    <div class="divider reveal" style="transition-delay: 100ms"></div>

    <p class="section-intro reveal" style="transition-delay: 140ms">
      A collection of what I've been shipping — mostly in Rust, mostly at the edge of where AI
      meets systems programming. Plus a client site that's live in production.
    </p>

    <div class="projects-grid">
      {#each projects as project, i}
        <div class="reveal" style="transition-delay: {200 + i * 60}ms">
          <ProjectCard {project} />
        </div>
      {/each}
    </div>

    <div class="projects-footer reveal" style="transition-delay: 600ms">
      <a
        href="https://github.com/JohnnytheShark"
        target="_blank"
        rel="noopener noreferrer"
        id="view-all-github"
        class="btn btn-outline"
      >
        View All on GitHub
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M7 7h10v10"/></svg>
      </a>
    </div>
  </div>
</section>

<style>
  .section-intro {
    max-width: 60ch;
    margin-bottom: var(--space-lg);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-md);
  }

  .projects-footer {
    margin-top: var(--space-lg);
    display: flex;
    justify-content: center;
  }

  @media (max-width: 960px) {
    .projects-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 580px) {
    .projects-grid { grid-template-columns: 1fr; }
  }
</style>
