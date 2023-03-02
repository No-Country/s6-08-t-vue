<script setup>
import CFLoginForm from "../components/Forms/CFLoginForm.vue";
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
    <div
      class="container mx-auto flex max-w-6xl items-center md:items-end justify-center flex-col mb-24"
    >
      <div class="w-11/12 sm:w-2/4 top-1/4 my-4 sm:left-1/4 h-[36rem]">
        <div class="w-full lg:w-1/2 mt-[18rem]">
          <CFLoginForm />
        </div>
      </div>
    </div>
  </div>
</template>
