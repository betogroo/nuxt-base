<script setup lang="ts">
  const { list, toggleCheck } = useTodo()
</script>
<template>
  <h1>Todo List</h1>
  <v-list>
    <v-list-item
      v-for="item in list"
      :key="item.name"
      :class="item.checked ? 'text-error ' : 'text-success'"
      :prepend-icon="
        item.checked ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline'
      "
      :ripple="false"
      @click="toggleCheck(item.id)"
    >
      <template #title>
        <span :class="item.checked ? 'text-decoration-line-through' : ''">{{
          item.name
        }}</span>
      </template>
    </v-list-item>
  </v-list>
</template>
