<script setup lang="ts">
  import type { List } from '~/types'
  interface Props {
    list: List[]
    name: string
  }
  defineProps<Props>()

  const $emit = defineEmits<{
    'item-click': [id: number]
  }>()
</script>

<template>
  <v-list>
    <v-list-subheader>
      <h1 class="text-h5">{{ name }}</h1>
    </v-list-subheader>
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
</template>
