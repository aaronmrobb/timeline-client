export function toggleLogin(state) {
  return state.setIn(['navigation', 'loginForm'], !state.getIn(['navigation', 'loginForm']))
}

export function toggleMenu(state) {
  return state.setIn(['navigation', 'menuCollapse'], !state.getIn(['navigation', 'menuCollapse']))
}
