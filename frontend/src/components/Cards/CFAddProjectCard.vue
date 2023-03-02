<script setup>
import CFBaseButton from "../Buttons/CFBaseButton.vue";
// import CFText from "../Text/CFText.vue";

// import { useRoute } from "vue-router";

// const route = useRoute();
</script>
<template>
  <div
    class="bg-white grid grid-cols-1 grid-rows-[auto_auto_auto] lg:grid-cols-2 lg:grid-rows-[auto_130px] shadow-lg rounded-lg p-5 justify-items-center items-center"
  >
    <div class="">
      <label
        for="dropzone-file"
        class="flex flex-col items-center w-full max-w-lg p-5 m-auto mt-2 text-center bg-white border-2 border-primary-color border-dotted cursor-pointer rounded-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8 text-gray-500 dark:text-gray-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
          />
        </svg>

        <h2 class="mt-1 font-medium tracking-wide text-primary-color">
          Archivo de imagen
        </h2>

        <p class="mt-2 text-xs tracking-wide text-primary-color">
          Carga tu archivo SVG, PNG, JPG or GIF desde tu computador
        </p>

        <input id="dropzone-file" type="file" class="hidden" />
      </label>
      <input
        v-model="name"
        type="text"
        class="w-full py-3 text-primary-color border-b-2 border-primary-color bg-transparent focus:border-secondary-color-200 focus:border-b-2 outline-none placeholder:text-primary-color"
        placeholder="NOMBRE DEL PROYECTO"
      />
    </div>
    <div
      class="font-Roboto lg:pl-10 grid grid-cols-1 grid-rows-[80px_1fr_50px_50px] py-5"
    >
      <div>
        <textarea
          v-model="description"
          class="w-full py-3 text-primary-color border-b-2 border-primary-color bg-transparent focus:border-secondary-color-200 focus:border-b-2 outline-none placeholder:text-primary-color"
          placeholder="Breve descripción del proyecto que va a recibir la donación."
        />

        <input
          v-model="meta"
          type="text"
          class="w-full py-3 text-primary-color border-b-2 border-primary-color bg-transparent focus:border-secondary-color-200 focus:border-b-2 outline-none placeholder:text-primary-color"
          placeholder="Meta $"
        />

        <input
          v-model="end"
          type="text"
          class="w-full py-3 text-primary-color border-b-2 border-primary-color bg-transparent focus:border-secondary-color-200 focus:border-b-2 outline-none placeholder:text-primary-color"
          placeholder="Finaliza (dd-mm-yyyy)"
        />

        <input
          v-model="end"
          type="text"
          class="w-full py-3 text-primary-color border-b-2 border-primary-color bg-transparent focus:border-secondary-color-200 focus:border-b-2 outline-none placeholder:text-primary-color"
          placeholder="Link para pago"
        />
      </div>
    </div>
    <div class="lg:col-span-3">
      <CFBaseButton
        class="bg-secondary-color-500 p-3 rounded-xl font-bold text-xl m-auto w-[100px] mt-10"
        >Publicar</CFBaseButton
      >
    </div>
  </div>
</template>
