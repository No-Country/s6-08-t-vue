<template>
  <!--<header class="mt-24">
    <h1 class="text-primary-color font-semibold text-center text-2xl">
      Somos parte de un gran equipo
    </h1>
    <p class="text-center mt-4 text-primary-color font-medium text-lg">
      Este proyecto esta realizado por diseñadores y desarrolladores juniors.
    </p>
  </header>
  <section class="max-w-screen-sm m-auto">
    <section class="mt-24 flex flex-col gap-5">
      <CFTeamMemberCard role="Role" name="Name" url="http" />
      <CFTeamMemberCard role="Role" name="Name" url="http" />
      <CFTeamMemberCard role="Role" name="Name" url="http" />
    </section>
    <section class="mt-10 flex flex-col items-end gap-5">
      <CFTeamMemberCard role="Role" name="Name" url="http" />
      <CFTeamMemberCard role="Role" name="Name" url="http" />
      <CFTeamMemberCard role="Role" name="Name" url="http" />
    </section>
    <section class="mt-10 mb-24 flex flex-col items-start gap-5">
      <CFTeamMemberCard role="Role" name="Name" url="http" />
      <CFTeamMemberCard role="Role" name="Name" url="http" />
      <CFTeamMemberCard role="Role" name="Name" url="http" />
    </section>
  </section>-->
  <main class="bg-secondary-color">
    <div class="container px-6 mx-auto max-w-6xl py-16">
      <h1 class="text-primary-color font-semibold text-center text-2xl">
        Somos parte de un gran equipo
      </h1>
      <p class="text-center mt-4 text-primary-color font-medium text-lg">
        Este proyecto esta realizado por diseñadores y desarrolladores juniors.
      </p>
      <div class="flex flex-col">
        <div class="flex items-center">
          <div class="text-left">
            <CFTeamMemberCard class="my-2" role="UX/UI" name="Micaeala Andres" url="http" />
            <CFTeamMemberCard class="my-2" role="Frontend" name="Yenifer Ramirez" url="http" />
          </div>
        </div>
        <div class="flex items-center justify-end">
          <div class="text-right">
            <CFTeamMemberCard class="my-2" role="Frontend" name="Walter Huaynapata" url="http" />
            <CFTeamMemberCard class="my-2" role="Frontend" name="Mayder Cortés" url="http" />
          </div>
        </div>
        <div class="flex items-center">
          <div class="text-left">
            <CFTeamMemberCard class="my-2" role="Backend" name="Yohan Bello" url="http" />
            <CFTeamMemberCard class="my-2" role="Backend" name="Diego Petcoff" url="http" />
            <CFTeamMemberCard class="my-2" role="Backend" name="Pablo Ortega" url="http" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import CFTeamMemberCard from "../components/Cards/CFTeamMemberCard.vue";
</script>

