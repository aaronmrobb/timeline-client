import Firebase from 'firebase'
import { List, Map, fromJS, toJS } from 'immutable'
import { toggleLogin, toggleMenu } from './reducers/navigation'
import { userLogin, userLogout, loginFailure } from './reducers/users'
import { setProjects, toggleAddNewForm} from './reducers/projects'

const firebaseRef = new Firebase('https://timelined.firebaseio.com/')

const initialState = Map({
  ref: firebaseRef,
  auth: undefined,
  projects: Map({
    data: undefined,
    formToggle: false
  }),
  activeProject: undefined,
  navigation: Map({
    login: Map({
      active: false,
      status: Map({
        type: undefined,
        message: undefined
      })
    }),
    menuCollapse: true
  })
})

export default function(state = initialState, action) {
  console.log(action.type)
  switch(action.type) {
    case 'USER_LOGIN':
      return userLogin(state, action.user, action.dropDown)
    case 'USER_LOGOUT':
      return userLogout(state)
    case 'LOGIN_FAILURE':
      return loginFailure(state)
    case 'SET_PROJECTS':
      return setProjects(state, action.projects)
    case 'SET_ACTIVE_PROJECT':
      return setActiveProject(state, action.projectId)
    case 'TOGGLE_PROJECT_FORM':
      return toggleAddNewForm(state)
    case 'TOGGLE_LOGIN':
      return toggleLogin(state)
    case 'TOGGLE_MENU':
      return toggleMenu(state)
  }
  return state
}
