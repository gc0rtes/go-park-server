"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
          name: "Bob",
          email: "bob@bob.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
          name: "Gui",
          email: "gui@gui.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl: "https://randomuser.me/api/portraits/women/49.jpg",
          name: "Lay",
          email: "lay@lay.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
