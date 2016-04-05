import { List, Map, fromJS, toJS } from 'immutable'

const initialState = fromJS({
  data: []
})

export default function(state = initialState, action) {
  switch(action.type) {
    case 'DO_SOMETHING':
      return state
  }
}
