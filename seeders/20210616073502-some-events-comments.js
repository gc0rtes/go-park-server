"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "commentEvents",
      [
        {
          comment: "user 1 wrote some comment on event 1",
          userId: 1,
          eventId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "user 1 wrote another comment on event 1",
          userId: 1,
          eventId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "user 3 wrote some comment on event 2",
          userId: 3,
          eventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "user 3 wrote another comment on event 3",
          userId: 3,
          eventId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "user 2 wrote some comment on event 3",
          userId: 2,
          eventId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("commentEvents", null, {});
  },
};
