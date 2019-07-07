export const addUser = (name, gender) => {
  return {
    type: 'ADD_USER',
    name,
    gender
  }
}

export const deleteUser = (id) => {
  return {
    type: 'DELETE_USER',
    id
  }
}

export const checkUser = (name) => {
  return {
    type: 'CHECK_USER',
    name
  }
}