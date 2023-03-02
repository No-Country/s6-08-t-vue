<script>
import Logo from "../shared/Logo.vue";
export default {
  name: "NavBar",
  components: {
    Logo,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<template>
  <header class="bg-center bg-cover bg-secondary-color">
    <div class="container mx-auto max-w-6xl">
      <nav class="relative bg-transparent">
        <div
          class="container py-4 mx-auto md:flex md:justify-between md:items-center"
        >
          <div class="flex items-center justify-between">
            <Logo />
            <!-- Mobile menu button -->
            <div
              class="flex mr-5 lg:hidden md:hidden xl:hidden 2xl:hidden z-10"
            >
              <button
                @click="isOpen = !isOpen"
                type="button"
                class="text-primary-50 hover:text-primary focus:outline-none focus:text-neutral"
                aria-label="toggle menu"
              >
                <svg
                  v-show="!isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>

                <svg
                  v-show="isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <div
            :class="[
              isOpen
                ? 'translate-x-0 opacity-100 '
                : 'opacity-0 -translate-x-full',
            ]"
            class="absolute bg-secondary-color inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
          >
            <div class="flex font-montserrat flex-col md:flex-row">
              <RouterLink
                class="my-2 text-neutral transition-colors duration-300 transform hover:text-primary-color-100 md:mx-4 md:my-2"
                to="/projects"
                >Proyectos</RouterLink
              >
              <RouterLink
                class="my-2 text-neutral transition-colors duration-300 transform hover:text-primary-color-100 md:mx-4 md:my-2"
                to="/how"
                >Cómo funciona</RouterLink
              >
              <RouterLink
                class="my-2 text-neutral transition-colors duration-300 transform hover:bg-secondary-color hover:py-2 hover:px-4 hover:mx-0 hover:my-0 hover:rounded-3xl md:mx-4 md:my-2"
                to="/profile"
                >Perfil</RouterLink
              >
              <RouterLink
                class="my-2 text-neutral transition-colors duration-300 transform hover:bg-primary-color-100 hover:py-2 hover:px-4 hover:mx-0 hover:my-0 hover:rounded-3xl md:mx-4 md:my-2"
                to="/login"
                >Iniciar Sesión</RouterLink
              >
              <RouterLink
                class="my-2 text-neutral transition-colors duration-300 transform hover:bg-secondary-color hover:py-2 hover:px-4 hover:mx-0 hover:my-0 hover:rounded-3xl md:mx-4 md:my-2"
                to="/register"
                >Crear cuenta</RouterLink
              >
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
