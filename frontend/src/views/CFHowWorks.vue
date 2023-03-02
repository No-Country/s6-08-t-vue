<template>
  <!--<header class="mt-24">
    <h1 class="text-primary-color font-semibold text-center text-2xl">
      Somos parte de un gran equipo
    </h1>
    <p class="text-center mt-4 text-primary-color font-medium text-lg">
      Este proyecto esta realizado por diseñadores y desarrolladores juniors.
    </p>
  </header>
  <section class="max-w-screen-sm m-auto">
    <section class="mt-24 flex flex-col gap-5">
      <CFTeamMemberCard role="Role" name="Name" url="http" />
      <CFTeamMemberCard role="Role" name="Name" url="http" />
      <CFTeamMemberCard role="Role" name="Name" url="http" />
    </section>
    <section class="mt-10 flex flex-col items-end gap-5">
      <CFTeamMemberCard role="Role" name="Name" url="http" />
      <CFTeamMemberCard role="Role" name="Name" url="http" />
      <CFTeamMemberCard role="Role" name="Name" url="http" />
    </section>
    <section class="mt-10 mb-24 flex flex-col items-start gap-5">
      <CFTeamMemberCard role="Role" name="Name" url="http" />
      <CFTeamMemberCard role="Role" name="Name" url="http" />
      <CFTeamMemberCard role="Role" name="Name" url="http" />
    </section>
  </section>-->
  <main>
    <section id="header" class="bg-secondary-color">
      <div class="container px-6 mx-auto max-w-6xl py-16">
        <h1 class="text-primary-color font-bold text-center text-3xl">
          ¿Cómo funciona?
        </h1>
        <div class="p-8 my-4 bg-primary-color-300 rounded-lg">
          <button class="flex items-center justify-between w-full">
            <h1 class="font-semibold text-gray-700">¿Qué es Donafunding?</h1>

            <span class="text-primary-color bg-gray-200 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 12H6"
                />
              </svg>
            </span>
          </button>

          <p class="mt-6 text-sm text-gray-500">
            Este proyecto fue diseñado para personas que están pasando una situación especial y no la pueda cubrir economicamente. Podrás donar y ayudar a la causa que más se identifique con vos.
          </p>
        </div>

        <div class="p-8 my-4 bg-primary-color-300 rounded-lg">
          <button class="flex items-center justify-between w-full">
            <h1 class="font-semibold text-gray-700">
              ¿Cómo funciona Donafunding?
            </h1>

            <span class="text-white bg-primary-color rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </span>
          </button>
        </div>

        <div class="p-8 bg-primary-color-300 rounded-lg">
          <button class="flex items-center justify-between w-full">
            <h1 class="font-semibold text-gray-700">¿Dónde va mi inversión?</h1>

            <span class="text-white bg-primary-color rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
    <section id="form" class="bg-secondary-color-100">
      <div class="container px-5 py-24 mx-auto max-w-6xl">
        <h1 class="text-2xl font-bold text-primary-color text-center">
          Si tienes más dudas, contactanos
        </h1>
        <SampleForm />
        <div class="w-full text-center">
          <router-link to="projects">
            <button
              class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-primary-color transition-colors duration-300 transform bg-primary-color-300 rounded-3xl lg:w-auto hover:bg-secondary-color focus:outline-none"
            >
              Enviar
            </button>
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import SampleForm from "../components/shared/SampleForm.vue";

export default {
  components: {
    SampleForm,
  },
};
</script>
