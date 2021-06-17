const express = require("express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const authRouter = require("./routers/auth");
// add routher to events

/**
 * It is advisable to configure your middleware before configuring the routes
 * If you configure routes before the middleware, these routes will not use them
 */
const authMiddleWare = require("./auth/middleware");

//Import express a JS backend framework
const app = express();

/**
 * morgan: *
 * simple logging middleware so you can see
 * what happened to your request
 * */
app.use(loggerMiddleWare("dev"));

/**
 *
 * express.json():
 * be able to read request bodies of JSON requests
 * */
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

/**
 * cors middleware
 * We are configuring cors to accept all incoming requests
 * If you want to limit this, you can look into "white listing" only certain domains
 * * docs: https://expressjs.com/en/resources/middleware/cors.html
 */
app.use(corsMiddleWare());

app.use("/", authRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
