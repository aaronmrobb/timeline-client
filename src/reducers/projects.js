import { fromJS } from 'immutable'

export function setProjects(state, projects) {
  return state.set('projects', fromJS(projects))
}
