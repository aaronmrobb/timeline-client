import { List, Map, fromJS, toJS } from 'immutable'

const initialState = fromJS({
  user: undefined,
  projects: []
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
      return state
  }
}
