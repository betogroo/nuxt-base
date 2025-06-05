<script setup lang="ts">
  const { checkedList, uncheckedList, toggleCheck, addItem } = useTodo()
  const formData = ref<string>('')
  const handleSubmit = () => {
    addItem(formData.value)
  }
</script>
<template>
  <v-container max-width="480">
    <v-form class="d-flex align-center justify-space-around ga-3 mb-6">
      <v-text-field
        v-model="formData"
        density="compact"
        :hide-details="true"
        variant="outlined"
      />
      <v-btn
        color="primary"
        :disabled="!formData.length"
        @click="handleSubmit"
        >Adicionar</v-btn
      >
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
