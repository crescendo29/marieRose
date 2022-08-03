<script>

  let menuShow = false

  function toggleNavbar() {
    menuShow = !menuShow
  }
</script>

<div class="relative z-[100] w-full h-[80px] shadow-xl flex justify-between items-center px-4 bg-gold-texture text-marieBlue md:justify-around">
  <div class="flex items-center">
    <a href="/">
      <img src="images/logo1.webp" class="w-[70px]" alt="logo">
    </a>
    <div class="pl-4">
      <h1 class="normal-case font-bold text-xs text-marieBlue">DOUCE &Eacute;VASION</h1>
    <h3 class="text-marieBlueLight text-sm">INSTITUT BEAUT&Eacute; ET BIEN &Ecirc;TRE</h3>
    </div>
    
  </div>

  <!-- menu -->
  <ul class="hidden md:flex md:items-center font-bold">
        <li class="hover:shadow-inner hover:shadow-black/70 hover:scale-110 rounded-xl"><a href="/">Accueil</a></li>
        <li class="hover:shadow-inner hover:shadow-black/70 hover:scale-110 rounded-xl"><a href="/prestations">Nos Prestations</a></li>
        <li class="hover:shadow-inner hover:shadow-black/70 hover:scale-110 rounded-xl"><a href="/produits">Nos Produits</a></li>
        <li class="hover:shadow-inner hover:shadow-black/70 hover:scale-110 rounded-xl"><a href="https://www.planity.com/douce-evasion-29300-quimperle">Prendre Rendez-Vous</a></li>
        <li class="hover:shadow-inner hover:shadow-black/70 hover:scale-110 rounded-xl"><a href="/espacecadeaux">Espace Cadeaux</a></li>
        <li class="hover:shadow-inner hover:shadow-black/70 hover:scale-110 rounded-xl"><a href="/infos">Infos Pratiques</a></li>
        <li class="py-6 text-4xl" on:click={toggleNavbar}>
          <div class="flex items-center justify-between w-1/2 mx-auto text-marieBlue text-sm">
            <div><a class="flex flex-col items-center justify-center hover:scale-110 hover:shadow-inner hover:shadow-black/70 rounded-xl p-2" href="https://www.facebook.com/Douce-Evasion-Quimperl%C3%A9-101247496029036/?ref=page_internal"><img src="/images/facebook.svg" alt="facebook">Facebook</a></div>
            <div><a class="flex flex-col items-center justify-center hover:scale-110 hover:shadow-inner hover:shadow-black/70 rounded-xl p-2" href="/"><img src="/images/instagram.svg" alt="facebook">Instagram</a></div>
            <div><a class="flex flex-col items-center justify-center hover:scale-110 hover:shadow-inner hover:shadow-black/70 rounded-xl p-2 px-5" href="/contact"><img src="/images/email.svg" alt="facebook">Email</a></div>
          </div>
        </li>
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
          <li class="py-6 text-4xl" on:click={toggleNavbar}><a href="https://www.planity.com/douce-evasion-29300-quimperle">Prendre Rendez-Vous</a></li>
          <li class="py-6 text-4xl" on:click={toggleNavbar}><a href="/espacecadeaux">Espace Cadeaux</a></li>
          <li class="py-6 text-4xl" on:click={toggleNavbar}><a href="/infos">Infos Pratiques</a></li>
          <li class="py-6 text-4xl" on:click={toggleNavbar}>
            <div class="flex flex-col items-center justify-between w-1/2 mx-auto text-marieBlue text-sm">
              <div><a class="flex flex-col items-center justify-center hover:scale-110 hover:shadow-inner hover:shadow-black/70 rounded-xl p-2" href="https://www.facebook.com/Douce-Evasion-Quimperl%C3%A9-101247496029036/?ref=page_internal"><img src="/images/facebook.svg" alt="facebook">Facebook</a></div>
              <div><a class="flex flex-col items-center justify-center hover:scale-110 hover:shadow-inner hover:shadow-black/70 rounded-xl p-2" href="/"><img src="/images/instagram.svg" alt="facebook">Instagram</a></div>
              <div><a class="flex flex-col items-center justify-center hover:scale-110 hover:shadow-inner hover:shadow-black/70 rounded-xl p-2 px-5" href="/contact"><img src="/images/email.svg" alt="facebook">Email</a></div>
            </div>
          </li>
  </ul>
</div>