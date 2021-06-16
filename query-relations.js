const {
  user,
  event,
  tagEvent,
  commentEvent,
  attendenceEvent,
  city,
  park,
} = require("./models");

async function listCityWithParks() {
  const lists = await city.findAll({
    include: { model: park, attributes: ["name"] },
  });

  return lists.map((list) => list.get({ plain: true }));
}

// listCityWithParks().then((lists) => console.log(lists));

async function parkWithCities() {
  const lists = await park.findAll({
    include: { model: city, attributes: ["name"] },
  });

  return lists.map((list) => list.get({ plain: true }));
}
// parkWithCities().then((lists) => console.log(lists));

async function getUserWithEventOwner(id) {
  const result = await event.findByPk(id, {
    // include: [{ model: user, as: "going" }],
    include: [
      { model: user, as: "owner" },
      { model: user, as: "going" },
      { model: commentEvent },
    ],
  });
  return result.get({ plain: true });
}

getUserWithEventOwner(2).then((user) => console.log(user));
