const express = require("express");
const router = express.Router();
const ticketController = require("../Controllers/ticket");
const {
  updateTicketEventEmitter,
  resetTicketEventEmitter,
} = require("../Events/eventEmitter");

router.get("/:id/user", (req, res, next) => {
  return ticketController.getTicketUserDetail(req, res, next);
});

router.get("/:id", (req, res, next) => {
  return ticketController.getTicket(req, res, next);
});

router.get("/", (req, res, next) => {
  return ticketController.getTickets(req, res, next);
});

router.put("/:id", (req, res, next) => {
  return updateTicketEventEmitter(req, res, next);
});

router.post("/reset", (req, res, next) => {
  return resetTicketEventEmitter(req, res, next);
});

module.exports = router;
