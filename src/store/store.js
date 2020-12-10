import { combineReducers, createStore } from 'redux';
import tasksReducer from './reducers/tasksReducer';

const store = createStore(combineReducers({tasksReducer}));

export default store;
