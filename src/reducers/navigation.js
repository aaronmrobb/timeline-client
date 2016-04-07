export function toggleLogin(state) {
  return state.set('loginForm', !state.get('loginForm'))
}
