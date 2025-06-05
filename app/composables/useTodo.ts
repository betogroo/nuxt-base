import type { List } from '~/types'

const useTodo = () => {
  const list = ref<List[]>([
    {
      id: crypto.randomUUID(),
      name: 'Escova de Dentes',
      checked: false,
    },
    {
      id: crypto.randomUUID(),
      name: 'Sabonete',
      checked: false,
    },
    {
      id: crypto.randomUUID(),
      name: 'Secador de Cabelo',
      checked: true,
    },
    {
      id: crypto.randomUUID(),
      name: 'Escova de Cabelo',
      checked: false,
    },
    {
      id: crypto.randomUUID(),
      name: 'Carregador',
      checked: false,
    },
  ])

  const toggleCheck = (id: string) => {
    const item = list.value.find((item) => item.id === id)
    if (item) {
      item.checked = !item.checked
    }
  }

  const checkedList = computed(() =>
    list.value.filter((item) => item.checked === true),
  )
  const uncheckedList = computed(() =>
    list.value.filter((item) => !item.checked),
  )

  return { list, toggleCheck, checkedList, uncheckedList }
}

export default useTodo
