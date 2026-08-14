<section id="about">
  <div class="container about-grid">
    <div class="about-image-col reveal">
      <div class="portrait-wrap">
        <img
          src="/Portrait.jpg"
          alt="Jonathan Orellana — Senior Software Engineer"
          class="portrait"
          loading="lazy"
          width="360"
          height="420"
        />
        <div class="portrait-frame" aria-hidden="true"></div>
      </div>
    </div>

    <div class="about-text-col">
      <span class="section-label reveal">About</span>
      <h2 class="reveal" style="transition-delay: 80ms">The Engineer Behind the Code</h2>
      <div class="divider reveal" style="transition-delay: 120ms"></div>

      <p class="reveal" style="transition-delay: 160ms">
        I'm a Senior Software Engineer based in Atlanta, GA with seven years of experience across
        the full spectrum of software delivery — web applications, cloud architecture, business process
        automation, and most recently, AI agent tooling.
      </p>

      <p class="reveal" style="transition-delay: 210ms">
        My career has been defined by solving real business problems with technology that
        actually ships. I've automated enterprise accounting workflows processing over 15 million
        records daily, modernized legacy internal systems to serve entire corporate departments,
        and brought client products from concept to live production.
      </p>

      <p class="reveal" style="transition-delay: 260ms">
        Lately I've been building at the intersection of Rust and AI — designing MCP servers,
        agent harnesses, and local LLM tooling. I understand the full system: the architecture
        decisions, the tradeoffs at scale, and the organizational dynamics that make or break
        a team. I mentor engineers because strong teams multiply output. I ship indie games because
        creative ownership sharpens your instinct for what actually matters.
      </p>

      <div class="about-links reveal" style="transition-delay: 320ms">
        <a href="https://github.com/JohnnytheShark" target="_blank" rel="noopener noreferrer" id="about-github-link" class="about-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/jonathan-orellana/" target="_blank" rel="noopener noreferrer" id="about-linkedin-link" class="about-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          LinkedIn
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .about-grid {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 5rem;
    align-items: start;
  }

  .about-image-col {
    position: sticky;
    top: 100px;
  }

  .portrait-wrap {
    position: relative;
    display: inline-block;
  }

  .portrait {
    width: 100%;
    max-width: 300px;
    height: auto;
    display: block;
    border-radius: var(--radius-md);
    object-fit: cover;
    aspect-ratio: 3/4;
    filter: grayscale(20%) contrast(1.05);
    transition: filter var(--duration-slow) var(--ease);
  }

  .portrait:hover { filter: grayscale(0%) contrast(1); }

  .portrait-frame {
    position: absolute;
    inset: -10px -10px 10px 10px;
    border: 1px solid var(--border-accent);
    border-radius: var(--radius-md);
    pointer-events: none;
    z-index: -1;
    opacity: 0.5;
  }

  .about-text-col {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .about-text-col h2 { margin-bottom: 0; }

  .about-text-col p {
    margin-bottom: 1.25rem;
  }

  .about-links {
    display: flex;
    gap: var(--space-md);
    margin-top: var(--space-sm);
    flex-wrap: wrap;
  }

  .about-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    text-decoration: none;
    transition: color var(--duration-fast) var(--ease);
    padding: 0.5rem 0;
    border-bottom: 1px solid transparent;
  }

  .about-link:hover {
    color: var(--accent);
    border-bottom-color: var(--accent);
  }

  @media (max-width: 900px) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }

    .about-image-col {
      position: static;
      display: flex;
      justify-content: center;
    }

    .portrait { max-width: 240px; }
  }

  @media (max-width: 480px) {
    .portrait { max-width: 200px; }
  }
</style>
