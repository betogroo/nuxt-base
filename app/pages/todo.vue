<script setup lang="ts">
  const {
    list,
    checkedList,
    uncheckedList,
    toggleCheck,
    addItem,
    addDefaultList,
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
    </div>
    <div
      v-else
      class="d-flex justify-space-between align-center"
    >
      <h1 class="text-subtitle-1">Não há tarefas cadastradas!</h1>
      <v-btn
        color="success"
        @click="addDefaultList"
        >Adicionar Padrão</v-btn
      >
    </div>
  </v-container>
</template>
