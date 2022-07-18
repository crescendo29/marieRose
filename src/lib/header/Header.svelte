<script>
  import { fly } from 'svelte/transition'

  import AnimatedHamburger from '../AnimatedHamburger.svelte'
  import logo from './logo.png'

  export let open = false
  export let onClick = () => {
    open = !open
  }
</script>

<header>
  <div class="main flex justify-between w-full">
    <div class="logo w-1/6">
      <a href="https://kit.svelte.dev">
        <img src={logo} alt="SvelteKit" />
      </a>
    </div>
    <AnimatedHamburger {open} {onClick} />
  </div>

  {#if open}
    <nav transition:fly={{ y: -200, duration: 400 }} class="bg-marieBlue text-white flex flex-col">
      <a href="#hero">Accueil</a>
      <a href="#about">Nos prestations</a>
      <a href="https://magrippis.com/tube">Nos produits</a>
      <a href="https://magrippis.com/tube">Prendre Rendez-Vous</a>
      <a href="https://magrippis.com/tube">Carte Cadeaux</a>
      <a href="https://magrippis.com/milestones">Contact</a>
    </nav>
  {/if}
</header>

<!-- <style>
  header {
    position: relative;
    font-size: 2rem;
    color: var(--accent-color);
    background-color: var(--white);
    z-index: 2;
  }

  .main {
    display: flex;
    justify-content: space-between;
  }

  .logo {
    width: 3em;
    height: 3em;
  }

  .logo a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .logo img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  nav {
    position: absolute;
    z-index: -1;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    background-color: var(--white);
  }
</style> -->