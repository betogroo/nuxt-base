<script setup lang="ts">
  definePageMeta({
    title: 'Tarefas',
  })
  const {
    list,
    checkedList,
    uncheckedList,
    toggleCheck,
    addItem,
    addDefaultList,
    clearList,
    selectAll,
    selectNone,
    deleteItem,
  } = useTodo()
  const formData = ref<string>('')
  const handleSubmit = () => {
    addItem(formData.value)
    formData.value = ''
  }

  const handleDelete = (id: string) => {
    deleteItem(id)
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
      <v-btn
        icon="mdi-checkbox-multiple-marked-outline"
        variant="text"
        @click="selectAll"
      />
      <v-btn
        icon="mdi-checkbox-blank-off-outline"
        variant="text"
        @click="selectNone"
      />
      <TodoList
        :list="uncheckedList"
        name="Itens não Conferidos"
        not-found-message="Nenhum item a conferir"
        @delete-click="handleDelete"
        @item-click="toggleCheck"
      />

      <TodoList
        :list="checkedList"
        name="Itens Conferidos"
        not-found-message="Nenhum item conferido"
        @delete-click="handleDelete"
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
