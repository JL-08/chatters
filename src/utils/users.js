const users = [];

const joinUser = (id, name, topic) => {
  const user = { id, name, topic };
  users.push(user);

  return user;
};

const getUser = (id) => {
  return users.filter((el) => el.id === id);
};

module.exports = {
  joinUser,
};
