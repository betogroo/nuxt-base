// types/global.d.ts
import type { PageMeta as NuxtPageMeta } from '#app'

declare module '#app' {
  interface PageMeta extends NuxtPageMeta {
    title: string
    icon?: string
    order?: number
    hideInNav?: boolean
  }
}
