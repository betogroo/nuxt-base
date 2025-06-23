# 📌 Estrutura de Pastas - Projeto Nuxt 4 com TypeScript

## ✅ Visão Geral da Estrutura:

```
app/
 ┣ components/
 ┃ ┣ app/
 ┃ ┃ ┣ nav-drawer.vue
 ┃ ┃ ┗ navbar.vue
 ┃ ┣ delete-button.vue
 ┃ ┗ todo-list.vue
 ┣ composables/
 ┃ ┣ use-counter.ts
 ┃ ┣ use-nav-drawer.ts
 ┃ ┗ use-todo.ts
 ┣ layouts/
 ┃ ┗ default.vue
 ┣ pages/
 ┃ ┣ about.vue
 ┃ ┣ counter.vue
 ┃ ┣ index.vue
 ┃ ┗ todo.vue
 ┣ types/
 ┃ ┣ app.ts
 ┃ ┣ index.ts
 ┃ ┗ todo.ts
 ┗ app.vue
```

## ✅ Detalhes de cada pasta:

### `/components/`

- Contém os **componentes Vue reutilizáveis**.
- Nome dos arquivos em **kebab-case**.
- Subpasta `/app/` para **componentes específicos da aplicação**, como Navbar e Drawer.

### `/composables/`

- Funções de Composition API reutilizáveis.
- Nome dos arquivos: **kebab-case**, sempre com prefixo `use-`.
- Nome das funções: **camelCase**, com prefixo `use`.

### `/layouts/`

- Layouts de página do Nuxt.
- O Nuxt reconhece automaticamente layouts como `default.vue`.

### `/pages/`

- Arquivos que representam rotas.
- Nome dos arquivos em **kebab-case**, refletindo as URLs.

### `/types/`

- Tipos TypeScript.
- Nome dos arquivos: **kebab-case**, com tipos internos em **PascalCase**.
- Exemplo de export centralizado em `/types/index.ts`:

```ts
export * from './todo'
export * from './app'
```

### `app.vue`

- Componente raiz da aplicação Nuxt.

## ✅ Convenções Gerais Adotadas:

| Categoria                   | Convenção                   |
| --------------------------- | --------------------------- |
| Nomes de arquivos de página | kebab-case                  |
| Nomes de composables        | kebab-case + prefixo `use-` |
| Nomes de componentes        | kebab-case                  |
| Tipos TypeScript            | PascalCase                  |
| Funções de composables      | camelCase + prefixo `use`   |
| Eventos customizados        | kebab-case                  |
| Props                       | camelCase                   |

## ✅ Exemplo de Composable:

```ts
// composables/use-counter.ts
export const useCounter = () => {
  const count = ref(0)
  const increment = () => count.value++

  return { count, increment }
}
```

## ✅ Exemplo de componente com v-model customizado:

```vue
<script setup lang="ts">
  const isDrawerActive = defineModel<boolean>('drawer')
</script>

<template>
  <v-navigation-drawer v-model="isDrawerActive">
    <!-- conteúdo -->
  </v-navigation-drawer>
</template>
```
