<template>
  <v-app>
    <nav class="d-flex justify-center ga-2 bg-primary">
      <nuxt-link
        class="text-decoration-none text-white"
        to="/"
        >Home</nuxt-link
      >
      <nuxt-link
        class="text-decoration-none text-white"
        to="/about"
        >About</nuxt-link
      >
    </nav>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
