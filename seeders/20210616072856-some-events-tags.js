"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tagEvents",
      [
        {
          tagId: 5,
          eventId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 4,
          eventId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 4,
          eventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 6,
          eventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 1,
          eventId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 4,
          eventId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 1,
          eventId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 8,
          eventId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 7,
          eventId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tagEvents", null, {});
  },
};
