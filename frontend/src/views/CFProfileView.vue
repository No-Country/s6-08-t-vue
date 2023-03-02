<script>
import AsideProfile from "../components/shared/AsideProfile.vue";

export default {
  components: {
    AsideProfile,
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
            <div class="flex flex-col items-center p-8">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="https://placehold.it/210x166"
                alt=""
              />
              <h1
                class="mt-4 text-xl font-semibold text-primary-color capitalize group-hover:text-white"
              >
                Melissa Perez
              </h1>
              <p class="mt-2 text-gray-500 group-hover:text-gray-300">
                melissa@example2.com
              </p>
              <p class="mt-2 text-sm text-gray-500 group-hover:text-gray-300">
                +00 000 0000000
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  </main>
</template>
