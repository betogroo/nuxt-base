<script setup lang="ts">
  const { list } = useTodo()
</script>
<template>
  <h1>Todo List</h1>
  <div
    v-for="item in list"
    :key="item.name"
  >
    {{ item }}
  </div>
</template>
