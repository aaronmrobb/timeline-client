import Firebase from 'firebase'
import { List, Map, fromJS, toJS } from 'immutable'
import { toggleLogin, toggleMenu } from './reducers/navigation'
import { userLogin } from './reducers/users'

const firebaseRef = new Firebase('https://timelined.firebaseio.com/')

const initialState = Map({
  ref: firebaseRef,
  auth: undefined,
  projects: undefined,
  navigation: Map({
    loginForms: false,
    menuCollapse: true
  })
})

export default function(state = initialState, action) {
  console.log(action.type)
  switch(action.type) {
    case 'USER_LOGIN':
      return userLogin(state, action.user)
    case 'USER_LOGOUT':
      return state
    case 'LOGIN_FAILURE':
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
