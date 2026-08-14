<script>
  import './app.css';
  import Nav from './lib/components/Nav.svelte';
  import Hero from './lib/components/Hero.svelte';
  import About from './lib/components/About.svelte';
  import Philosophy from './lib/components/Philosophy.svelte';
  import Experience from './lib/components/Experience.svelte';
  import Projects from './lib/components/Projects.svelte';
  import Skills from './lib/components/Skills.svelte';
  import Beyond from './lib/components/Beyond.svelte';
  import Contact from './lib/components/Contact.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    // Intersection Observer for scroll-reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });
</script>

<Nav />
<main>
  <Hero />
  <About />
  <Philosophy />
  <Experience />
  <Projects />
  <Skills />
  <Beyond />
  <Contact />
</main>

<style>
  main {
    position: relative;
  }
</style>
