interface List {
  id: number
  name: string
  checked: boolean
}

const useTodo = () => {
  const list = ref<List[]>([
    {
      id: 1,
      name: 'Escova de Dentes',
      checked: false,
    },
    {
      id: 2,
      name: 'Sabonete',
      checked: false,
    },
    {
      id: 3,
      name: 'Secador de Cabelo',
      checked: false,
    },
    {
      id: 4,
      name: 'Escova de Cabelo',
      checked: false,
    },
    {
      id: 5,
      name: 'Carregador',
      checked: false,
    },
  ])

  function toggleCheck(id: number) {
    const itemList = list.value.find((item) => item.id === id)
    if (itemList) {
      itemList.checked = !itemList.checked
    }
  }

  return { list, toggleCheck }
}

export default useTodo
