import initialDate from '../../initial-date';
const ADD_TASK = 'ADD_TASK';
const CHANGE_BACKGROUND = 'CHANGE_BACKGROUND';
const SET_STATE = 'SET_STATE';

let initialState = JSON.parse(localStorage.getItem('state'));

if (!initialState) {
  initialState = initialDate;
}

let idCounter = Object.keys(initialState.tasks).length + 1;

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTaskId = `task-${idCounter}`;
      ++idCounter;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [newTaskId]: { id: newTaskId, content: action.newTaskText },
        },
        columns: {
          ...state.columns,
          column1: {
            id: 'column1',
            title: 'To do',
            taskIds: [...state.columns.column1.taskIds, newTaskId],
          },
        },
      };
    case CHANGE_BACKGROUND:
      return {
        ...state,
        background: action.color,
      };
    case SET_STATE:
      return {
        ...action.newState,
      };
    default:
      return {
        ...state,
      };
  }
};

export const addNewTask = (newTaskText) => ({ type: ADD_TASK, newTaskText });

export const changeBackground = (color) => ({
  type: CHANGE_BACKGROUND,
  color,
});

export const setState = (newState) => ({
  type: SET_STATE,
  newState,
});

export default tasksReducer;
