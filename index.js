const express = require("express");
const cors = require("cors");
const connectMongoDb = require("./Connections/mongodb");
const app = express();

app.use(express.json());
app.use(cors());

app.listen(9000, async () => {
  console.log("server is running");
  connectMongoDb()
    .then(() => {
      console.log("connection to mongodb sucessful");
    })
    .catch((error) => {
      console.log("failed to connect to MongoDb", error);
    });
});
