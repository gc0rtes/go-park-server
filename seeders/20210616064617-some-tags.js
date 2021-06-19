"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tags",
      [
        {
          name: "music",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "sport",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "meetup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "artMartial",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "fitness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "game",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "education",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
