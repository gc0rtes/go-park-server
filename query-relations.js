// const {
//   user,
//   event,
//   tagEvent,
//   commentEvent,
//   attendenceEvent,
//   city,
//   park,
// } = require("./models");

// async function listCityWithParks() {
//   const lists = await city.findAll();

//   return lists.map((list) => list.get({ plain: true }));
// }

// listCityWithParks().then((lists) => console.log(lists));

const User = require("./models").user;

async function getUsers() {
  const allUsers = await User.findAll();
  return allUsers.map((user) => user.get({ plain: true }));
}

getUsers().then((users) => console.log(users));
