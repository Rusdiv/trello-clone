import initialDate from '../../initial-date';

const ADD_TASK = 'ADD_TASK';
const CHANGE_BACKGROUND = 'CHANGE_BACKGROUND';
const SET_STATE = 'SET_STATE';
const ADD_URL = 'ADD_URL';
const ADD_TO_HISTORY = 'ADD_TO_HISTORY';

let initialState = JSON.parse(localStorage.getItem('state'));

if (!initialState) {
  initialState = initialDate;
}

let idCounter = Object.keys(initialState.tasks).length + 1;

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTaskId = `task-${idCounter}`;
      const columnId = action.columnId;
      ++idCounter;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [newTaskId]: {
            id: newTaskId,
            content: action.newTaskText,
            url: [],
          },
        },
        columns: {
          ...state.columns,
          [action.columnId]: {
            title: action.title,
            id: action.columnId,
            taskIds: [...state.columns[columnId].taskIds, newTaskId],
          },
        },
      };
    case ADD_TO_HISTORY:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.taskId]: {
            ...state.tasks[action.taskId],
            history: [...state.tasks[action.taskId].history, action.action],
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
    case ADD_URL:
      if (action.url) {
        return {
          ...state,
          tasks: {
            ...state.tasks,
            [action.taskId]: {
              ...state.tasks[action.taskId],
              url: [...state.tasks[action.taskId].url, action.url],
            },
          },
        };
      }
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export const addNewTask = (newTaskText, columnId, title) => ({
  type: ADD_TASK,
  newTaskText,
  columnId,
  title,
});

export const changeBackground = (color) => ({
  type: CHANGE_BACKGROUND,
  color,
});

export const addToHistory = (taskId, action) => ({
  type: ADD_TO_HISTORY,
  taskId,
  action,
});

export const addUrl = (url, taskId) => ({
  type: ADD_URL,
  taskId,
  url,
});

export const setState = (newState) => ({
  type: SET_STATE,
  newState,
});

export default tasksReducer;
