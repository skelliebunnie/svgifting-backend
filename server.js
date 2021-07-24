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

// npc routes
const npcRoutes = require("./controllers/npcController.js");
app.use(npcRoutes);

// gift routes
const giftRoutes = require("./controllers/giftController.js");
app.use(giftRoutes);

// item routes
const itemRoutes = require("./controllers/itemController.js");
app.use(itemRoutes);

// (item) category routes
const categoryRoutes = require("./controllers/categoryController.js");
app.use(categoryRoutes);

// equipment routes
const equipmentRoutes = require("./controllers/equipmentController.js");
app.use(equipmentRoutes);

// animal routes
const animalRoutes = require("./controllers/animalController.js");
app.use(animalRoutes);

// location routes
const locationRoutes = require("./controllers/locationController.js");
app.use(locationRoutes);

// season routes
const seasonRoutes = require("./controllers/seasonController.js");
app.use(seasonRoutes);

// event routes
const eventRoutes = require("./controllers/eventController.js");
app.use(eventRoutes);

// TODO: recipe routes
// const recipeRoutes = require("./controllers/recipeController.js");
// app.use(recipeRoutes);

// TODO: bundle routes
// const bundleRoutes = require("./controllers/bundleController.js");
// app.use(bundleRoutes);

// TODO: quest routes
// const questRoutes = require("./controllers/questController.js");
// app.use(questRoutes);

const PORT = process.env.PORT || 3030;
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log(`App running @ http://localhost:${PORT}`);
  });
});
