const { Router } = require("express");
const Event = require("../models").event;
const Park = require("../models").park;
const City = require("../models").city;
const CommentEvent = require("../models").commentEvent;
const User = require("../models").user;

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

//GET event details
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    console.log(id);
    if (isNaN(parseInt(id))) {
      return res.status(400).send({ message: "event id is not a number" });
    }

    const event = await Event.findByPk(id, {
      include: [
        {
          model: Park,
          attributes: ["name", "lat", "lng"],
          include: [
            {
              model: City,
              attributes: ["name"],
            },
          ],
        },
        {
          model: CommentEvent,
        },
        {
          model: User,
          as: "going",
          attributes: ["id"],
        },
        {
          model: User,
          as: "owner",
          attributes: ["id", "name"],
        },
      ],
    });

    if (event === null) {
      return res.status(404).send({ message: "event not found" });
    }

    res.status(200).send({ message: "ok", event });
  } catch (e) {
    next(e);
  }
});

//POST an event
router.post("/", authMiddleware, async (req, res) => {
  // console.log("***I got a request to POST a new event!");
  // After checked by authMiddleware lets accept the request and get the userId from the authMiddleware
  const userId = req.user.id;
  // console.log("what is userId?", userId);

  const {
    imageUrl,
    title,
    description,
    phone,
    startDate,
    endDate,
    lat,
    lng,
    parkId,
  } = req.body;

  //check required fields
  if (
    !imageUrl ||
    !title ||
    !description ||
    !startDate ||
    !endDate ||
    !lat ||
    !lng ||
    !parkId
  ) {
    return res
      .status(400)
      .send({ message: "Please fill all the required fields" });
  }
  //TODO: check if park exists on list

  //After verify if constrains are matched we finnally CREATE it on the table stories
  const event = await Event.create({
    imageUrl,
    title,
    description,
    phone,
    startDate,
    endDate,
    lat,
    lng,
    parkId,
    userId, //from authMiddleware
  });
  return res.status(201).send({ message: "Event created!", event });
});

module.exports = router;
