const express = require("express");
const compression = require("compression")
const cors = require("cors");
const db = require("./models");

const app = express();

app.use(compression());
app.use(express.static("public"));


app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(cors())

require('dotenv').config()

app.use('/assets', express.static(__dirname + '/assets'));

// seed routes
const seedRoutes = require("./controllers/seedController.js");
app.use(seedRoutes);

// villager routes
const villagerRoutes = require("./controllers/villagerController.js");
app.use(villagerRoutes);

// gift routes
const giftRoutes = require("./controllers/giftController.js");
app.use(giftRoutes);

// item routes
const itemRoutes = require("./controllers/itemController.js");
app.use(itemRoutes);

const PORT = process.env.PORT || 3030;
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log(`App running @ http://localhost:${PORT}`);
  });
});
