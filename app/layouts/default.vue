<script setup lang="ts">
  const router = useRouter()
  const navItems = computed(() =>
    router
      .getRoutes()
      .filter((route) => route.meta.title)
      .sort((a, b) => (a.meta.order || 0) - (b.meta.order || 0))
      .map((route) => ({
        title: route.meta.title,
        icon: route.meta.icon,
        path: route.path,
      })),
  )

  const nav = ref(false)
  const toggleDrawer = () => {
    nav.value = !nav.value
  }
</script>
<template>
  <v-app>
    <app-navbar
      :menu-items="navItems"
      @drawer="toggleDrawer"
    />

    <v-navigation-drawer v-model="nav">
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
          v-for="item in navItems"
          :key="item.path"
          :prepend-icon="item.icon"
          :title="item.title"
          :to="item.path"
        />
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
