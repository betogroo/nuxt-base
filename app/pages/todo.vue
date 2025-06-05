<script setup lang="ts">
  const { checkedList, uncheckedList, toggleCheck } = useTodo()
</script>
<template>
  <div>
    <TodoList
      v-if="uncheckedList.length"
      :list="uncheckedList"
      name="Itens não Conferidos"
      @item-click="toggleCheck"
    />
    <h1
      v-else
      class="text-h5"
    >
      Todos os itens já foram conferidos
    </h1>
    <div v-if="checkedList.length">
      <v-divider />
      <TodoList
        :list="checkedList"
        name="Itens Conferidos"
        @item-click="toggleCheck"
      />
    </div>
  </div>
</template>
