require('./eventListener')
const validateInput = require("../Utils/validateInput");
const Emitter = require("./emitter");

module.exports = {
  updateTicketEventEmitter: (req, res, next) => {
    try {
      const { id } = req.params;
      validateInput(req.body);
      Emitter.emit("updateTicket", id, req.body);
      return res.status(200).json({ data: "Ticket updation in progress" });
    } catch (error) {
      next(error);
    }
  },

  resetTicketEventEmitter: (req, res, next) => {
    try {
      Emitter.emit("openTickets");
      return res.status(200).json({ data: "Tickets opened" });
    } catch(error) {
      next(error)
    }
  },
};
