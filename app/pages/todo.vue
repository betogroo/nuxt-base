<script setup lang="ts">
  const { list } = useTodo()
  const click = (item: string, index: number) =>
    console.log('clicou', item, index)
</script>
<template>
  <h1>Todo List</h1>
  <v-list>
    <v-list-item
      v-for="(item, i) in list"
      :key="item.name"
      prepend-icon="mdi-check"
      :title="item.name"
      @click="click(item.name, i)"
    />
  </v-list>
</template>
