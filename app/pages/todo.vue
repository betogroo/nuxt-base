<script setup lang="ts">
  const {
    list,
    checkedList,
    uncheckedList,
    toggleCheck,
    addItem,
    addDefaultList,
    clearList,
  } = useTodo()
  const formData = ref<string>('')
  const handleSubmit = () => {
    addItem(formData.value)
    formData.value = ''
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

    <div v-if="list.length">
      <TodoList
        :list="uncheckedList"
        name="Itens não Conferidos"
        not-found-message="Nenhum item a conferir"
        @item-click="toggleCheck"
      />
      <TodoList
        :list="checkedList"
        name="Itens Conferidos"
        not-found-message="Nenhum item conferido"
        @item-click="toggleCheck"
      />
      <DeleteButton @confirm-delete="clearList" />
    </div>
    <div
      v-else
      class="d-flex justify-space-between align-center"
    >
      <h1 class="text-subtitle-1">Nenhuma tarefa!</h1>
      <v-btn
        color="success"
        @click="addDefaultList"
        >Adicionar Padrão</v-btn
      >
    </div>
  </v-container>
</template>
