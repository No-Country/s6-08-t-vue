<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth";
import { signup, setAccessToken } from "../../services/auth.service";
import { ref } from "vue";

const store = useAuthStore();
const router = useRouter();

const showPass = ref("");
const name = ref("");
const lastName = ref("");
const userName = ref("");
const email = ref("");
const conditions = ref(false);
const password = ref("");
const rPassword = ref("");

/* eslint-disable-next-line */
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const areInputsValid = () => {
  if (!regexEmail.test(email.value)) return false;
  if (password.value.length < 6) return false;
  if (name.value.length < 3) return false;
  if (userName.value.length < 3) return false;
  if (lastName.value.length < 2) return false;
  if (!conditions.value) return false;
  if (password.value !== rPassword.value) return false;
  return true;
};

const handleSubmit = async () => {
  if (!areInputsValid()) return;
  const user = await signup({
    firstName: name.value,
    lastName: lastName.value,
    email: email.value,
    userName: userName.value,
    password: password.value,
  });
  if (!user.data) return false;

  setAccessToken(user.data);
  store.setProfileAuth(user.data);
  router.push("/projects");
};
</script>
<template>
  <form class="flex flex-col w-full md:w-1/2 lg:w-1/2">
    <h1 class="text-2xl font-semibold text-primary-color lg:text-3xl">
      Registrate
    </h1>
    <input
      v-model="name"
      type="text"
      class="w-full py-3 my-3 text-primary-color border-b-2 border-primary-color bg-transparent focus:border-secondary-color-200 focus:border-b-2 outline-none placeholder:text-primary-color"
      placeholder="Nombre"
    />
    <input
      v-model="lastName"
      type="text"
      class="w-full py-3 my-3 text-primary-color border-b-2 border-primary-color bg-transparent focus:border-secondary-color-200 focus:border-b-2 outline-none placeholder:text-primary-color"
      placeholder="Apellido"
    />
    <input
      v-model="userName"
      type="text"
      class="w-full py-3 my-3 text-primary-color border-b-2 border-primary-color bg-transparent focus:border-secondary-color-200 focus:border-b-2 outline-none placeholder:text-primary-color"
      placeholder="Nombre de usuario"
    />
    <input
      v-model="email"
      type="text"
      class="w-full py-3 my-3 text-primary-color border-b-2 border-primary-color bg-transparent focus:border-secondary-color-200 focus:border-b-2 outline-none placeholder:text-primary-color"
      placeholder="Email"
    />

    <input
      v-model="password"
      :type="showPass ? 'text' : 'password'"
      class="w-full py-3 my-3 text-primary-color border-b-2 border-primary-color bg-transparent focus:border-secondary-color-200 focus:border-b-2 outline-none placeholder:text-primary-color"
      placeholder="Contraseña"
    />
    <input
      v-model="rPassword"
      :type="showPass ? 'text' : 'password'"
      class="w-full py-3 mt-3 text-primary-color border-b-2 border-primary-color bg-transparent focus:border-secondary-color-200 focus:border-b-2 outline-none placeholder:text-primary-color"
      placeholder="Repetir contraseña"
    />
    <label class="mt-6">
      <input
        v-model="showPass"
        type="checkbox"
        class="accent-primary-color-100"
      />
      <span class="ml-2 text-sm text-primary-color"> Mostrar contraseñas </span>
    </label>
    <label class="mt-6">
      <input
        v-model="conditions"
        type="checkbox"
        class="accent-primary-color-100"
      />
      <span class="ml-2 text-sm text-primary-color">
        Acepto los
        <a href="#" class="hover:underline text-sm my-4">
          Terminos y Condiciones
        </a>
      </span>
    </label>
    <button
      @click="handleSubmit"
      type="button"
      class="md:w-1/2 w-full lg:w-1/2 bg-secondary-color-300 hover:bg-primary-color-100 font-medium text-sm px-5 py-2.5 focus:outline-none my-2"
    >
      Registrate
    </button>
  </form>
</template>
