<section id="philosophy">
  <div class="container">
    <span class="section-label reveal">Engineering Philosophy</span>
    <h2 class="reveal" style="transition-delay: 60ms">How I Work</h2>
    <div class="divider reveal" style="transition-delay: 100ms"></div>

    <p class="section-intro reveal" style="transition-delay: 140ms">
      Software fails at the edges of process. Here is the system I use to prevent that —
      from the first conversation with a stakeholder to production deployment.
    </p>

    <div class="philosophy-grid">

      <article class="philosophy-card reveal" style="transition-delay: 180ms">
        <div class="card-step">01</div>
        <div class="card-body">
          <h3>Destroy Ambiguity</h3>
          <p>
            Before a single line of code is written, I define the exact success state and failure
            state of the problem. Vague requirements are the root cause of technical debt. I treat
            ambiguity as the primary risk — not the deadline, not the technology.
          </p>
        </div>
      </article>

      <article class="philosophy-card reveal" style="transition-delay: 260ms">
        <div class="card-step">02</div>
        <div class="card-body">
          <h3>AI-Assisted Architecture</h3>
          <p>
            I leverage LLMs to rapidly pressure-test solutions and synthesize technical documentation
            using the Diataxis framework. The goal is a sound architecture that lives in writing
            before a single line of production code is committed.
          </p>
        </div>
      </article>

      <article class="philosophy-card reveal" style="transition-delay: 340ms">
        <div class="card-step">03</div>
        <div class="card-body">
          <h3>Agentic Tooling</h3>
          <p>
            When off-the-shelf tools fail, I build purpose-built internal tooling. I write
            Model Context Protocol (MCP) servers in Rust that bridge the gap between LLM reasoning
            and real-world execution environments — turning hours of manual work into automated,
            repeatable workflows.
          </p>
        </div>
      </article>

      <article class="philosophy-card reveal" style="transition-delay: 420ms">
        <div class="card-step">04</div>
        <div class="card-body">
          <h3>Rigorous Refinement</h3>
          <p>
            Every system gets audited for security, compliance, and operational hygiene before it
            ships. Code must fail loudly and pass silently. I don't hand off a system I wouldn't
            own at 3am during an incident.
          </p>
        </div>
      </article>

    </div>
  </div>
</section>

<style>
  #philosophy {
    background: rgba(255, 255, 255, 0.012);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .section-intro {
    max-width: 60ch;
    margin-bottom: var(--space-lg);
  }

  .philosophy-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-md);
  }

  .philosophy-card {
    display: grid;
    grid-template-columns: 3rem 1fr;
    gap: 1.5rem;
    padding: var(--space-md);
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    transition: border-color var(--duration-normal) var(--ease),
                background var(--duration-normal) var(--ease),
                transform var(--duration-normal) var(--ease);
    align-items: start;
  }

  .philosophy-card:hover {
    border-color: var(--border-accent);
    background: var(--bg-card-hover);
    transform: translateY(-3px);
  }

  .card-step {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 700;
    color: var(--accent);
    opacity: 0.35;
    line-height: 1;
    padding-top: 0.2rem;
    letter-spacing: -0.02em;
    transition: opacity var(--duration-normal) var(--ease);
  }

  .philosophy-card:hover .card-step {
    opacity: 0.75;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  .card-body h3 {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: 0.02em;
  }

  .card-body p {
    font-size: 0.92rem;
    line-height: 1.72;
    color: var(--text-muted);
    max-width: none;
  }

  @media (max-width: 768px) {
    .philosophy-grid {
      grid-template-columns: 1fr;
    }

    .philosophy-card {
      grid-template-columns: 2.5rem 1fr;
      gap: 1rem;
    }

    .card-step {
      font-size: 1.6rem;
    }
  }
</style>
