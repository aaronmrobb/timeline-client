export function userLogin(username, password) {
  return {
    type: 'USER_LOGIN',
    data: {
      username: username,
      password: password
    }
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
