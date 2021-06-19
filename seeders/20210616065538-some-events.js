"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "events",
      [
        {
          imageUrl:
            "https://i.pinimg.com/originals/eb/5a/4e/eb5a4e45798608b22c6bb6f9276dc25e.jpg",
          title: "Capoeira Classes",
          description: "Capoeira classes every tue-thu at Zuiderpark",
          phone: 622334422,
          startDate: "2021-06-19",
          endDate: "2021-06-19",
          startHour: "11:00",
          lat: 52.055858,
          lng: 4.285709,
          isCanceled: false,
          parkId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://thumbs.dreamstime.com/b/group-young-women-wearing-colorful-sports-outfits-doing-zumba-exercises-outside-city-lake-dancing-training-to-loose-latin-184326179.jpg",
          title: "Zumba Dance",
          description: "Zumba classes today at Westbroekpark",
          phone: 10,
          startDate: "2021-06-20",
          endDate: "2021-06-20",
          startHour: "12:00",
          lat: 52.105771,
          lng: 4.290591,
          isCanceled: false,
          parkId: 2,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://image.shutterstock.com/z/stock-vector-forro-dance-and-music-687360163.jpg",
          title: "Forrosa Jam Session",
          description: "Live Music with Forrosa at Zuiderpark",
          phone: 622222422,
          startDate: "2021-06-20",
          endDate: "2021-06-21",
          startHour: "10:00",
          lat: 52.055858,
          lng: 4.285709,
          isCanceled: false,
          parkId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://whatsupwithamsterdam.com/cms/wp-content/uploads/2019/04/Festivalsamsterdam2019-1024x584.jpg?ezimgfmt=ng:webp/ngcb2",
          title: "Some event on Noorderpark",
          description: "Live Music at Noorderpark Amsterdam",
          phone: 622222422,
          startDate: "2021-06-23",
          endDate: "2021-06-23",
          startHour: "17:00",
          lat: 52.055858,
          lng: 4.285709,
          isCanceled: false,
          parkId: 3,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://media.newyorker.com/photos/5fbed85ea6d08c764dcacdea/1:1/w_1364,h_1364,c_limit/Miller-QueensGambit.jpg",
          title: "Queen Gambit Chess Event",
          description:
            "Cafe Gambito promoting outdoor chess at Westerpark in Amesterdam",
          phone: 622222422,
          startDate: "2021-06-22",
          endDate: "2021-06-22",
          startHour: "11:00",
          lat: 52.055858,
          lng: 4.285709,
          isCanceled: false,
          parkId: 4,
          userId: 3,
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
