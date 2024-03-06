const express = require("express");
const { createNewMessage, getAllMessage } = require("../controller/message");
const authentication = require("../middleware/Authentication");
const messagesRouter = express.Router();

messagesRouter.post("/:id", authentication, createNewMessage);
messagesRouter.get("/:id", authentication, getAllMessage);

module.exports = messagesRouter;
