<script setup lang="ts">
  const { list } = useTodo()
</script>
<template>
  <h1>Todo List</h1>
  <div>{{ list }}</div>
</template>
