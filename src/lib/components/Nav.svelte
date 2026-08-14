<script>
  import { onMount } from 'svelte';

  let scrolled = false;
  let menuOpen = false;

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#beyond', label: 'Beyond' },
    { href: '#contact', label: 'Contact' },
  ];

  onMount(() => {
    const handler = () => {
      scrolled = window.scrollY > 40;
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  });

  function closeMenu() {
    menuOpen = false;
  }
</script>

<nav class:scrolled aria-label="Main navigation">
  <div class="nav-inner container">
    <a href="#hero" class="logo" on:click={closeMenu}>
      JO<span class="logo-dot">.</span>
    </a>

    <ul class="nav-links" class:open={menuOpen}>
      {#each navLinks as link}
        <li>
          <a href={link.href} on:click={closeMenu}>{link.label}</a>
        </li>
      {/each}
      <li>
        <a href="/Resume-1.pdf" class="btn btn-outline nav-resume" download="Jonathan_Orellana_Resume.pdf">
          Resume
        </a>
      </li>
    </ul>

    <button
      class="menu-toggle"
      aria-label="Toggle navigation menu"
      aria-expanded={menuOpen}
      on:click={() => menuOpen = !menuOpen}
    >
      <span class="bar" class:rotated={menuOpen}></span>
      <span class="bar" class:hidden={menuOpen}></span>
      <span class="bar" class:rotated-back={menuOpen}></span>
    </button>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    transition: background var(--duration-normal) var(--ease),
                border-color var(--duration-normal) var(--ease),
                box-shadow var(--duration-normal) var(--ease);
    border-bottom: 1px solid transparent;
  }

  nav.scrolled {
    background: rgba(26, 25, 22, 0.92);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom-color: var(--border);
    box-shadow: 0 1px 24px rgba(0,0,0,0.28);
  }

  .nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 68px;
  }

  .logo {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: var(--text-primary);
    text-decoration: none;
    transition: color var(--duration-fast) var(--ease);
  }

  .logo:hover { color: var(--accent); }

  .logo-dot {
    color: var(--accent);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    list-style: none;
  }

  .nav-links a {
    font-family: var(--font-display);
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
    text-decoration: none;
    transition: color var(--duration-fast) var(--ease);
    padding: 0.25rem 0;
    position: relative;
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--accent);
    transition: width var(--duration-normal) var(--ease);
  }

  .nav-links a:hover { color: var(--text-primary); }
  .nav-links a:hover::after { width: 100%; }

  .nav-resume {
    font-size: 0.78rem;
    padding: 0.45rem 1rem;
    margin-left: 0.5rem;
  }

  .menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    width: 36px;
    height: 36px;
  }

  .bar {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--text-primary);
    transition: transform var(--duration-normal) var(--ease),
                opacity var(--duration-fast) var(--ease);
    transform-origin: center;
  }

  .bar.rotated { transform: translateY(7px) rotate(45deg); }
  .bar.hidden { opacity: 0; transform: scaleX(0); }
  .bar.rotated-back { transform: translateY(-7px) rotate(-45deg); }

  @media (max-width: 768px) {
    .menu-toggle { display: flex; }

    .nav-links {
      position: fixed;
      top: 68px;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(26, 25, 22, 0.97);
      flex-direction: column;
      justify-content: center;
      gap: var(--space-md);
      transform: translateX(100%);
      transition: transform var(--duration-slow) var(--ease);
      pointer-events: none;
    }

    .nav-links.open {
      transform: translateX(0);
      pointer-events: all;
    }

    .nav-links a {
      font-size: 1.4rem;
      letter-spacing: 0.12em;
    }

    .nav-resume { margin-left: 0; }
  }
</style>
