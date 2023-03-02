<template>
  <div class="bg-primary-color-250 rounded-lg flex items-center h-[100px] p-6">
    <div class="w-20 h-20 rounded-full bg-primary-color">
      <img class="block max-w-full" :src="photo" alt="" srcset="" />
    </div>
    <div class="ml-4">
      <a :href="url" target="_blank">
        <p class="font-semibold text-2xl underline">{{ name }}</p>
      </a>
      <p class="font-semibold">{{ role }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CFTeamMemberCard",
  props: {
    name: String,
    url: String,
    role: String,
    photo: String,
  },
};
</script>

<style lang="scss" scoped></style>
