export function userLogin(username, password) {
  return function (dispatch, getState) {
    getState().get('ref').authWithPassword({
      email: username,
      password: password
    }, (err, userData) => {
      if (err) {
        dispatch(loginFailure())
      } else {
        dispatch(loginSuccess(userData))
      }
    })
  }
}

function loginSuccess(userData) {
  return {
    type: 'USER_LOGIN',
    user: userData
  }
}

function loginFailure() {
  return {
    type: 'LOGIN_FAILURE'
  }
}

export function userLogout() {
  return {
    type: 'USER_LOGOUT'
  }
}

export function createProject() {
  return {
    type: 'CREATE_PROJECT'
  }
}

export function updateProject() {
  return {
    type: 'UPDATE_PROJECT'
  }
}

export function deleteProject() {
  return {
    type: 'DELETE_PROJECT'
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
