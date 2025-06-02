<script setup lang="ts">
  const { list } = useTodo()
  const click = (item: string) => console.log('clicou', item)
</script>
<template>
  <h1>Todo List</h1>
  <v-list>
    <v-list-item
      v-for="item in list"
      :key="item.name"
      prepend-icon="mdi-check"
      :title="item.name"
      @click="click(item.name)"
    />
  </v-list>
</template>
