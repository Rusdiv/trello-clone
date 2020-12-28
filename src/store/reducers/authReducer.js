import { login } from '../../backend/backend';

const LogIn = 'LogIn';

const initialState = {
  isAuth: false,
  isAdmin: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LogIn:
      const user = login(action.login, action.password);
      if (user.length === 1) {
        if (user[0].isAdmin === true) {
          return {
            ...state,
            isAuth: true,
            isAdmin: true,
            user: user,
          };
        }
        return {
          ...state,
          user: user,
          isAuth: true,
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

export const logIn = (login, password) => ({ type: LogIn, login, password });

export default authReducer;
