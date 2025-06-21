<script setup lang="ts">
  import type { MenuItem } from '~/types'

  defineProps<Props>()
  const drawer = defineModel<boolean>()
  interface Props {
    menuItems: MenuItem[]
  }
</script>

<template>
  <v-navigation-drawer v-model="drawer">
    <template #prepend>
      <v-list-item
        lines="three"
        prepend-avatar="https://randomuser.me/api/portraits/women/33.jpg"
        subtitle="mcgarcia@gmail.com"
        title="Maria Costa Garcia"
      />
    </template>
    <v-divider />

    <v-list
      density="compact"
      nav
    >
      <v-list-item
        v-for="item in menuItems"
        :key="item.path"
        :prepend-icon="item.icon"
        :title="item.title"
        :to="item.path"
      />
    </v-list>
  </v-navigation-drawer>
</template>
