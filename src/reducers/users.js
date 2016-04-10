import { toggleLogin } from './navigation'

export function userLogin(state, userdata) {
  const setUser = state.set('user', userdata.uid)
  return toggleLogin(setUser)
}
