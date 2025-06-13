<script setup lang="ts">
  const {
    decreaseValue,
    increaseValue,
    displayNumber,
    isEmpty,
    isFull,
    maxEntry,
  } = useCounter()

  const isMaxEntryModalActive = ref(false)

  const handleSetMaxEntry = () => {
    isMaxEntryModalActive.value = true
  }

  const formValue = ref(0)
  const setMaxEntry = () => {
    if (formValue.value < 1) return
    maxEntry.value = formValue.value
    if (displayNumber.value > maxEntry.value) {
      displayNumber.value = formValue.value
    }
    isMaxEntryModalActive.value = false
  }
</script>

<template>
  <div>
    <v-dialog
      v-model="isMaxEntryModalActive"
      width="400"
    >
      <v-card max-width="400">
        <v-card-text>
          <v-form class="d-flex align-center ga-3">
            <v-text-field
              v-model="formValue"
              hide-details
              label="Número máximo de visitantes"
              :placeholder="maxEntry.toString()"
              variant="outlined"
            />
            <v-btn @click="setMaxEntry">Salvar</v-btn>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn
            block
            @click="isMaxEntryModalActive = false"
            >Cancelar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
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
          <h4 class="text-caption align-center">
            max: {{ maxEntry }} -
            <v-btn
              density="compact"
              size="xx-small"
              variant="text"
              @click="handleSetMaxEntry"
              >Alterar</v-btn
            >
          </h4>
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
