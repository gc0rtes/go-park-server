const {
  user,
  event,
  tag,
  tagEvent,
  commentEvent,
  attendenceEvent,
  city,
  park,
} = require("./models");

async function listCityWithParks() {
  const result = await city.findAll({
    include: [
      { model: park, attributes: ["name"] },
      // { model: event, attributes: ["title"] }, // event is not associated ti city.
    ],
  });

  return result.map((list) => list.get({ plain: true }));
}

// listCityWithParks().then((lists) => console.log(lists));

// Find events by city
async function findEventsByCity() {
  const result = await event.findAll({
    attributes: ["title", "description"],
    include: {
      model: park,
      attributes: ["name", "cityId"],
      where: { cityId: 1 },
    },
  });

  return result.map((list) => list.get({ plain: true }));
}

// findEventsByCity().then((lists) => console.log(lists));

async function parkWithCityandEvents() {
  const result = await park.findAll({
    include: [
      { model: city, attributes: ["name"] },
      { model: event, attributes: ["title"] },
    ],
  });

  return result.map((list) => list.get({ plain: true }));
}
// parkWithCityandEvents().then((lists) => console.log(lists));

async function getUserWithEventOwner(id) {
  const result = await event.findByPk(id, {
    include: [
      { model: user, as: "owner" },
      { model: user, as: "going" },
      { model: commentEvent },
    ],
  });
  return result.get({ plain: true });
}

// getUserWithEventOwner(2).then((user) => console.log(user));

async function eventByTag() {
  const result = await event.findAll({
    include: { model: tag },
  });
  return result.map((list) => list.get({ plain: true }));
}

// eventByTag().then((user) => console.log(user));

async function eventByTag() {
  const result = await tag.findAll({
    where: { name: "game" },
    include: { model: event, attributes: ["title"] },
  });
  return result.map((list) => list.get({ plain: true }));
}

// eventByTag().then((user) => console.log(user));

async function eventsSortedTime() {
  const result = await event.findAll({ order: [["startDate", "ASC"]] });
  return result.map((list) => list.get({ plain: true }));
}

// eventsSortedTime().then((user) => console.log(user));

// What events One user is going?  how many events? -> going.map
async function userGoingEvents(id) {
  const result = await user.findByPk(id, {
    include: [{ model: event, as: "going" }],
  });
  return result.get({ plain: true });
}

userGoingEvents(2).then((user) => console.log(user));
