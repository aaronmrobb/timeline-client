import { List, Map, fromJS, toJS } from 'immutable'

const initialState = fromJS({
  user: undefined,
  projects: []
})

export default function(state = initialState, action) {
  switch(action.type) {
    case 'DO_SOMETHING':
      return state
  }
}
