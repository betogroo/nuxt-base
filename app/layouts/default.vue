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
    <app-nav-bar
      :menu-items="navItems"
      @drawer="toggleDrawer"
    />

    <app-nav-drawer
      v-model="nav"
      :menu-items="navItems"
    />
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
