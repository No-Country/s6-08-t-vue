<script setup>
import { useRouter } from "vue-router";
import CFAddProjectCard from "../components/Cards/CFAddProjectCard.vue";
import CFText from "../components/Text/CFText.vue";
import arrowLeftIcon from "../assets/icons/arrow_left.svg";

const router = useRouter();
</script>
<template>
  <div class="bg-secondary-color p-5">
    <div
      class="lg:w-[1060px] m-auto md:w-[80%] sm:w-full mx-auto relative my-10"
    >
      <CFText
        class="font-Montserrat font-bold text-xl pl-10 text-center"
        tag="h3"
        >Agregar un proyecto</CFText
      >
      <img
        class="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer"
        :src="arrowLeftIcon"
        @click="router.go(-1)"
        alt=""
      />
    </div>
    <CFAddProjectCard class="lg:w-[1060px] m-auto md:w-[80%] sm:w-full mb-36" />
  </div>
</template>
