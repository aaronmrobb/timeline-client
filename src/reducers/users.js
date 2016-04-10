import { toggleLogin } from './navigation'

export function userLogin(state, userdata) {
  const setUser = state.set('user', userdata.uid)
  const clearError = setUser.setIn(['navigation', 'login', 'error'], false)
  return toggleLogin(clearError)
}

export function userLogout(state) {
  const removeUser = state.set('user', undefined)
  const removeProjects = removeUser.set('projects', undefined)
  return removeProjects
}

export function loginFailure(state) {
  const setError = state.setIn(['navigation', 'login', 'error'], true)
  return setError
}
