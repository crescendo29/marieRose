<!-- <div class="navbar bg-gold-texture">
  <div class="navbar-start">
    <div class="dropdown text-gray-200">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="black"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
      </label>
      <ul tabindex="0" class="text-gray-200 menu menu-compact dropdown-content mt-3 p-2 shadow bg-marieBlue font-bold rounded-box w-44">
        <li><a href="/">Accueil</a></li>
        <li><a href="/prestations">Nos Prestations</a></li>
        <li><a href="/produits">Nos Produits</a></li>
        <li><a href="https://www.planity.com/">Prendre Rendez-Vous</a></li>
        <li><a href="/espacecadeaux">Espace Cadeaux</a></li>
        <li><a href="/infos">Infos Pratiques</a></li>
      </ul>
    </div>
    <div class="ml-4">
      <h1 class="normal-case font-bold text-xs text-marieBlue">DOUCE &Eacute;VASION</h1>
    <h3 class="text-marieBlueLight text-sm">INSTITUT BEAUT&Eacute; ET BIEN &Ecirc;TRE</h3>
    </div>
    
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0 font-bold text-marieBlue">
      <li><a href="/">Accueil</a></li>
        <li><a href="/prestations">Nos Prestations</a></li>
        <li><a href="/produits">Nos Produits</a></li>
        <li><a href="https://www.planity.com/">Prendre Rendez-vous</a></li>
        <li><a href="/espacecadeaux">Espace Cadeaux</a></li>
        <li><a href="/infos">Infos Pratiques</a></li>
    </ul>
  </div>
  <a href="/" class="navbar-end">
    <img src="images/logo1.webp" class="w-24 mx-4" alt="logo">
  </a>
</div> -->

<script>

  let menuShow = false

  function toggleNavbar() {
    menuShow = !menuShow
  }
</script>

<div class="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gold-texture text-marieBlue">
  <div>
    <img src="images/logo1.webp" class="w-[70px]" alt="logo">
  </div>

  <!-- menu -->
  <ul class="hidden md:flex">
        <li><a href="/">Accueil</a></li>
        <li><a href="/prestations">Nos Prestations</a></li>
        <li><a href="/produits">Nos Produits</a></li>
        <li><a href="https://www.planity.com/">Prendre Rendez-Vous</a></li>
        <li><a href="/espacecadeaux">Espace Cadeaux</a></li>
        <li><a href="/infos">Infos Pratiques</a></li>
  </ul>

  <!-- Hamburger -->
  <div
  on:click={toggleNavbar}
  class="md:hidden z-10"
  >
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 {!menuShow ? 'flex' : 'hidden'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 {menuShow ? 'flex' : 'hidden'}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
  </div>

  <!-- Mobile menu -->
  <ul class={
    !menuShow
      ? "hidden"
      : "absolute top-0 left-0 w-full h-screen bg-gold-texture text-marieBlue flex flex-col justify-center items-center"
  }>
          <li class="py-6 text-4xl" on:click={toggleNavbar}><a href="/">Accueil</a></li>
          <li class="py-6 text-4xl" on:click={toggleNavbar}><a href="/prestations">Nos Prestations</a></li>
          <li class="py-6 text-4xl" on:click={toggleNavbar}><a href="/produits">Nos Produits</a></li>
          <li class="py-6 text-4xl" on:click={toggleNavbar}><a href="https://www.planity.com/">Prendre Rendez-Vous</a></li>
          <li class="py-6 text-4xl" on:click={toggleNavbar}><a href="/espacecadeaux">Espace Cadeaux</a></li>
          <li class="py-6 text-4xl" on:click={toggleNavbar}><a href="/infos">Infos Pratiques</a></li>
  </ul>
</div>