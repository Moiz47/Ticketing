const Ticket = require("../Models/Ticket");

module.exports = {
  getTicket: async (req, res) => {
    const { id } = req.params;
    const ticket = await Ticket.findById(id).exec();
    return ticket;
  },

  getTickets: async (req, res) => {
    const { status } = req.query;
    let filters = {};
    if (status) {
      filters.status = status;
    }
    const tickets = await Ticket.find(filters).exec();
    return tickets;
  },

  getTicketUserDetail: async (req, res) => {
    const { id } = req.params;
    const user = await Ticket.findOne({ _id: id })
      .select({ userDetails: 1 })
      .exec();

    if (!user?.userDetails?.userName) {
      return "Ticket not booked. No user details available";
    }

    return user;
  },
};
