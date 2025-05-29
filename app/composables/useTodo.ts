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
  ])
  return { list }
}

export default useTodo
