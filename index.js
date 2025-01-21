require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.send("working on page");
});

const PORT_NO = process.env.PORT_NO || 3000;

app.listen(PORT_NO, () => {
  console.log(`Server is running on port ${PORT_NO}`);
});
