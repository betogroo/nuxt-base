const useNavDrawer = () => {
  const router = useRouter()
  const navItems = computed(() =>
    router
      .getRoutes()
      .filter((route) => route.meta.title)
      .sort((a, b) => (a.meta.order || 0) - (b.meta.order || 0))
      .map((route) => ({
        title: route.meta.title,
        icon: route.meta.icon,
        path: route.path,
      })),
  )

  const isDrawerActive = ref(false)
  const toggleDrawer = () => {
    isDrawerActive.value = !isDrawerActive.value
  }
  return { navItems, isDrawerActive, toggleDrawer }
}

export default useNavDrawer
