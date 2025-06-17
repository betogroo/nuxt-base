<script setup lang="ts">
  interface NavItem {
    title: string
    route: string
  }
  const navItems: NavItem[] = [
    {
      title: 'Home',
      route: '',
    },
    {
      title: 'Limitador de Acessos',
      route: 'counter',
    },
    {
      title: 'Todo',
      route: 'todo',
    },
    {
      title: 'About',
      route: 'about',
    },
  ]
</script>
<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon />
      <v-app-bar-title>My Nuxt App</v-app-bar-title>
      <v-spacer />
      <v-btn
        v-for="item in navItems"
        :key="item.title"
        text
        :to="`/${item.route}`"
        >{{ item.title }}</v-btn
      >
    </v-app-bar>
    <v-navigation-drawer>
      <template #prepend>
        <v-list-item
          lines="three"
          prepend-avatar="https://avatar.iran.liara.run/public/boy"
          subtitle="sergioaroudo@gmail.com"
          title="Sérgio Moreno"
        />
      </template>

      <v-divider />
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
