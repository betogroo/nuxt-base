<script setup lang="ts">
  import type { MenuItem } from '~/types'
  interface Props {
    menuItems: MenuItem[]
  }
  defineProps<Props>()

  const $emit = defineEmits<{
    drawer: []
  }>()

  const toggleDrawer = () => {
    console.log('drawer click')
    $emit('drawer')
  }
</script>

<template>
  <v-app-bar color="primary">
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-app-bar-title>My Nuxt App</v-app-bar-title>
    <v-spacer />
    <v-btn
      v-for="item in menuItems"
      :key="item.path"
      text
      :to="item.path"
      >{{ item.title }}</v-btn
    >
  </v-app-bar>
</template>
