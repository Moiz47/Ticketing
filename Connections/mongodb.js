require("dotenv").config();
const mongoose = require("mongoose");
const MONGO_USER = process.env.MONGODB_USER;
const MONGO_PASSWORD = process.env.MONGODB_PASSWORD;

const connectMongoDb = async () => {
  const connectionString = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.6fua41d.mongodb.net/?retryWrites=true&w=majority`;
  return mongoose.connect(connectionString);
};

module.exports = connectMongoDb;
