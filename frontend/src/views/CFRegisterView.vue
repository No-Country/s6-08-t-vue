<script setup>
import CFRegisterForm from "../components/Forms/CFRegisterForm.vue";
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
  <div class="pattern bg-center bg-cover -mt-24">
    <div class="container mx-auto flex max-w-6xl flex-col mb-64 px-5">
      <div class="top-1/4 my-4 sm:left-1/4">
        <div class="w-full mt-[14rem]">
          <div class="flex flex-col">
            <div class="flex items-center">
              <div class="text-left">
                <h1
                  class="text-2xl font-semibold text-primary-color lg:text-3xl underline"
                >
                  Sumate
                </h1>
                <p class="text-primary-color font-medium my-4">
                  A esta nueva propuesta
                </p>
                <p class="text-primary-color font-medium text-sm">
                  Registrate gratis y comienza a formar parte de esta comunidad
                </p>
              </div>
            </div>
            <div class="flex items-center justify-end">
              <CFRegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
