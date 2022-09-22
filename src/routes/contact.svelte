<svelte:head>
  <title>Douce évasion - Prenez Contact et échangeons</title>
  <meta name="description" content="Votre Esthéticienne Marie-Rose, véritable experte de la beauté en Institut de Beauté, met à votre disposition des méthodes de soin exclusives pour embellir votre visage et votre corps.... Echangeons avec plaisir!" />
  <meta name="keywords" content="quimperlé, institut, institut de beauté, soins en institut, esthéticienne, beauté, peau, visage, corps, soins, anti-âge, anti-rides, hydratation, jeunesse, éclat, minceur">
  <meta name=”robots” content="index, follow">
</svelte:head>

<div
      name="contact"
      class="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/d2e1cf55-0174-41f6-a175-9d24da10b319"
        class="flex flex-col max-w-[600px] w-full"
      >
        <div class="pb-8">
          <p class="text-4xl font-bold inline border-b-4 border-gold text-gray-300">
            Contact
          </p>
          <p class="py-4 text-gray-300">
            Envoyez moi un message, je vous répondrai aussi vite que possible.
          </p>
        </div>
        <input
          class="bg-[#ccd6f6] p-2 text-gray-700"
          type="text"
          placeholder="Nom"
          name="name"
        />
        <input
          class="my-4 p-2 bg-[#ccd6f6] text-gray-700"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          name="message"
          class="bg-[#ccd6f6] p-2 text-gray-700"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button class="text-white border-2 hover:bg-gold hover:border-gold hover:text-marieBlue font-bold px-4 py-3 my-8 mx-auto flax items-center">
          Envoyer
        </button>
      </form>
    </div>