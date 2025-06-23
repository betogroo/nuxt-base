import { useStorage } from '@vueuse/core'

const useCounter = () => {
  const displayNumber = useStorage<number>('display-number', 0, undefined, {
    initOnMounted: true,
  })
  const maxEntry = useStorage<number>('max-entry', 10, undefined, {
    initOnMounted: true,
  })

  const increaseValue = () => displayNumber.value++

  const decreaseValue = () => displayNumber.value--

  const isFull = computed(() => displayNumber.value >= maxEntry.value)

  const isEmpty = computed(() => displayNumber.value <= 0)

  const setMaxEntry = (newValue: number) => {
    if (newValue < 1) return
    maxEntry.value = newValue
    if (displayNumber.value > maxEntry.value) {
      displayNumber.value = newValue
    }
  }

  return {
    displayNumber,
    maxEntry,
    increaseValue,
    decreaseValue,
    setMaxEntry,
    isFull,
    isEmpty,
  }
}

export default useCounter
