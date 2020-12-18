import { combineReducers, createStore } from 'redux';
import tasksReducer from './reducers/tasksReducer';
import authReducer from './reducers/authReducer';

const store = createStore(
  combineReducers({ tasksReducer, authReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
