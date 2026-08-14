<section id="beyond">
  <div class="container">
    <span class="section-label reveal">Beyond Code</span>
    <h2 class="reveal" style="transition-delay: 60ms">The Full Picture</h2>
    <div class="divider reveal" style="transition-delay: 100ms"></div>

    <div class="beyond-grid">
      <!-- Game Dev Card -->
      <article class="beyond-card reveal" style="transition-delay: 160ms" id="beyond-game">
        <div class="beyond-icon" aria-hidden="true">🎮</div>
        <div class="beyond-content">
          <h3>Indie Game Developer</h3>
          <p>
            I launched <strong>Shrimp Escape</strong> on Steam — a fully released indie game, built
            and shipped independently. Game development keeps me sharp on creative problem-solving,
            performance engineering, and shipping something that real people actually play.
          </p>
          <a
            href="https://store.steampowered.com/app/3528440/Shrimp_Escape/"
            target="_blank"
            rel="noopener noreferrer"
            id="steam-link"
            class="beyond-link"
          >
            Play Shrimp Escape on Steam
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </a>
        </div>
      </article>

      <!-- Mentoring Card -->
      <article class="beyond-card reveal" style="transition-delay: 240ms" id="beyond-mentor">
        <div class="beyond-icon" aria-hidden="true">🧭</div>
        <div class="beyond-content">
          <h3>Mentoring Engineers</h3>
          <p>
            I actively mentor individuals who are growing in software engineering — helping them
            navigate their first roles, sharpen their technical instincts, and build confidence. It's
            where 7 years of hard-won experience compounds into something bigger than any single codebase.
          </p>
        </div>
      </article>

      <!-- Continuous Learning Card -->
      <article class="beyond-card reveal" style="transition-delay: 320ms" id="beyond-learning">
        <div class="beyond-icon" aria-hidden="true">⚙️</div>
        <div class="beyond-content">
          <h3>Always in the Build</h3>
          <p>
            Outside of work, I'm building. The projects on this site — MCP servers, AI agent harnesses,
            local LLM clients — are what I do at night and on weekends because they're interesting,
            not because anyone asked. That's the kind of engineer I am.
          </p>
        </div>
      </article>
    </div>
  </div>
</section>

<style>
  .beyond-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-md);
    margin-top: var(--space-lg);
  }

  .beyond-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    padding: var(--space-md);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: border-color var(--duration-normal) var(--ease),
                transform var(--duration-normal) var(--ease),
                background var(--duration-normal) var(--ease);
  }

  .beyond-card:hover {
    border-color: var(--border-accent);
    transform: translateY(-4px);
    background: var(--bg-card-hover);
  }

  .beyond-icon {
    font-size: 2rem;
    line-height: 1;
  }

  .beyond-content {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .beyond-content h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
  }

  .beyond-content p {
    font-size: 0.92rem;
    line-height: 1.7;
    max-width: none;
  }

  .beyond-content p strong {
    color: var(--text-primary);
    font-weight: 500;
  }

  .beyond-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--accent);
    text-decoration: none;
    margin-top: 0.5rem;
    transition: color var(--duration-fast) var(--ease);
  }

  .beyond-link:hover { color: var(--text-primary); }

  .beyond-link svg {
    transition: transform var(--duration-fast) var(--ease);
  }

  .beyond-link:hover svg {
    transform: translate(2px, -2px);
  }

  @media (max-width: 900px) {
    .beyond-grid { grid-template-columns: 1fr; max-width: 560px; }
  }
</style>
