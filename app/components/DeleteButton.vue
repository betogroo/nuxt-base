<script setup lang="ts">
  const $emit = defineEmits<{
    'confirm-delete': []
  }>()

  const readyToDelete = ref(false)

  const handleDelete = () => {
    readyToDelete.value = true
  }
  const confirmDelete = () => {
    if (!readyToDelete.value) return
    $emit('confirm-delete')
    readyToDelete.value = false
  }
</script>

<template>
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
</template>
