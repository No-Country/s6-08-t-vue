<script>
export default {
  name: "SampleForm",
};
</script>

<template>
  <form>
    <div class="flex justify-center">
      <div class="my-6">
        <input
          type="text"
          placeholder="Nombre"
          class="mt-2 block w-full placeholder-primary-color rounded-lg border border-primary-color bg-transparent px-5 py-2.5 text-primary-50 focus:border-primary focus:outline-none focus:ring focus:ring-primary-color-100 focus:ring-opacity-40"
        />
        <input
          type="email"
          placeholder="Email"
          class="mt-2 block w-full placeholder-primary-color rounded-lg border border-primary-color bg-transparent px-5 py-2.5 text-primary-50 focus:border-primary focus:outline-none focus:ring focus:ring-primary-color-100 focus:ring-opacity-40"
        />
        <input
          type="text"
          placeholder="Asunto"
          class="mt-2 block w-full placeholder-primary-color rounded-lg border border-primary-color bg-transparent px-5 py-2.5 text-primary-50 focus:border-primary focus:outline-none focus:ring focus:ring-primary-color-100 focus:ring-opacity-40"
        />
        <textarea
          placeholder="Mensaje"
          class="mt-2 block w-full placeholder-primary-color rounded-lg border border-primary-color bg-transparent px-5 py-2.5 text-primary-50 focus:border-primary focus:outline-none focus:ring focus:ring-primary-color-100 focus:ring-opacity-40"
        />
      </div>
    </div>
  </form>
</template>
