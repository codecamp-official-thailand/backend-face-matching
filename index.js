require("dotenv").config();

const express = require("express");
const db = require("./models");
const app = express();

db.sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
  });
});
