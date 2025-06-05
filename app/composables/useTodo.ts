import type { List } from '~/types'

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
      checked: true,
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
    // aqui é para mostrar que a função é executada, porém itemList não é reativo com a prop
    // utilizar evento
    console.log(id)
    const itemList = list.value.find((item) => item.id === id)
    if (itemList) {
      itemList.checked = !itemList.checked
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
