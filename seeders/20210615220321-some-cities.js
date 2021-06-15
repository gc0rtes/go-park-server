"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "cities",
      [
        {
          imageUrl:
            "https://cdn.change.inc/images/article/40955/1280/den-haag-adobe-stock.jpeg",
          name: "The Hague",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://www.theagilityeffect.com/app/uploads/2020/11/00_VINCI-ICONOGRAPHIE_1280x680-amsterdam-canal-on-the-west-P98BNG2.jpg",
          name: "Amsterdam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("cities", null, {});
  },
};
