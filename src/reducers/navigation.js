export function toggleLogin(state) {
  // return state.setIn(['navigation', 'loginForm'], !state.getIn(['navigation', 'loginForm']))
    return state.updateIn(['navigation', 'loginForm'], formState => !formState)
}

export function toggleMenu(state) {
  return state.updateIn(['navigation', 'menuCollapse'], menuState => !menuState)
}
