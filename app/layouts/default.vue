<script setup lang="ts">
  const router = useRouter()
  const navItems = router.getRoutes()
  console.log(navItems)

  const nav = ref(false)
  const toggleDrawer = () => {
    nav.value = !nav.value
  }
</script>
<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click.stop="toggleDrawer" />
      <v-app-bar-title>My Nuxt App</v-app-bar-title>
      <v-spacer />
      <v-btn
        v-for="item in navItems"
        :key="item.path"
        text
        :to="item.path"
        >{{ item.meta.title }}</v-btn
      >
    </v-app-bar>
    <v-navigation-drawer v-model="nav">
      <template #prepend>
        <v-list-item
          lines="three"
          prepend-avatar="https://avatar.iran.liara.run/public/boy"
          subtitle="sergioaroudo@gmail.com"
          title="Sérgio Moreno"
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
          :title="item.meta.title"
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
