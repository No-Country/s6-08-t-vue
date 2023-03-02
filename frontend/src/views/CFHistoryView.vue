<script>
import AsideProfile from "../components/shared/AsideProfile.vue";
import CFHistoryCard from "../components/Cards/CFHistoryCard.vue";
export default {
  components: {
    AsideProfile,
    CFHistoryCard,
  },
};
</script>

<template>
  <main class="flex flex-col gap-6 pb-6 h-full flex-grow items-center">
    <div class="w-full max-w-6xl px-8 py-16">
      <div class="flex flex-wrap">
        <AsideProfile class="w-full md:w-1/3 lg:w-1/4 hidden md:block">
        </AsideProfile>
        <main class="w-full md:w-2/3 lg:w-3/4">
          <div class="w-full ml-0 md:ml-4 lg:ml-4">
            <CFHistoryCard v-for="i in [1, 2, 3, 4, 5]" :key="i" class="mb-3">
            </CFHistoryCard>
          </div>
        </main>
      </div>
    </div>
  </main>
</template>
