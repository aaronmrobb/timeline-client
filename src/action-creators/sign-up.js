import { userLogin } from './login'

export function createUser(username, password) {
  return function(dispatch, getState) {
    const ref = getState().get('ref')
    ref.createUser({
      email: username,
      password: password
    }, (err, userData) => {
      if (err) {
        console.log(err.code)
        } else {
          console.log('user created... logging in')
          dispatch(userLogin(username, password))
        }
    })
    }
  }
