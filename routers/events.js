const { Router } = require("express");
const Event = require("../models").event;
const Park = require("../models").park;
const City = require("../models").city;

const authMiddleware = require("../auth/middleware");

const router = new Router();

// GET all events

router.get("/", async (req, res, next) => {
  try {
    const events = await Event.findAll({
      order: [["startDate", "ASC"]],
      include: [
        {
          model: Park,
          attributes: ["name"],
          include: [
            {
              model: City,
              attributes: ["name"],
            },
          ],
        },
      ],
    });

    res.status(200).send({ message: "ok", events });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
