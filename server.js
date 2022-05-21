const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const msg = require("./consumer.js");
const port = process.env.PORT || 3000;
const producer = require("./producer.js");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).json({ msg });
});

app.post("/", async (req, res) => {
  var payload = [];
  payload.push({
    topic: "quickstart-events",
    messages: req.body.message,
    partition: 0,
  });
  await producer.send(payload, (err, data) => {
    if (err) res.status(500).json({ err });
    res.json({ data });
  });
});

app.listen(port, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("http://localhost:" + port);
  }
});

module.exports = app;
