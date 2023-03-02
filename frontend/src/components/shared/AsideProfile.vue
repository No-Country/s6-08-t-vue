<template>
  <aside class="flex flex-col w-48 overflow-y-auto">
    <h1 class="pb-3 text-xl font-bold">Mi Cuenta</h1>

    <div class="flex flex-col justify-between flex-1 mt-6">
      <nav>
        <router-link
          class="flex px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
          to="/profile"
        >
          <span class="font-medium">Mis datos</span>
        </router-link>

        <router-link
          class="flex py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
          to="/history"
        >
          <span class="mx-4 font-medium">Historial de donaciones</span>
        </router-link>
      </nav>
      <a
        href="logout"
        class="px-5 py-2 mt-4 mx-6 text-sm font-medium tracking-wider text-center text-primary-color transition-colors duration-300 transform bg-secondary-color-300 rounded-3xl hover:bg-secondary-color"
        >Cerrar Sesión</a
      >
    </div>
  </aside>
</template>
<style scoped>
.router-link-active {
  @apply bg-gray-100 text-neutral-900;
}
</style>
