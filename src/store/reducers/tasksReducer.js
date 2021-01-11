import initialDate from '../../initial-date';

const ADD_TASK = 'ADD_TASK';
const ADD_COLUMN = 'ADD_COLUMN';
const CHANGE_BACKGROUND = 'CHANGE_BACKGROUND';
const SET_STATE = 'SET_STATE';
const ADD_URL = 'ADD_URL';
const ADD_TO_TASK_HISTORY = 'ADD_TO_TASK_HISTORY';
const CHANGE_COLOR = 'CHANGE_COLOR';
const ADD_TO_DESK_HISTORY = 'ADD_TO_DESK_HISTORY';
const ADD_USER_TO_TASK = 'ADD_USER_TO_TASK';
const ADD_TIME = 'ADD_TIME';

const mouths = [
  'янв',
  'фев',
  'март',
  'апр',
  'май',
  'июн',
  'июл',
  'авг',
  'сент',
  'окт',
  'нояб',
  'декаб',
];

let initialState = JSON.parse(localStorage.getItem('state'));

if (!initialState) {
  initialState = initialDate;
}

let idCounter = Object.keys(initialState.tasks).length + 1;
let ColumnIdCounter = Object.keys(initialState.columns).length + 1;

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLUMN:
      const newColumnId = `column${ColumnIdCounter}`;
      ++ColumnIdCounter;
      return {
        ...state,
        columns: {
          ...state.columns,
          [newColumnId]: {
            title: action.title,
            id: newColumnId,
            taskIds: [],
          },
        },
        columnOrder: [...state.columnOrder, newColumnId],
      };
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
            history: [],
            color: null,
            users: [],
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
    case ADD_USER_TO_TASK:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.taskId]: {
            ...state.tasks[action.taskId],
            users: [...state.tasks[action.taskId].users, action.newUser],
          },
        },
      };
    case ADD_TO_DESK_HISTORY:
      const date = new Date();
      const day = date.getDate();
      const mouth = date.getMonth();
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes();

      const time = `${day} ${mouths[mouth]} ${year}г. в ${hours}:${minutes}`;

      let newHistoryItem = {
        text: '',
        time: '',
      };

      if (action.variant === 'addTask') {
        newHistoryItem.text = `${action.user} добавил карточку ${action.card}`;
        newHistoryItem.time = time;
      }

      if (action.variant === 'addColumn') {
        newHistoryItem.text = `${action.user} добавил колонку ${action.card}`;
        newHistoryItem.time = time;
      }

      if (action.variant === 'changeDeskColor') {
        newHistoryItem.text = `${action.user} поменял цвет доски`;
        newHistoryItem.time = time;
      }

      if (action.variant === 'changeTaskColor') {
        newHistoryItem.text = `${action.user} поменял цвет у ${action.card}`;
        newHistoryItem.time = time;
      }

      if (action.variant === 'addUser') {
        newHistoryItem.text = `${action.user} добавил пользователя у ${action.card}`;
        newHistoryItem.time = time;
      }

      if (action.variant === 'addUrl') {
        newHistoryItem.text = `${action.user} добавил ссылку у ${action.card}`;
        newHistoryItem.time = time;
      }

      if (action.variant === 'addTime') {
        newHistoryItem.text = `${action.user} добавил время у ${action.card}`;
        newHistoryItem.time = time;
      }

      return {
        ...state,
        history: [...state.history, newHistoryItem],
      };
    case ADD_TO_TASK_HISTORY:
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
    case CHANGE_COLOR:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.taskId]: {
            ...state.tasks[action.taskId],
            color: action.color,
          },
        },
      };
    case ADD_TIME:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.taskId]: {
            ...state.tasks[action.taskId],
            time: action.time,
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

export const addToDeskHistory = (variant, card, user) => ({
  type: ADD_TO_DESK_HISTORY,
  variant,
  card,
  user,
});

export const addNewTask = (newTaskText, columnId, title) => ({
  type: ADD_TASK,
  newTaskText,
  columnId,
  title,
});

export const addUserToTask = (taskId, newUser) => ({
  type: ADD_USER_TO_TASK,
  taskId,
  newUser,
});

export const addColumn = (title) => ({
  type: ADD_COLUMN,
  title,
});

export const changeBackground = (color) => ({
  type: CHANGE_BACKGROUND,
  color,
});

export const addTime = (taskId, time) => ({
  type: ADD_TIME,
  taskId,
  time,
});

export const changeTaskColor = (taskId, color) => ({
  type: CHANGE_COLOR,
  taskId,
  color,
});

export const addToHistory = (taskId, action) => ({
  type: ADD_TO_TASK_HISTORY,
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
