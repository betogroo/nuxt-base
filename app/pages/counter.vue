<template>
  <div>
    <h1 class="text-h4 text-center mb-2">Limitador de Acessos</h1>
    <v-card
      class="mx-auto pa-5"
      color="success"
      max-width="400"
      rounded="lg"
      variant="tonal"
    >
      <v-card-text>
        <v-card
          class="mx-auto text-center mt-3 pa-4"
          color="success"
          max-width="280"
          rounded="lg"
        >
          <h1 class="text-h2">17</h1>
          <h2 class="text-h6">Pessoas Entraram</h2>
          <h4 class="text-caption">max: 50</h4>
        </v-card>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn
          color="warning"
          max-width="140"
          min-width="120"
          size="x-large"
          variant="elevated"
          >-</v-btn
        >
        <v-btn>+</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
