interface List {
  name: string
  checked: boolean
}

const useTodo = () => {
  const list = ref<List[]>([
    {
      name: 'Escova de Dentes',
      checked: false,
    },
    {
      name: 'Sabonete',
      checked: false,
    },
    {
      name: 'Secador de Cabelo',
      checked: false,
    },
    {
      name: 'Escova de Cabelo',
      checked: false,
    },
  ])

  const toggleCheck = (i: number) => {
    const item = list.value[i]
    if (!item) return
    item.checked = !item.checked
  }

  return { list, toggleCheck }
}

export default useTodo
