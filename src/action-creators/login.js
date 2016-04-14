export function checkAuth(){
  return function (dispatch, getState) {
    const authData = getState().get('ref').getAuth()
    if (authData) {
      dispatch(loginSuccess(authData, false))
    } else {

    }
  }
}

export function userLogin(username, password) {
  return function (dispatch, getState) {
    getState().get('ref').authWithPassword({
      email: username,
      password: password
    }, (err, userData) => {
      if (err) {
        dispatch(loginFailure())
      } else {
        dispatch(loginSuccess(userData, true))
      }
    })
  }
}

/* Sync Actions */

export function userLogout() {
  return function (dispatch, getState) {
    getState().get('ref').unauth()
    dispatch(userLogoutSuccess())
  }
}


export function toggleLogin() {
  return {
    type: 'TOGGLE_LOGIN'
  }
}

export function toggleMenu() {
  return {
    type: 'TOGGLE_MENU'
  }
}

function loginSuccess(userData, dropDown) {
  return {
    type: 'USER_LOGIN',
    user: userData,
    dropDown: dropDown
  }
}

function loginFailure() {
  return {
    type: 'LOGIN_FAILURE'
  }
}


function userLogoutSuccess() {
  return {
    type: 'USER_LOGOUT'
  }
}
