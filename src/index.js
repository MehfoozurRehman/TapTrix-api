const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// api config

const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use(cors());

// routes

app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("*", (req, res) => res.status(404).send("404 not found"));

// db config
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// listner
app.listen(port, () => console.log(`listening on localhost:${port}`));
