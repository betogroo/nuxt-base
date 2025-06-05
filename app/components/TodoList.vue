<script setup lang="ts">
  import type { List } from '~/types'
  defineProps<Props>()

  const $emit = defineEmits<{
    'item-click': [id: number]
  }>()

  interface Props {
    list: List[]
  }
</script>

<template>
  <v-list>
    <v-list-item
      v-for="item in list"
      :key="item.name"
      :class="item.checked ? 'text-error ' : 'text-success'"
      :prepend-icon="
        item.checked ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline'
      "
      :ripple="false"
      @click="$emit('item-click', item.id)"
    >
      <template #title>
        <span :class="item.checked ? 'text-decoration-line-through' : ''">{{
          item.name
        }}</span>
      </template>
    </v-list-item>
  </v-list>
  <v-list />
</template>
