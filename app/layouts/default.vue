<script setup lang="ts">
  interface NavItem {
    title: string
    route: string
    icon: string
  }
  const navItems: NavItem[] = [
    {
      title: 'Home',
      route: '',
      icon: 'mdi-home-account',
    },
    {
      title: 'Limitador de Acessos',
      route: 'counter',
      icon: 'mdi-counter',
    },
    {
      title: 'Todo',
      route: 'todo',
      icon: 'mdi-format-list-checks',
    },
    {
      title: 'About',
      route: 'about',
      icon: 'mdi-information',
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

      <v-list
        density="compact"
        nav
      >
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          :prepend-icon="item.icon"
          :title="item.title"
          :to="`/${item.route}`"
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
