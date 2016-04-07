export function toggleLogin(state) {
  return state.setIn(['navigation', 'loginForm'], !state.getIn(['navigation', 'loginForm']))
}
