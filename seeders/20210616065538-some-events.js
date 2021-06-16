"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "events",
      [
        {
          imageUrl: "http://",
          title: "Capoeira Classes",
          description: "Capoeira classes every tue-thu at Zuiderpark",
          phone: 0622334422,
          startDate: "2021-06-19 18:00+00",
          endDate: "2021-06-19 20:00+00",
          lat: 52.055858,
          lng: 4.285709,
          isCanceled: false,
          parkId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl: "http://",
          title: "Zumba Dance",
          description: "Zumba classes today at Westbroekpark",
          phone: 0,
          startDate: "2021-06-20 18:00+00",
          endDate: "2021-06-20 20:00+00",
          lat: 52.105771,
          lng: 4.290591,
          isCanceled: false,
          parkId: 2,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl: "http://",
          title: "Forrosa Jam Session",
          description: "Live Music with Forrosa at Zuiderpark",
          phone: 0622222422,
          startDate: "2021-06-21 17:00+00",
          endDate: "2021-06-21 18:00+00",
          lat: 52.055858,
          lng: 4.285709,
          isCanceled: false,
          parkId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("events", null, {});
  },
};
