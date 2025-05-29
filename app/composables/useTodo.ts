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
      checked: true,
    },
  ])
  return { list }
}

export default useTodo
