const initialState = {
  tasks: {
    'task-1': {
      id: 'task-1',
      content: 'log in edu tatar',
      url: ['https://edu.tatar.ru/logon'],
      history: [],
      color: null,
    },
    'task-2': {
      id: 'task-2',
      content: 'some text',
      url: [],
      history: [],
      color: null,
    },
  },
  columns: {
    column1: {
      id: 'column1',
      title: 'To do',
      taskIds: ['task-1', 'task-2'],
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
  background: '#38B571',
  history: [],
};
export default initialState;
