const { Router } = require("express");
const Event = require("../models").event;
const Park = require("../models").park;
const City = require("../models").city;
const CommentEvent = require("../models").commentEvent;
const AttendanceEvent = require("../models").attendanceEvent;
const Tag = require("../models").tag;
const User = require("../models").user;

const authMiddleware = require("../auth/middleware");

//config to use moment.js
const moment = require("moment");
const range = moment().subtract(1, "days").toDate();

//See https://sequelize.org/v5/manual/querying.html OPERATORS session
const { Op } = require("sequelize");

//create new router
const router = new Router();

// GET all events
router.get("/", async (req, res, next) => {
  console.log("what ise new date", new Date());
  try {
    const events = await Event.findAll({
      where: {
        // find bettwen a range of period
        [Op.or]: [
          {
            startDate: {
              [Op.gte]: range,
            },
          },
          {
            endDate: {
              [Op.gte]: range,
            },
          },
        ],
      },
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
        {
          model: Tag,
          attributes: ["name"],
        },
      ],
    });

    res.status(200).send({ message: "A list of all events", events });
  } catch (e) {
    next(e);
  }
});

//GET event details
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    //console.log(id);
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
        {
          model: Tag,
          attributes: ["name"],
        },
      ],
    });

    if (event === null) {
      return res.status(404).send({ message: "event not found" });
    }

    res.status(200).send({ message: "Event Details", event });
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
    startHour,
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
    !startHour ||
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
    startHour,
    lat,
    lng,
    parkId,
    userId, //from authMiddleware
  });
  return res.status(201).send({ message: "Event created!", event });
});

//POST a comment on a Event
router.post("/:id", authMiddleware, async (req, res) => {
  // console.log("***I got a request to POST a comment");

  const userId = req.user.id;
  // console.log("what is userId?", userId);

  if (isNaN(parseInt(req.params.id))) {
    return res.status(400).send({ message: "Event id is not a number" });
  }
  const eventId = parseInt(req.params.id);
  // console.log("what is eventId?", eventId);

  const checkIfEventExist = await Event.findByPk(eventId);

  if (checkIfEventExist === null) {
    return res.status(404).send({ message: "This event does not exist." });
  }

  const { comment } = req.body;

  if (!comment) {
    return res
      .status(400)
      .send({ message: "Say something nice on your comment." });
  }

  const newComment = await CommentEvent.create({
    comment, // from the body
    userId, // from the middleWare
    eventId, //from the params
  });

  return res.status(201).send({ message: "Comment created", newComment });
});

//POST going to an Event
router.post("/:id/going", authMiddleware, async (req, res) => {
  // console.log("***I got a request to POST a going to Event");

  const userId = req.user.id;
  // console.log("what is userId?", userId);

  if (isNaN(parseInt(req.params.id))) {
    return res.status(400).send({ message: "Event id is not a number" });
  }
  const eventId = parseInt(req.params.id);
  // console.log("what is eventId?", eventId);

  const checkIfEventExist = await Event.findByPk(eventId);

  if (checkIfEventExist === null) {
    return res.status(404).send({ message: "This event does not exist." });
  }

  const userEventAlreadyGoing = await AttendanceEvent.findAll({
    where: { userId: userId, eventId: eventId },
  });
  // console.log("what is userEventAlreadyGoing", userEventAlreadyGoing);

  //A empty array [] and a full array [...] always return true
  //So to check if user x event is already on table use "[array].length > 0"
  if (userEventAlreadyGoing.length > 0) {
    return res
      .status(404)
      .send({ message: "The user is already going to this event" });
  }
  const attendence = await AttendanceEvent.create({
    userId, // from the middleWare
    eventId, //from the params
  });

  return res.status(201).send({ message: "attendence created", attendence });
});

//DESTROY going to an Event
router.delete("/:id/going", authMiddleware, async (req, res) => {
  // console.log("I got a request to DELETE a user is going");

  const userId = req.user.id;
  // console.log("what is userId?", userId);

  //check if event is a number
  if (isNaN(parseInt(req.params.id))) {
    return res.status(400).send({ message: "Event id is not a number" });
  }

  // store eventId
  const eventId = parseInt(req.params.id);
  //console.log("what is eventId?", eventId);

  const checkIfEventExist = await Event.findByPk(eventId);

  //check if event exist
  if (checkIfEventExist === null) {
    return res.status(404).send({ message: "This event does not exist." });
  }

  //find the user x event relation to destroy
  const userEvent = await AttendanceEvent.findAll({
    where: { userId: userId, eventId: eventId },
  });
  // console.log("what is userEvent", userEvent[0]);

  if (userEvent.length === 0) {
    return res
      .status(404)
      .send({ message: "User x Event not found to delete" });
  }

  // await userEvent.attendanceEvent.dataValues.destroy();
  await userEvent[0].destroy();

  return res.status(200).send({ message: "sucessfull deleted" });
});

module.exports = router;
