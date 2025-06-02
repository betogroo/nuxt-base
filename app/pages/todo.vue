<script setup lang="ts">
  const { list, toggleCheck } = useTodo()
</script>
<template>
  <h1>Todo List</h1>
  <v-list>
    <v-list-item
      v-for="(item, i) in list"
      :key="item.name"
      :prepend-icon="
        item.checked ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline'
      "
      :title="item.name"
      @click="toggleCheck(i)"
    />
  </v-list>
</template>
