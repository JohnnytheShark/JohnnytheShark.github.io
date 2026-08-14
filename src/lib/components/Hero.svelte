<script>
  import { onMount } from 'svelte';
  let mounted = false;
  onMount(() => { setTimeout(() => mounted = true, 100); });
</script>

<section id="hero" class="hero">
  <!-- Subtle texture overlay -->
  <div class="hero-texture" aria-hidden="true">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grain" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="15" cy="15" r="0.8" fill="currentColor" opacity="0.04"/>
          <circle cx="45" cy="15" r="0.5" fill="currentColor" opacity="0.03"/>
          <circle cx="15" cy="45" r="0.6" fill="currentColor" opacity="0.03"/>
          <circle cx="45" cy="45" r="0.9" fill="currentColor" opacity="0.04"/>
          <circle cx="30" cy="30" r="0.4" fill="currentColor" opacity="0.025"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grain)" color="#E2D4B7"/>
    </svg>
  </div>

  <div class="container hero-content" class:mounted>
    <div class="hero-eyebrow reveal" class:visible={mounted}>
      <span class="eyebrow-line"></span>
      <span class="eyebrow-text">Atlanta, GA · Available for senior roles</span>
    </div>

    <h1 class="hero-name reveal" class:visible={mounted} style="transition-delay: 100ms">
      Jonathan<br>Orellana
    </h1>

    <p class="hero-title reveal" class:visible={mounted} style="transition-delay: 200ms">
      Senior Software Engineer
    </p>

    <p class="hero-bio reveal" class:visible={mounted} style="transition-delay: 300ms">
      7 years turning complex business problems into elegant, automated systems —
      from applying <strong>$15M in unidentified funds daily</strong> with a purpose-built ETL pipeline,
      to orchestrating warehouse replenishment pipelines in Airflow and building AI agent tooling in Rust.
    </p>

    <div class="hero-actions reveal" class:visible={mounted} style="transition-delay: 400ms">
      <a href="#contact" class="btn btn-primary" id="hero-contact-btn">Get in Touch</a>
      <a href="#projects" class="btn btn-outline" id="hero-work-btn">View My Work</a>
    </div>

    <div class="hero-stats reveal" class:visible={mounted} style="transition-delay: 500ms">
      <div class="stat">
        <span class="stat-number">7</span>
        <span class="stat-label">Years Experience</span>
      </div>
      <div class="stat-divider" aria-hidden="true"></div>
      <div class="stat">
        <span class="stat-number">$15M+</span>
        <span class="stat-label">Applied Daily</span>
      </div>
      <div class="stat-divider" aria-hidden="true"></div>
      <div class="stat">
        <span class="stat-number">M+</span>
        <span class="stat-label">Records / Pipeline</span>
      </div>
      <div class="stat-divider" aria-hidden="true"></div>
      <div class="stat">
        <span class="stat-number">1</span>
        <span class="stat-label">Game on Steam</span>
      </div>
    </div>
  </div>

  <a href="#about" class="scroll-cue" aria-label="Scroll to About section">
    <span class="scroll-line"></span>
    <span class="scroll-text">Scroll</span>
  </a>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 120px 0 80px;
    overflow: hidden;
  }

  .hero-texture {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    opacity: 0;
    transition: opacity var(--duration-slow) var(--ease);
  }

  .hero-content.mounted { opacity: 1; }

  .hero-eyebrow {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: var(--space-sm);
  }

  .eyebrow-line {
    display: block;
    width: 2.5rem;
    height: 1px;
    background: var(--accent);
    opacity: 0.7;
  }

  .eyebrow-text {
    font-family: var(--font-body);
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-subtle);
  }

  .hero-name {
    font-size: clamp(3.5rem, 10vw, 7rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 0.95;
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
  }

  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(1rem, 2.5vw, 1.4rem);
    font-weight: 300;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: var(--space-md);
  }

  .hero-bio {
    font-size: 1.05rem;
    line-height: 1.75;
    color: var(--text-muted);
    max-width: 56ch;
    margin-bottom: var(--space-md);
  }

  .hero-bio strong {
    color: var(--text-primary);
    font-weight: 500;
  }

  .hero-actions {
    display: flex;
    gap: var(--space-sm);
    flex-wrap: wrap;
    margin-bottom: var(--space-lg);
  }

  .hero-stats {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    flex-wrap: wrap;
    padding-top: var(--space-md);
    border-top: 1px solid var(--border);
    max-width: 580px;
  }

  .stat {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .stat-number {
    font-family: var(--font-display);
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--text-primary);
    line-height: 1;
  }

  .stat-label {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-subtle);
  }

  .stat-divider {
    width: 1px;
    height: 36px;
    background: var(--border);
    flex-shrink: 0;
  }

  .scroll-cue {
    position: absolute;
    bottom: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    animation: scrollBounce 2.5s ease-in-out infinite;
  }

  .scroll-line {
    display: block;
    width: 1px;
    height: 40px;
    background: var(--border-accent);
  }

  .scroll-text {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-subtle);
  }

  @keyframes scrollBounce {
    0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.6; }
    50% { transform: translateX(-50%) translateY(8px); opacity: 1; }
  }

  @media (max-width: 768px) {
    .hero { padding: 100px 0 80px; }
    .hero-stats { gap: var(--space-sm); }
    .stat-divider { display: none; }
    .scroll-cue { display: none; }
  }
</style>
