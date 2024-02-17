const express = require("express");
const cors = require("cors");
const connectMongoDb = require("./Connections/mongodb");
const app = express();
const tickets = require("./Routes/ticket");

app.use(express.json());
app.use(cors());
app.use("/api/ticket", tickets);

app.use((err, req, res, next) => {
  console.error(err);
  const error = err?.message ?? "Something went wrong";
  const statusCode = err.statusCode || 500;
  res.status(statusCode).send(error);
});

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
