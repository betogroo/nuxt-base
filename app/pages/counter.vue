<template>
  <div>
    <h1 class="text-h4 text-center mb-2">Limitador de Acessos</h1>
    <v-card
      class="mx-auto pa-5"
      :color="displayNumber >= maxEntry ? 'error' : 'success'"
      max-width="400"
      rounded="lg"
      variant="tonal"
    >
      <v-card-text>
        <v-card
          class="mx-auto text-center mt-3 pa-4"
          :color="displayNumber >= maxEntry ? 'error' : 'success'"
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
          :disabled="displayNumber <= 0"
          size="x-large"
          variant="elevated"
          width="135"
          @click="displayNumber--"
          >-</v-btn
        >
        <v-btn
          color="primary"
          :disabled="displayNumber >= maxEntry"
          size="x-large"
          variant="elevated"
          width="135"
          @click="displayNumber++"
          >+</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
  export default defineComponent({
    data() {
      return {
        displayNumber: 7,
        maxEntry: 10,
      }
    },
  })
</script>
