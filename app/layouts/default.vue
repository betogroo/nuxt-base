<script setup lang="ts">
  const { navItems, toggleDrawer, isDrawerActive } = useNavDrawer()
</script>
<template>
  <v-app>
    <app-navbar :menu-items="navItems" @drawer="toggleDrawer" />

    <app-nav-drawer v-model:drawer="isDrawerActive" :menu-items="navItems" />
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
