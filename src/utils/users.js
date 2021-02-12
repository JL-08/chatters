const users = [];

const joinUser = (id, name, topic) => {
  const user = { id, name, topic };
  users.push(user);

  return user;
};

const getCurrentUser = (id) => {
  return users.find((user) => user.id === id);
};

module.exports = {
  joinUser,
  getCurrentUser,
};
