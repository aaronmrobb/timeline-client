export function createProject(name, description) {
  return function (dispatch, getState) {
    const ref = getState().get('ref')
    const user = getState().get('user')
    const userRef = ref.child('users').child(user)
    userRef.child('projects').push({
      name: name,
      description: description,
      events: [{
        name: 'Default',
        time: 'Default',
        location: 'Default'
      }]
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

export function createEvent(projectId, eventData) {
  return function (dispatch, getState) {
    const ref = getState().get('ref')
    const user = getState().get('user')
    const projectRef = ref.child('users/'+ user + '/projects/' + projectId + '/events')
    projectRef.push(eventData,
      (err) => {
        if (err === null) {
          dispatch(loadProjects())
        } else {
          console.log('Problems bro')
        }
      }
    )
  }
}

export function deleteEvent(projectId, eventId) {
  return function (dispatch, getState) {
    const ref = getState().get('ref')
    const user = getState().get('user')
    const eventRef = ref.child('users/'+ user + '/projects/' + projectId + '/events/' + eventId)
    eventRef.remove((err) => {
      if (err) {
        console.log('Error loading projects')
      } else {
        loadProjects()
      }
    })
  }
}

export function updateEvent(projectId, eventId, eventData) {
  return function (dispatch, getState) {
    const ref = getState().get('ref')
    const user = getState().get('user')
    const eventRef = ref.child('users/'+ user + '/projects/' + projectId + '/events/' + eventId)
  }
}

function setProjects(projects) {
  return {
    type: 'SET_PROJECTS',
    projects: projects
  }
}

export function updateProject() {
  return {
    type: 'UPDATE_PROJECT'
  }
}

export function toggleAddNewForm() {
  return {
    type: 'TOGGLE_PROJECT_FORM'
  }
}

export function toggleToggleEventEdit() {
  return {
    type: 'TOGGLE_EVENT_EDIT'
  }
}
