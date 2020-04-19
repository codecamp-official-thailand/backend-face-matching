require("dotenv").config();

const express = require("express");
const db = require("./models");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

db.sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
  });
});
