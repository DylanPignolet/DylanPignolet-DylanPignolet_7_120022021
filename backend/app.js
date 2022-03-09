const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.use(bodyParser.json());

app.use("/api/auth", userRoutes);
app.use("/api/auth", postRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
