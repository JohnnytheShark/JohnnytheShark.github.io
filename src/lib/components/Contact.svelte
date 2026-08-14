<section id="contact" class="contact-section">
  <div class="container">
    <div class="contact-inner">
      <span class="section-label reveal">Contact</span>
      <h2 class="reveal" style="transition-delay: 60ms">Let's Build Something.</h2>
      <div class="divider reveal" style="transition-delay: 100ms"></div>

      <p class="contact-subtext reveal" style="transition-delay: 140ms">
        I'm open to senior engineering roles, consulting engagements, and interesting technical
        conversations. If you're building something serious, I'd like to hear about it.
      </p>

      <div class="contact-actions reveal" style="transition-delay: 200ms">
        <a
          href="mailto:orellanajonathan7@gmail.com"
          class="btn btn-primary"
          id="contact-email-btn"
          rel="noopener noreferrer"
        >
          Send an Email
        </a>
        <a
          href="/Resume-1.pdf"
          download="Jonathan_Orellana_Resume.pdf"
          class="btn btn-outline"
          id="contact-resume-btn"
        >
          Download Resume
        </a>
      </div>

      <div class="contact-links reveal" style="transition-delay: 280ms">
        <a
          href="https://github.com/JohnnytheShark"
          target="_blank"
          rel="noopener noreferrer"
          id="contact-github"
          class="contact-social"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jonathan-orellana/"
          target="_blank"
          rel="noopener noreferrer"
          id="contact-linkedin"
          class="contact-social"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          LinkedIn
        </a>
        <a
          href="https://store.steampowered.com/app/3528440/Shrimp_Escape/"
          target="_blank"
          rel="noopener noreferrer"
          id="contact-steam"
          class="contact-social"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
          Shrimp Escape
        </a>
      </div>
    </div>
  </div>

  <footer class="footer">
    <div class="container">
      <p class="footer-text">© 2026 Jonathan Orellana · Built with Svelte · Deployed on GitHub Pages</p>
    </div>
  </footer>
</section>

<style>
  .contact-section {
    position: relative;
    background: rgba(255,255,255,0.012);
    border-top: 1px solid var(--border);
  }

  .contact-inner {
    max-width: 640px;
    text-align: center;
    margin: 0 auto;
  }

  .contact-inner .section-label,
  .contact-inner h2,
  .contact-inner .divider {
    margin-left: auto;
    margin-right: auto;
  }

  .contact-inner .divider {
    margin: var(--space-sm) auto var(--space-md);
  }

  .contact-subtext {
    font-size: 1.05rem;
    line-height: 1.75;
    color: var(--text-muted);
    max-width: 52ch;
    margin: 0 auto var(--space-md);
    text-align: center;
  }

  .contact-actions {
    display: flex;
    justify-content: center;
    gap: var(--space-sm);
    flex-wrap: wrap;
    margin-bottom: var(--space-lg);
  }

  .contact-links {
    display: flex;
    justify-content: center;
    gap: var(--space-md);
    flex-wrap: wrap;
  }

  .contact-social {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-muted);
    text-decoration: none;
    letter-spacing: 0.04em;
    padding: 0.5rem 0;
    border-bottom: 1px solid transparent;
    transition: color var(--duration-fast) var(--ease),
                border-color var(--duration-fast) var(--ease);
  }

  .contact-social:hover {
    color: var(--accent);
    border-bottom-color: var(--accent);
  }

  .footer {
    margin-top: var(--space-xl);
    padding: var(--space-md) 0;
    border-top: 1px solid var(--border);
  }

  .footer-text {
    font-size: 0.78rem;
    color: var(--text-subtle);
    text-align: center;
    letter-spacing: 0.05em;
    max-width: none;
  }

  @media (max-width: 480px) {
    .contact-links { gap: var(--space-sm); }
  }
</style>
