const initialState = {
  users: [],
  added_count: 0,
  filters: {
    userChecked: false,
    usersSorted: []
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      let user = {
        "id": state.added_count + 1,
        "name": action.name,
        "gender": action.gender
      }
      return {
        ...state,
        added_count: state.added_count + 1,
        users: state.users.concat([user])
      }

    case 'CHECK_USER':
      let { users } = state;
      let checker = false;
      for (let i = 0; i < users.length; i++) {
        if (users[i].name === action.name) {
          checker = true;
          break;
        }
      }

      return {
        ...state,
        filters: {
          ...state.filters,
          userChecked: checker
        }
      }

    case 'DELETE_USER':
      let sampleUsers = state.users.filter((user) => {
        if (user.id !== action.id) {
          return true;
        } else return false
      });

      return {
        ...state,
        users: sampleUsers
      }
    default:
      return state;
  }
}
