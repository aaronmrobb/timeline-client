import { List, Map, fromJS, toJS } from 'immutable'
import { toggleLogin, toggleMenu } from './reducers/navigation'

const initialState = Map({
  auth: undefined,
  projects: undefined,
  navigation: Map({
    loginForms: false,
    menuCollapse: true
  })
})

export default function(state = initialState, action) {
  switch(action.type) {
    case 'USER_LOGIN':
      return state
    case 'USER LOGOUT':
      return state
    case 'CREATE_PROJECT':
      return state
    case 'UPDATE_PROJECT':
      return state
    case 'DELETE_PROEJCT':
      return state
    case 'TOGGLE_LOGIN':
      return toggleLogin(state)
    case 'TOGGLE_MENU':
      return toggleMenu(state)
  }
  return state
}
