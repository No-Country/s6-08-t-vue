<script setup>
import NavBarVue from "../src/components/shared/Navbar.vue";
import FooterVue from "../src/components/shared/Footer.vue";
import { useAuthStore } from "./stores/auth";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const store = useAuthStore();
const router = useRouter();
onMounted(() => {
  if (store.profileAuth.token) {
    router.push("/projects");
  }
});
</script>

<template>
  <NavBarVue class="bg-secondary-color" />
  <RouterView class="bg-secondary-color" />
  <FooterVue />
</template>
