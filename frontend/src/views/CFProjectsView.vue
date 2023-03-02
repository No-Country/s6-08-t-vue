<template>
  <div role="main" class="bg-secondary-color min-h-screen pb-20">
    <header class="h-72 flex items-center justify-center relative">
      <router-link to="/" class="arrow-container relative right-[10%]">
        <img src="../assets/img/back-arrow.svg" alt="" />
      </router-link>
      <h1
        class="font-montserrat text-3xl font-semibold text-primary-color whitespace-nowrap"
      >
        Explorá todos los proyectos
      </h1>
    </header>

    <section class="flex flex-wrap gap-5 max-w-7xl m-auto">
      <!-- add projects-->
      <CFProjectCard>
        <template v-slot:img>
          <RouterLink
          class="cursor-pointer"
          to="/add-project"
          ><img src="../assets/img/img-default-project.svg" alt="" />
          </RouterLink
          >
          
        </template>
        <template v-slot:title>
          <h2>Agrega tu proyecto</h2>
        </template>
        <template v-slot:subtitle>
          <h3>podes agregarlo ahora!</h3>
        </template>
        <template v-slot:description>
          <p>
            Conta una breve descripción para quien seria la donación o conta la
            idea que tengas y que los usuarios inviertan en tu negocio !
          </p>
        </template>
        <template v-slot:footer>
          <CFBaseButton
            @click="router.push('/add-projects')"
            class="bg-secondary-color-500 absolute bottom-5 px-3 py-1 rounded-3xl font-medium text-lg"
            >Agrega tu proyecto</CFBaseButton
          >
        </template>
      </CFProjectCard>
      <!-- loop projects-->
      <CFProjectCard v-for="item in projects" :key="item.title">
        <template v-slot:img>
          <img :src="item.img" alt="" />
        </template>
        <template v-slot:title>
          <h2>{{ item.name }}</h2>
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
          <p>{{ item.resume }}</p>
        </template>
        <template v-slot:footer>
          <ProgressBar :limit="item.goal" :progress="item.accumulated" />
          <div class="absolute bottom-5">
            <CFBaseButton
              class="bg-secondary-color-500 mr-3 px-3 py-1 rounded-3xl font-bold text-base m-auto"
              >Donar
            </CFBaseButton>
            <CFBaseButton
              @click="router.push('projects/' + item.id)"
              class="border border-gray-500 px-3 py-1 rounded-3xl font-bold text-base m-auto"
              >Ver más
            </CFBaseButton>
          </div>
        </template>
      </CFProjectCard>
    </section>
  </div>
</template>

<script setup>
import CFProjectCard from "@/components/Cards/CFProjectCard.vue";
import ProgressBar from "@/components/shared/ProgressBar.vue";
import CFBaseButton from "../components/Buttons/CFBaseButton.vue";
import { getProjects } from "../services/project.service";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const projects = ref([]);
const router = useRouter();

onMounted(async () => {
  const response = await getProjects();
  projects.value = response.data;
});
</script>

<style lang="scss" scoped></style>
