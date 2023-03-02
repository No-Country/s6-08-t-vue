<script setup>
import CFBaseButton from "../Buttons/CFBaseButton.vue";
import CFText from "../Text/CFText.vue";
// import CFProgressBar from "../shared/ProgressBar.vue";
</script>
<template>
  <div class="p-4 flex flex-wrap md:flex-nowrap bg-white shadow-lg rounded-lg">
    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
      <img
        class="block w-full h-full object-cover rounded-lg"
        src="https://placehold.it/210x166"
        alt="title de prueba"
      />
    </div>
    <div class="md:flex-grow font-Roboto lg:pl-8 p-2">
      <div>
        <CFText tag="h1" class="font-bold text-xl md:text-2xl">Don Tata</CFText>
        <CFText tag="span" class="text-secondary-color-400 text-base"
          >Ya han invertido 67 personas</CFText
        >
      </div>
      <CFText tag="p" class="py-5 text-sm">
        Don Tata busca expandir su negocio. Con tu inversión podremos comprar
        mas de 500 productos y asi expandir la facturació y asi poder llegar al
        millón de pesos
      </CFText>
      <CFBaseButton
        class="bg-secondary-color-500 p-3 rounded-xl font-bold text-sm m-auto"
        >Volver a invertir</CFBaseButton
      >
    </div>
  </div>
</template>
