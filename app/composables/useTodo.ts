const useTodo = () => {
  const list = ref([
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
