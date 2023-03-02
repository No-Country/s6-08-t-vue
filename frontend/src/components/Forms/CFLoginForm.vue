<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { login, setAccessToken } from "../../services/auth.service";
import { useAuthStore } from "../../stores/auth";

const router = useRouter();
const store = useAuthStore();

const email = ref("");
const password = ref("");
const showPass = ref(false);

/* eslint-disable-next-line */
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const areInputsValid = () => {
  if (email.value.length < 7 || password.value.length < 6) return false;
  if (!regexEmail.test(email.value)) return false;

  return true;
};

const handleSubmit = async () => {
  if (!areInputsValid()) return;
  const user = await login(email.value, password.value);
  if (!user.data) return;
  setAccessToken(user.data);
  store.setProfileAuth(user.data);
  router.push("/projects");
};
</script>
<template>
  <form class="py-6 flex flex-col">
    <h1 class="text-2xl font-semibold text-primary-color lg:text-3xl">
      Ingresa a tu cuenta
    </h1>
    <input
      v-model="email"
      type="text"
      class="w-full py-3 my-3 text-primary-color border-b-2 border-primary-color bg-transparent focus:border-secondary-color-200 focus:border-b-2 outline-none placeholder:text-primary-color"
      placeholder="Email"
    />
    <input
      v-model="password"
      :type="showPass ? 'text' : 'password'"
      class="w-full py-3 text-primary-color border-b-2 border-primary-color bg-transparent focus:border-secondary-color-200 focus:border-b-2 outline-none placeholder:text-primary-color"
      placeholder="Contraseña"
    />
    <label class="mt-6">
      <input
        v-model="showPass"
        type="checkbox"
        class="accent-primary-color-100"
      />
      <span class="ml-2 text-sm text-primary-color"> Mostrar contraseña</span>
    </label>

    <a href="#" class="hover:underline text-sm my-4">
      ¿Perdiste tu contraseña?
    </a>
    <button
      @click="handleSubmit"
      type="button"
      class="md:w-1/2 w-full lg:w-1/2 bg-secondary-color-300 hover:bg-primary-color-100 font-medium text-sm px-5 py-2.5 focus:outline-none my-2"
    >
      Ingresar
    </button>
  </form>
</template>
