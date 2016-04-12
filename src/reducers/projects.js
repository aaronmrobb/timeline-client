import { fromJS } from 'immutable'

export function setProjects(state, projects) {
  return state.setIn(['projects', 'data'], fromJS(projects))
}

export function toggleAddNewForm(state) {
  return state.updateIn(['projects', 'formToggle'], formstate => !formstate)
}
