// types/global.d.ts
import type { PageMeta as NuxtPageMeta } from '#app'

declare module '#app' {
  interface PageMeta extends NuxtPageMeta {
    // Adicione suas propriedades personalizadas aqui
    title: string
    icon?: string
    order?: number
    hideInNav?: boolean
    // outras propriedades...
  }
}
