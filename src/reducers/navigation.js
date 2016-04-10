export function toggleLogin(state) {
    return state.updateIn(['navigation', 'login', 'active'], formState => !formState)
}

export function toggleMenu(state) {
  return state.updateIn(['navigation', 'menuCollapse'], menuState => !menuState)
}
