const ADD_TASK = 'ADD_TASK';
const ADD_TO_LOCALSTORAGE = 'ADD_TO_LOCALSTORAGE';

const initialState = {
  tasks: {
    'task-1': { id: 'task-1', content: 'some text about dnd' },
    'task-2': { id: 'task-2', content: 'lalala' },
    'task-3': { id: 'task-3', content: 'Learn React' },
    'task-4': { id: 'task-4', content: 'Learn , learn and learn' },
  },
  columns: {
    column1: {
      id: 'column1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    column2: {
      id: 'column2',
      title: 'In progress',
      taskIds: [],
    },
    column3: {
      id: 'column3',
      title: 'Done',
      taskIds: [],
    },
  },
  columnOrder: ['column1', 'column2', 'column3'],
};

const idCounter = Object.keys(initialState.tasks).length + 1;

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTaskId = `task-${idCounter}`;
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
    case ADD_TO_LOCALSTORAGE:
      const newState = JSON.stringify(state);
      localStorage.setItem('state', newState);
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export const addNewTask = (newTaskText) => ({ type: ADD_TASK, newTaskText });
export const addToLocalStorage = () => ({ type: ADD_TASK });


export default tasksReducer;
