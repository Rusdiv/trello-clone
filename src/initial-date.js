const initialState = {
  tasks: {
    'task-1': { id: 'task-1', content: 'some text about dnd', url: 'https://edu.tatar.ru/logon' },
    'task-2': { id: 'task-2', content: 'lalala', url: null },
    'task-3': { id: 'task-3', content: 'Learn React', url: null },
    'task-4': { id: 'task-4', content: 'Learn , learn and learn', url: null },
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
  background: '#92F153',
};
export default initialState;
