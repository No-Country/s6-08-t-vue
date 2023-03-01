<script>
  import SampleForm from '../components/shared/SampleForm.vue'
  import CFCard from '../components/Cards/CFProjectCard.vue'
  import ProgressBar from "@/components/shared/ProgressBar.vue";
  import json from "@/api.json";
  import CFBaseButton from "../components/Buttons/CFBaseButton.vue";

  export default {
    data() {
      return {
        projects: json,
      };
    },
    components: {
      SampleForm,
      CFCard,
      ProgressBar,
      CFBaseButton
    }
  }
</script>

<style scoped>
.pattern {
  background-image: url(https://res.cloudinary.com/yeniferramirez11/image/upload/v1676310397/diego-ph-SZYreZsJ-fE-unsplash_1_pb4dh4.png);
  position: relative;
  border-bottom-left-radius: 50% 49%;
  border-bottom-right-radius: 50% 36%;
}
</style>

<template>
  <main>
    <section id="hero" class="pattern bg-center bg-cover -mt-24">
      <div class="container px-6 mx-auto max-w-6xl">
        <div class="w-full h-[36rem]">
          <div class="flex items-center w-full h-full">
            <div class="text-left">
              <h1 class="text-3xl font-bold text-primary-color lg:text-4xl">
                Queremos ayudar.
              </h1>
              <h2 class="text-xl lg:text-2xl py-4">
                Doná y ayuda a necesitados.
              </h2>
              <h2 class="text-xl lg:text-2xl pb-2">Invierte en proyectoos.</h2>
              <div
                class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row"
              >
                <a
                  href="login"
                  class="block px-5 py-2 text-sm font-medium tracking-wider text-center text-primary-color transition-colors duration-300 transform bg-primary-color-100 rounded-3xl hover:bg-secondary-color"
                  >Iniciar Sesión</a
                >
                <a
                  href="register"
                  class="block px-5 py-2 text-sm font-medium tracking-wider text-center text-primary-color transition-colors duration-300 transform bg-secondary-color rounded-3xl lg:mx-4 hover:bg-white"
                  >Crear Cuenta</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="count">
      <div class="container px-5 py-24 mx-auto max-w-6xl">
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 lg:w-1/3 w-full">
            <h2
              class="title-font font-bold sm:text-4xl text-3xl text-primary-color"
            >
              +650
            </h2>
            <p class="leading-relaxed text-xl">
              Personas invirtieron en mini pymes
            </p>
          </div>
          <div class="p-4 lg:w-1/3 w-full">
            <h2
              class="title-font font-bold sm:text-4xl text-3xl text-primary-color"
            >
              +3000
            </h2>
            <p class="leading-relaxed text-xl">
              Donaciones a ONG, y personas que necesitaban de tu ayuda
            </p>
          </div>
          <div class="p-4 lg:w-1/3 w-full">
            <h2
              class="title-font font-bold sm:text-4xl text-3xl text-primary-color"
            >
              +7000
            </h2>
            <p class="leading-relaxed text-xl">Proyectos Publicados</p>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="bg-secondary-color-100">
      <div class="container px-6 py-16 mx-auto max-w-6xl">
        <div class="items-center lg:flex">
          <div
            class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
          >
            <img
              class="w-full h-full lg:max-w-3xl p-2 rounded-md"
              src="../assets/contact.png"
              alt="Contacto"
            />
          </div>
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg p-2">
              <h1 class="text-3xl font-semibold text-primary-color lg:text-4xl">
                Un equipo comprometido
              </h1>

              <p class="mt-3 text-primary-color text-xl">
                Creemos que ayudar al otro genera un mundo mejor. Formamos parte
                de un grupo qeu sabe que usando la tecnologia se llega a muchas
                personas.
              </p>
              <router-link to="contact">
                <button
                  class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-primary-color transition-colors duration-300 transform bg-primary-color-300 rounded-3xl lg:w-auto hover:bg-secondary-color focus:outline-none"
                >
                  Conocenos
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="projects">
      <div class="container px-5 py-24 mx-auto max-w-6xl">
        <div class="flex flex-wrap -m-4 text-center">
          <div 
            v-for="item in projects.slice(0, 3)"
            :key="item.title"
            class="p-5 lg:w-1/3"
          >
            <CFCard>
              <template v-slot:img>
                <img :src="item.image" alt="" />
              </template>
              <template v-slot:title>
                <h2>{{ item.title }}</h2>
              </template>
              <template v-slot:subtitle>
                <h3>
                  {{
                    item.type === "inversion"
                      ? "Invertí y recibí intereses"
                      : "Doná y ayuda con la causa"
                  }}
                </h3>
              </template>
              <template v-slot:description>
                <p>{{ item.description }}</p>
              </template>
              <template v-slot:footer>
                <ProgressBar :limit="item.meta" :progress="item.collected" />
                <div class="">
                  <CFBaseButton>
                    <template><p>hola</p></template>
                  </CFBaseButton>
                </div>
              </template>
            </CFCard>
          </div>
        </div>
        <div class="w-full text-center">
          <router-link to="projects">
            <button
              class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-primary-color transition-colors duration-300 transform bg-primary-color-300 rounded-3xl lg:w-auto hover:bg-secondary-color focus:outline-none"
            >
              Ver mas proyectos
            </button>
          </router-link>
        </div>
      </div>
    </section>
    <section id="form" class="bg-secondary-color-100">
      <div class="container px-5 py-24 mx-auto max-w-6xl">
        <h1
          class="text-3xl font-bold text-primary-color lg:text-4xl text-center"
        >
          Hablemos
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
