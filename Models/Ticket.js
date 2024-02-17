const mongoose = require("mongoose");
const { Schema } = mongoose;

const ticketSchema = new Schema({
  seatNo: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  userDetails: {
    userName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
});

module.exports = mongoose.model("Ticket", ticketSchema);
