import { userLogin } from './async-actions/firebase-handlers'

export default store => next => action => {
  const state = store.getState()
  switch(action.type){
    case 'USER_LOGIN':
      return next(userLogin(state, action))
  }
  return next(action)
}
