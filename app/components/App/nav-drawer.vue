<script setup lang="ts">
  import type { MenuItem } from '~/types'
  interface Props {
    menuItems: MenuItem[]
  }

  defineOptions({
    name: 'NavDrawer',
  })

  const props = defineProps<Props>()

  const isDrawerActive = defineModel<boolean>('drawer')
</script>

<template>
  <v-navigation-drawer v-model="isDrawerActive">
    <template #prepend>
      <v-list-item
        lines="three"
        prepend-avatar="https://randomuser.me/api/portraits/women/33.jpg"
        subtitle="mcgarcia@gmail.com"
        title="Maria Costa Garcia"
      />
    </template>
    <v-divider />

    <v-list density="compact" nav>
      <v-list-item
        v-for="item in props.menuItems"
        :key="item.path"
        :prepend-icon="item.icon"
        :title="item.title"
        :to="item.path"
      />
    </v-list>
  </v-navigation-drawer>
</template>
