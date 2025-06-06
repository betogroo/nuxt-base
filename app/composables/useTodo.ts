import type { List } from '~/types'
import { useStorage } from '@vueuse/core'

const useTodo = () => {
  const defaultList: List[] = [
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
      checked: false,
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
  ]

  const list = useStorage<List[]>('todo-list', [], undefined, {
    mergeDefaults: true,
  })

  const toggleCheck = (id: string) => {
    const item = list.value.find((item) => item.id === id)
    if (item) {
      item.checked = !item.checked
    }
  }
  const addDefaultList = () => {
    list.value = defaultList
  }
  const addItem = (item: string) => {
    const newData: List = {
      checked: false,
      name: item,
      id: crypto.randomUUID(),
    }
    //list.value.push(newData)
    //list.value = [newData, ...list.value]
    list.value.unshift(newData)
  }

  const clearList = () => {
    list.value = []
  }

  const checkedList = computed(() =>
    list.value.filter((item) => item.checked === true),
  )
  const uncheckedList = computed(() =>
    list.value.filter((item) => !item.checked),
  )

  return {
    list,
    toggleCheck,
    addItem,
    checkedList,
    uncheckedList,
    addDefaultList,
    clearList,
  }
}

export default useTodo
