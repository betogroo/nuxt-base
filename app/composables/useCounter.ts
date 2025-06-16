const useCounter = () => {
  const displayNumber = ref(7)
  const maxEntry = ref(10)

  const increaseValue = () => displayNumber.value++

  const decreaseValue = () => displayNumber.value--

  const isFull = computed(() => displayNumber.value >= maxEntry.value)

  const isEmpty = computed(() => displayNumber.value <= 0)

  return {
    displayNumber,
    maxEntry,
    increaseValue,
    decreaseValue,
    isFull,
    isEmpty,
  }
}

export default useCounter
