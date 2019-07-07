import { createStore, combineReducers } from 'redux';

import userReducer from '../reducers/userReducer';

export default () => {
  const store = createStore(combineReducers({
    user_details: userReducer
    // filterUser: filterReducer
  }));

  return store;
};
