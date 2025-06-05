<script setup lang="ts">
  const { checkedList, uncheckedList } = useTodo()
</script>
<template>
  <div>
    <TodoList :list="uncheckedList" />
    <TodoList :list="checkedList" />
  </div>
</template>
