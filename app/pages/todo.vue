<script setup lang="ts">
  const { checkedList, uncheckedList, toggleCheck } = useTodo()
</script>
<template>
  <v-container max-width="480">
    <v-form class="d-flex align-center justify-space-around ga-3 mb-6">
      <v-text-field
        density="compact"
        :hide-details="true"
        variant="outlined"
      />
      <v-btn>Adicionar</v-btn>
    </v-form>
    <TodoList
      v-if="uncheckedList.length"
      :list="uncheckedList"
      name="Itens não Conferidos"
      @item-click="toggleCheck"
    />
    <h1
      v-else
      class="text-subtitle-1"
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
  </v-container>
</template>
