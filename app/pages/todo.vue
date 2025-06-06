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

  const readyToDelete = ref(false)
  const handleDelete = () => {
    readyToDelete.value = true
  }
  const confirmDelete = () => {
    if (!readyToDelete.value) return
    clearList()
    readyToDelete.value = false
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
        v-if="uncheckedList.length"
        :list="uncheckedList"
        name="Itens não Conferidos"
        @item-click="toggleCheck"
      />
      <div v-else>Não há itens a conferir</div>
      <div v-if="checkedList.length">
        <v-divider />
        <TodoList
          :list="checkedList"
          name="Itens Conferidos"
          @item-click="toggleCheck"
        />
      </div>
      <v-btn
        v-if="!readyToDelete"
        block
        color="error"
        variant="outlined"
        @click="handleDelete"
        >Limpar Lista</v-btn
      >
      <v-btn
        v-else
        block
        color="error"
        @click="confirmDelete"
        >Clique novamente para confirmar</v-btn
      >
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
