<script setup>
import CFBaseButton from "../Buttons/CFBaseButton.vue";
import CFText from "../Text/CFText.vue";
import CFProgressBar from "../shared/ProgressBar.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getProject } from "../../services/project.service";
const route = useRoute();
const project = ref({});

onMounted(async () => {
  const response = await getProject(route.params.id);
  project.value = response.data;
});
</script>
<template>
  <div
    class="bg-white grid grid-cols-1 grid-rows-[auto_auto_auto] lg:grid-cols-2 lg:grid-rows-[auto_130px] shadow-lg rounded-lg p-5 justify-items-center items-center"
  >
    <div class="">
      <img
        class="block w-full h-full object-cover rounded-lg"
        :src="project.img"
        alt="title de prueba"
      />
    </div>
    <div
      class="font-Roboto lg:pl-14 grid grid-cols-1 grid-rows-[80px_1fr_50px_50px] p-10"
    >
      <div>
        <CFText tag="h1" class="font-bold text-3xl">{{ project.name }}</CFText>
        <CFText tag="span" class="text-secondary-color-400"
          >Ya han invertido 67 personas</CFText
        >
      </div>
      <CFText tag="p" class="py-5">
        {{ project.description }}
      </CFText>
      <div class="pr-14">
        <div class="flex items-start justify-center flex-col w-1/5 ml-auto">
          <CFText tag="span" class="text-primary-color">$569.000</CFText>
          <CFText tag="span" class="text-secondary-color-400">Meta</CFText>
        </div>
      </div>
      <CFProgressBar progress="1" limit="100" />
    </div>
    <div class="lg:col-span-3">
      <CFBaseButton
        class="bg-secondary-color-500 p-3 rounded-xl font-bold text-xl m-auto w-[100px]"
        >Donar</CFBaseButton
      >
    </div>
  </div>
</template>
