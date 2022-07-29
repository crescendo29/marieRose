<script>

  let menuShow = false

  function toggleNavbar() {
    menuShow = !menuShow
  }
</script>

<div class="fixed z-[100] w-full h-[80px] shadow-xl flex justify-between items-center px-4 bg-gold-texture text-marieBlue">
  <div class="flex items-center">
    <img src="images/logo1.webp" class="w-[70px]" alt="logo">
    <div class="pl-4">
      <h1 class="normal-case font-bold text-xs text-marieBlue">DOUCE &Eacute;VASION</h1>
    <h3 class="text-marieBlueLight text-sm">INSTITUT BEAUT&Eacute; ET BIEN &Ecirc;TRE</h3>
    </div>
    
  </div>

  <!-- menu -->
  <ul class="hidden md:flex font-bold">
        <li class="hover:bg-marieBlue rounded-xl hover:text-white"><a href="/">Accueil</a></li>
        <li class="hover:bg-marieBlue rounded-xl hover:text-white"><a href="/prestations">Nos Prestations</a></li>
        <li class="hover:bg-marieBlue rounded-xl hover:text-white"><a href="/produits">Nos Produits</a></li>
        <li class="hover:bg-marieBlue rounded-xl hover:text-white"><a href="https://www.planity.com/">Prendre Rendez-Vous</a></li>
        <li class="hover:bg-marieBlue rounded-xl hover:text-white"><a href="/espacecadeaux">Espace Cadeaux</a></li>
        <li class="hover:bg-marieBlue rounded-xl hover:text-white"><a href="/infos">Infos Pratiques</a></li>
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