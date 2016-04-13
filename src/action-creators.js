/* Async Actions */
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

export function userLogout() {
  return function (dispatch, getState) {
    getState().get('ref').unauth()
    dispatch(userLogoutSuccess())
  }
}

export function createProject(name, description) {
  return function (dispatch, getState) {
    const ref = getState().get('ref')
    const user = getState().get('user')
    const userRef = ref.child('users').child(user)
    userRef.child('projects').push({
      name: name,
      description: description,
      events: {
        name: 'Default',
        time: 'Default',
        location: 'Default'
      }
    }, (err) => {
      if (err === null) {
        dispatch(toggleAddNewForm())
        dispatch(loadProjects())
      }
    })
  }
}

export function loadProjects() {
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

function loginSuccess(userData, dropDown) {
  return {
    type: 'USER_LOGIN',
    user: userData,
    dropDown: dropDown
  }
}

/* Sync Actions */

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

export function toggleAddNewForm() {
  return {
    type: 'TOGGLE_PROJECT_FORM'
  }
}
