<script setup lang="ts">
  import type { List } from '~/types'
  interface Props {
    list: List[]
    name: string
    notFoundMessage?: string
  }
  const { notFoundMessage = 'Nenhum dado a exibir' } = defineProps<Props>()

  const $emit = defineEmits<{
    'item-click': [id: string]
  }>()
</script>

<template>
  <div>
    <v-list>
      <v-list-subheader>
        <h1 class="text-h5">{{ list.length ? name : notFoundMessage }}</h1>
      </v-list-subheader>
      <template v-if="list.length">
        <v-list-item
          v-for="item in list"
          :key="item.id"
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
      </template>
    </v-list>
    <v-divider class="mb-2" />
  </div>
</template>
