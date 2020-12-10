const initialDate = {
  tasks: {
    'task-1': { id: 'task-1', content: 'some text about dnd' },
    'task-2': { id: 'task-2', content: 'lalala' },
    'task-3': { id: 'task-3', content: 'Learn React' },
    'task-4': { id: 'task-4', content: 'Learn , learn and learn' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default initialDate;
