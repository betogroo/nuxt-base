<script setup lang="ts">
  const { checkedList, uncheckedList, toggleCheck } = useTodo()
</script>
<template>
  <div>
    <TodoList
      :list="uncheckedList"
      @item-click="toggleCheck"
    />
    <TodoList
      :list="checkedList"
      @item-click="toggleCheck"
    />
  </div>
</template>
