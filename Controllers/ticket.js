const {
  getTicket,
  getTickets,
  getTicketUserDetail,
} = require("../Services/ticket");

module.exports = {
  getTicket: async (req, res, next) => {
    try {
      const ticket = await getTicket(req, res, next);
      return res.status(200).json({ data: ticket });
    } catch (error) {
      next(error);
    }
  },

  getTicketUserDetail: async (req, res, next) => {
    try {
      const user = await getTicketUserDetail(req, res, next);
      return res.status(200).json({ data: user });
    } catch (error) {
      next(error);
    }
  },

  getTickets: async (req, res, next) => {
    try {
      const ticket = await getTickets(req, res, next);
      return res.status(200).json({ data: ticket });
    } catch (error) {
      next(error);
    }
  }
};
