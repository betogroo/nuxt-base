<script setup lang="ts">
  const { checkedList, uncheckedList, toggleCheck } = useTodo()
</script>
<template>
  <div>
    <TodoList
      :list="uncheckedList"
      name="Feito"
      @item-click="toggleCheck"
    />
    <v-divider />
    <TodoList
      :list="checkedList"
      name="Não Feito"
      @item-click="toggleCheck"
    />
  </div>
</template>
