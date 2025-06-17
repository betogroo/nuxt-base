<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title>My Nuxt App</v-app-bar-title>
      <v-spacer />
      <v-btn
        text
        to="/"
        >Home</v-btn
      >
      <v-btn
        text
        to="/counter"
        >Limitador de Acessos</v-btn
      >
      <v-btn
        text
        to="/todo"
        >Todo</v-btn
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
