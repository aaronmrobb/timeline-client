import { fromJS } from 'immutable'

export function setProjects(state, projects) {
  console.log(projects)
  return state.set('projects', fromJS(projects))
}
