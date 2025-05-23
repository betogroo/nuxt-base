<template>
  <v-app>
    <v-app-bar color="primary">
      <v-toolbar-title>My Nuxt App</v-toolbar-title>
      <v-spacer />
      <v-btn
        text
        to="/"
        >Home</v-btn
      >
      <v-btn
        text
        to="/about"
        >About</v-btn
      >
    </v-app-bar>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
