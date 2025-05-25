<template>
  <div>
    <h1 class="text-h4 text-center mb-2">Limitador de Acessos</h1>
    <v-card
      class="mx-auto pa-5"
      :color="isFull ? 'error' : 'success'"
      max-width="400"
      rounded="lg"
      variant="tonal"
    >
      <v-card-text>
        <v-card
          class="mx-auto text-center mt-3 pa-4"
          :color="isFull ? 'error' : 'success'"
          max-width="280"
          rounded="lg"
        >
          <h1 class="text-h2">{{ displayNumber }}</h1>
          <h2 class="text-h6">Pessoas Entraram</h2>
          <h4 class="text-caption">max: {{ maxEntry }}</h4>
        </v-card>
      </v-card-text>
      <v-card-actions class="justify-center mt-6">
        <v-btn
          color="warning"
          :disabled="isEmpty"
          size="x-large"
          variant="elevated"
          width="135"
          @click="decreaseValue"
          >-</v-btn
        >
        <v-btn
          color="primary"
          :disabled="isFull"
          size="x-large"
          variant="elevated"
          width="135"
          @click="increaseValue"
          >+</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
  export default defineComponent({
    setup() {
      const displayNumber = ref(7)
      const maxEntry = ref(10)

      const increaseValue = () => displayNumber.value++

      const decreaseValue = () => displayNumber.value--

      const isFull = computed(() => displayNumber.value >= maxEntry.value)

      const isEmpty = computed(() => displayNumber.value <= 0)

      return {
        displayNumber,
        maxEntry,
        increaseValue,
        decreaseValue,
        isFull,
        isEmpty,
      }
    },
  })
</script>
