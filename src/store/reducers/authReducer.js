const LogIn = 'LogIn';

const initialState = {
  isAuth: false,
  isAdmin: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LogIn:
      return {
        ...state,
        isAuth: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export const logIn = () => ({ type: LogIn });

export default authReducer;
