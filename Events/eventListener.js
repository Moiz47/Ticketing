const Ticket = require("../Models/Ticket");
const Emitter = require("./emitter");

Emitter.on("updateTicket", async (id, data) => {
  try {
    await Ticket.updateOne({ _id: id }, data);
    console.log("Ticket updated successfully")
  } catch (err) {
    console.error("error while updating ticket", err);
  }
});

Emitter.on("openTickets", async () => {
  try {
    await Ticket.updateMany({}, { status: "open", userDetails: {} });
    console.log("Tickets opened successfully")
  } catch (err) {
    console.error("error while opening tickets", err);
  }
});
