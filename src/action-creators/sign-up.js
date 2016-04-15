import { userLogin } from './login'

export function createUser(username, password) {
  return function(dispatch, getState) {
    const ref = getState().get('ref')
    ref.createUser({
      email: username,
      password: password
    }, (err, userData) => {
      if (err) {
        switch (err.code) {
          case "EMAIL_TAKEN":
            console.log('borked')
            break
          case 'INVALID_EMAIL':
            console.log('borked')
            break
          default:
            console.log('Wtf')
        }} else {
          console.log('user created... logging in')
          dispatch(userLogin(username, password))
        }
    })
    }
  }
