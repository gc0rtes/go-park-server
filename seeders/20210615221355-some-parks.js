"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "parks",
      [
        {
          imageUrl:
            "https://images0.persgroep.net/rcs/zvs1yiPCRwodbx6qVgRixH30b-k/diocontent/132010135/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8&desiredformat=webp",
          name: "Zuiderpark",
          lat: 52.055858,
          lng: 4.285709,
          cityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://denhaag.com/sites/default/files/styles/image_paragraph_1000x580/public/bd7d97df-1b60-4af7-86fa-c643760d0c22.jpg?h=9363c2c9&itok=TdIS6eO2",
          name: "Westbroekpark",
          lat: 52.105771,
          lng: 4.290591,
          cityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "http://d3e1m60ptf1oym.cloudfront.net/6914cefd-543f-4393-b5b2-6644d76d79ed/301573_xgaplus.jpg",
          name: "Noorderpark",
          lat: 52.394852,
          lng: 4.919604,
          cityId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://www.iamsterdam.com/media/nature-and-parks/westerpark-cecile-obertop.jpg?w=977",
          name: "Westerpark",
          lat: 52.386702,
          lng: 4.876364,
          cityId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("parks", null, {});
  },
};
