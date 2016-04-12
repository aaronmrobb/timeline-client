/* Async Actions */

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

export function userLogout() {
  return function (dispatch, getState) {
    getState().get('ref').unauth()
    dispatch(userLogoutSuccess())
  }
}

export function createProject(name) {
  return function (dispatch, getState) {
    const ref = getState().get('ref')
    const user = getState().get('user')
    const userRef = ref.child('users').child(user)
    userRef.child('projects').push({
      name: name
    }, (err) => {
      if (err === null) {
        dispatch(loadProjects())
      }
    })
  }
}

function loadProjects() {
  return function (dispatch, getState) {
    const ref = getState().get('ref')
    const user = getState().get('user')
    const userRef = ref.child('users').child(user).child('projects')
    const projects = []
    userRef.on('value', (data) => {
      dispatch(setProjects(data.val()))
    })
  }
}

export function deleteProject(projectId) {
  return function (dispatch, getState) {
    const ref = getState().get('ref')
    const user = getState().get('user')
    const projectRef = ref.child('users').child(user).child('projects').child(projectId)
    projectRef.remove((err) => {
      if (err) {
        console.log('Cannot delete shit capn')
      } else {
        loadProjects()
      }
    })
  }
}

function setProjects(projects) {
  return {
    type: 'SET_PROJECTS',
    projects: projects
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


function userLogoutSuccess() {
  return {
    type: 'USER_LOGOUT'
  }
}


export function updateProject() {
  return {
    type: 'UPDATE_PROJECT'
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
