let users = [
  {
    userId: 1,
    userName: 'Ruslan',
    userLogin: 'admin',
    userPassword: 'admin',
    isAdmin: true,
  },
  {
    userId: 2,
    userName: 'test',
    userLogin: 'test',
    userPassword: 'test',
    isAdmin: false,
  },
];

export const login = (login, password) => {
  const usersArrWithNull = users.map((user) => {
    if (user.userLogin === login && user.userPassword === password) {
      return user;
    }
    return null;
  });
  const authUser = usersArrWithNull.filter((user) => user != null);
  return authUser;
};
