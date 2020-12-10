import initialDate from '../../initial-date';

const ADD_TASK = 'ADD_TASK';

const tasksReducer = (state = initialDate, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default tasksReducer;