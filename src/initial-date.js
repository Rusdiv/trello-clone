const initialState = {
  tasks: {
    'task-1': {
      id: 'task-1',
      content: 'log in edu tatar',
      url: ['https://edu.tatar.ru/logon'],
      history: [],
    },
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
  background: '#38B571',
};
export default initialState;
