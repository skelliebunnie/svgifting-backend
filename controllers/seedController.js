const express = require("express");
const router = express.Router();
const db = require("../models");

// seed seasons
router.post("/api/seed/seasons", function (req, res) {
  db.Season.bulkCreate([
    {
      name: "Spring"
    },
    {
      name: "Summer"
    },
    {
      name: "Fall"
    },
    {
      name: "Winter"
    }
  ]).then(seeded => {
    res.json(seeded)
  }).catch(function (error) {
    res.status(500).json(error)
  });
});

// seed regions
router.post("/api/seed/regions", function (req, res) {
  db.Region.bulkCreate([
    {
      name: "Stardew Valley"
    },
    {
      name: "Desert"
    },
    {
      name: "Ginger Island"
    }
  ]).then(seeded => {
    res.json(seeded)
  }).catch(function (error) {
    res.status(500).json(error)
  });
});

// seed subregions
router.post("/api/seed/subregions", function (req, res) {
  db.SubRegion.bulkCreate([
    { // 1
      name: "Farm",
      RegionId: 1
    },
    { // 2
      name: "Bus Stop",
      RegionId: 1
    },
    { // 3
      name: "Pelican Town",
      RegionId: 1
    },
    { // 4
      name: "Cindersap Forest",
      RegionId: 1
    },
    { // 5
      name: "The Beach",
      RegionId: 1
    },
    { // 6
      name: "The Mountain",
      RegionId: 1
    },
    { // 7
      name: "Desert North",
      RegionId: 2
    },
    {
      name: "Island South",
      RegionId: 3
    },
    { // 8
      name: "Island Southeast",
      RegionId: 3
    },
    { // 9
      name: "Island East",
      RegionId: 3
    },
    { // 10
      name: "Island North",
      RegionId: 3
    },
    { // 11
      name: "Island West",
      RegionId: 3
    },
    { // 12
      name: "Swamp",
      RegionId: 1
    }
  ]).then(seeded => {
    res.json(seeded)
  }).catch(function (error) {
    res.status(500).json(error)
  });
});

// seed locations
router.post("/api/seed/locations", function (req, res) {
  db.Location.bulkCreate([
    { // 1
      name: "1 Willow Lane",
      SubRegionId: 3
    },
    { // 2
      name: "1 River Road",
      SubRegionId: 3
    },
    { // 3
      name: "2 River Road",
      SubRegionId: 3
    },
    { // 4
      name: "2 Willow Lane",
      SubRegionId: 3
    },
    { // 5
      name: "24 Mountain Road",
      SubRegionId: 3
    },
    { // 6
      name: "Mayor's Manor",
      SubRegionId: 3
    },
    { // 7
      name: "Trailer",
      SubRegionId: 3
    },
    { // 8
      name: "Tent",
      SubRegionId: 6
    },
    { // 9
      name: "Adventurer's Guild",
      SubRegionId: 6
    },
    { // 10
      name: "Blacksmith",
      SubRegionId: 3
    },
    { // 11
      name: "Museum",
      SubRegionId: 3
    },
    { // 12
      name: "Carpenter's Shop",
      SubRegionId: 6
    },
    { // 13
      name: "Casino",
      SubRegionId: 7
    },
    { // 14
      name: "Desert Trader",
      SubRegionId: 7
    },
    { // 15
      name: "Harvey's Clinic",
      SubRegionId: 3
    },
    { // 16
      name: "Island Trader",
      SubRegionId: 10
    },
    { // 17
      name: "JojaMart",
      SubRegionId: 3
    },
    { // 18
      name: "Oasis",
      SubRegionId: 7
    },
    { // 19
      name: "Pierre's General Store",
      SubRegionId: 3
    },
    { // 20
      name: "Qi's Walnut Room",
      SubRegionId: 11
    },
    { // 21
      name: "The Stardrop Saloon",
      SubRegionId: 3
    },
    { // 22
      name: "Traveling Cart",
      SubRegionId: 4
    },
    { // 23
      name: "Volcano",
      SubRegionId: 10
    },
    { // 24
      name: "Elliott's Cabin",
      SubRegionId: 5
    },
    { // 25
      name: "Farmhouse",
      SubRegionId: 1
    },
    { // 26
      name: "Island Farmhouse",
      SubRegionId: 11
    },
    { // 27
      name: "Leah's Cottage",
      SubRegionId: 4
    },
    { // 28
      name: "Marnie's Ranch",
      SubRegionId: 4
    },
    { // 29
      name: "Wizard's Tower",
      SubRegionId: 4
    },
    { // 30
      name: "Community Center",
      SubRegionId: 3
    },
    { // 31
      name: "Island Field Office",
      SubRegionId: 10
    },
    { // 32
      name: "Movie Theater",
      SubRegionId: 3
    },
    { // 33
      name: "Spa",
      SubRegionId: 3
    },
    { // 34
      name: "Witch's Hut",
      SubRegionId: 12
    },
    { // 35
      name: "Fish Shop",
      SubRegionId: 5
    },
    { // 36
      name: "Sewers",
      SubRegionId: 3
    },
    { // 37
      name: "Mines",
      SubRegionId: 6
    },
    { // 38
      name: "Skull Caverns",
      SubRegionId: 7
    },
    { // 39
      name: "Quarry Mine",
      SubRegionId: 6
    },
    { // 40
      name: "Mutant Bug Lair",
      SubRegionId: 3
    },
    { // 41
      name: "Treehouse",
      SubRegionId: 9
    }
  ]).then(seeded => {
    res.json(seeded)
  }).catch(function (error) {
    res.status(500).json(error)
  });
});

// seed villagers
router.post("/api/seed/villagers", function (req, res) {
  db.Villager.bulkCreate([
    { // 1
      name: "Alex",
      birthdaySeasonId: 2,
      birthdayDate: 13,
      checkupSeasonId: 2,
      checkupDate: 16,
      available: true,
      LocationId: 2
    },
    { // 2
      name: "Evelyn",
      birthdaySeasonId: 4,
      birthdayDate: 20,
      checkupSeasonId: 1,
      checkupDate: 2,
      available: false,
      LocationId: 2
    },
    { // 3
      name: "George",
      birthdaySeasonId: 3,
      birthdayDate: 24,
      checkupSeasonId: 1,
      checkupDate: 23,
      available: false,
      LocationId: 2
    },
    { // 4
      name: "Elliott",
      birthdaySeasonId: 3,
      birthdayDate: 5,
      LocationId: 24,
      available: true,
      checkupSeasonId: 2,
      checkupDate: 9
    },
    { // 5
      name: "Harvey",
      available: true,
      birthdaySeasonId: 4,
      birthdayDate: 14,
      LocationId: 15,
      checkupSeasonId: 1,
      checkupDate: 0
    },
    { // 6
      name: "Sam",
      available: true,
      birthdaySeasonId: 2,
      birthdayDate: 17,
      LocationId: 1,
      checkupSeasonId: 3,
      checkupDate: 11
    },
    { // 7
      name: "Sebastian",
      available: true,
      birthdaySeasonId: 4,
      birthdayDate: 10,
      LocationId: 5,
      checkupSeasonId: 1,
      checkupDate: 4
    },
    { // 8
      name: "Shane",
      available: true,
      birthdaySeasonId: 1,
      birthdayDate: 20,
      LocationId: 28,
      checkupSeasonId: 1,
      checkupDate: 0
    },
    { // 9
      name: "Abigail",
      available: true,
      birthdaySeasonId: 3,
      birthdayDate: 13,
      LocationId: 19,
      checkupSeasonId: 1,
      checkupDate: 4
    },
    { // 10
      name: "Emily",
      available: true,
      birthdaySeasonId: 1,
      birthdayDate: 27,
      LocationId: 4,
      checkupSeasonId: 4,
      checkupDate: 11
    },
    { // 11
      name: "Haley",
      available: true,
      birthdaySeasonId: 1,
      birthdayDate: 14,
      LocationId: 27,
      checkupSeasonId: 4,
      checkupDate: 9
    },
    { // 12
      name: "Leah",
      available: true,
      birthdaySeasonId: 4,
      birthdayDate: 23,
      LocationId: 27,
      checkupSeasonId: 1,
      checkupDate: 16
    },
    { // 13
      name: "Maru",
      available: true,
      birthdaySeasonId: 2,
      birthdayDate: 10,
      LocationId: 5,
      checkupSeasonId: 1,
      checkupDate: 0
    },
    { // 14
      name: "Penny",
      available: true,
      birthdaySeasonId: 3,
      birthdayDate: 2,
      LocationId: 7,
      checkupSeasonId: 4,
      checkupDate: 4
    },
    { // 15
      name: "Pam",
      available: true,
      birthdaySeasonId: 1,
      birthdayDate: 18,
      LocationId: 7,
      checkupSeasonId: 1,
      checkupDate: 25
    },
    { // 16
      name: "Gus",
      available: false,
      birthdaySeasonId: 2,
      birthdayDate: 8,
      LocationId: 21,
      checkupSeasonId: 3,
      checkupDate: 4
    },
    { // 17
      name: "Caroline",
      available: false,
      birthdaySeasonId: 4,
      birthdayDate: 7,
      LocationId: 19,
      checkupSeasonId: 3,
      checkupDate: 25
    },
    { // 18
      name: "Pierre",
      available: false,
      birthdaySeasonId: 1,
      birthdayDate: 26,
      LocationId: 19,
      checkupSeasonId: 1,
      checkupDate: 0
    },
    { // 19
      name: "Jodi",
      available: false,
      birthdaySeasonId: 3,
      birthdayDate: 11,
      LocationId: 1,
      checkupSeasonId: 1,
      checkupDate: 18
    },
    { // 20
      name: "Kent",
      available: false,
      birthdaySeasonId: 1,
      birthdayDate: 4,
      LocationId: 1,
      checkupSeasonId: 1,
      checkupDate: 0
    },
    { // 21
      name: "Jas",
      available: false,
      birthdaySeasonId: 1,
      birthdayDate: 4,
      LocationId: 28,
      checkupSeasonId: 4,
      checkupDate: 18
    },
    { // 22
      name: "Vincent",
      available: false,
      birthdaySeasonId: 1,
      birthdayDate: 10,
      LocationId: 1,
      checkupSeasonId: 1,
      checkupDate: 11
    },
    { // 23
      name: "Lewis",
      available: false,
      birthdaySeasonId: 1,
      birthdayDate: 7,
      LocationId: 6,
      checkupSeasonId: 4,
      checkupDate: 16
    },
    { // 24
      name: "Linus",
      available: false,
      birthdaySeasonId: 4,
      birthdayDate: 3,
      LocationId: 8,
      checkupSeasonId: 1,
      checkupDate: 0
    },
    { // 25
      name: "Marnie",
      available: false,
      birthdaySeasonId: 3,
      birthdayDate: 18,
      LocationId: 28,
      checkupSeasonId: 3,
      checkupDate: 18
    },
    { // 26
      name: "Robin",
      available: false,
      birthdaySeasonId: 3,
      birthdayDate: 21,
      LocationId: 5,
      checkupSeasonId: 2,
      checkupDate: 18
    },
    { // 27
      name: "Demetrius",
      available: false,
      birthdaySeasonId: 2,
      birthdayDate: 19,
      LocationId: 5,
      checkupSeasonId: 2,
      checkupDate: 25
    },
    { // 28
      name: "Willy",
      available: false,
      birthdaySeasonId: 2,
      birthdayDate: 24,
      LocationId: 35,
      checkupSeasonId: 1,
      checkupDate: 9
    },
    { // 29
      name: "Krobus",
      available: true,
      birthdaySeasonId: 4,
      birthdayDate: 1,
      LocationId: 36,
      checkupSeasonId: 1,
      checkupDate: 0
    },
    { // 30
      name: "Dwarf",
      available: false,
      birthdaySeasonId: 2,
      birthdayDate: 22,
      LocationId: 37,
      checkupSeasonId: 1,
      checkupDate: 0
    },
    { // 31
      name: "Wizard",
      available: false,
      birthdaySeasonId: 4,
      birthdayDate: 17,
      LocationId: 29,
      checkupSeasonId: 1,
      checkupDate: 0
    },
    { // 32
      name: "Sandy",
      available: false,
      birthdaySeasonId: 3,
      birthdayDate: 15,
      LocationId: 18,
      checkupSeasonId: 1,
      checkupDate: 0
    },
    { // 33
      name: "Clint",
      available: false,
      birthdaySeasonId: 4,
      birthdayDate: 26,
      LocationId: 10,
      checkupSeasonId: 1,
      checkupDate: 0
    },
    { // 34
      name: "Leo",
      available: false,
      birthdaySeasonId: 2,
      birthdayDate: 26,
      LocationId: 41,
      checkupSeasonId: 1,
      checkupDate: 0
    }
  ]).then(seeded => {
    res.json(seeded)
  }).catch(function (error) {
    res.status(500).json(error)
  });
});

// seed types (of items)
router.post("/api/seed/itemtypes", function (req, res) {
  db.Type.bulkCreate([
    { name: "Cooked Dish" }, // 1
    { name: "Forage" }, // 2
    { name: "Artisan Goods" }, // 3
    { name: "Animal Product" }, // 4
    { name: "Crop, Vegetable" }, // 5
    { name: "Crop, Fruit" }, // 6
    { name: "Crop, Flower" }, // 7
    { name: "Monster Loot" }, // 8
    { name: "Mineral" }, // 9
    { name: "Gem" }, // 10
    { name: "Geode" }, // 11
    { name: "Trash" }, // 12
    { name: "Artifact" }, // 13
    { name: "Fish" }, // 14
    { name: "Fruit Tree Fruit" }, // 15
    { name: "Building Materials" }, // 16
  ]).then(seeded => {
    res.json(seeded)
  }).catch(function (error) {
    res.status(500).json(error)
  });
});

// seed equipment
router.post("/api/seed/equipment", function(req, res) {
  db.Equipment.bulkCreate([
    { // 1
      name: "Cheese Press",
      source: "Farming (6)"
    },
    { // 2
      name: "Mayonnaise Machine",
      source: "Farming (2)"
    },
    { // 3
      name: "Bee House",
      source: "Farming (3)"
    },
    { // 4
      name: "Preserves Jar",
      source: "Farming (4)"
    },
    { // 5
      name: "Loom",
      source: "Farming (7)"
    },
    { // 6
      name: "Keg",
      source: "Farming (8)"
    },
    { // 7
      name: "Oil Maker",
      source: "Farming (8)"
    },
    { // 8
      name: "Cask",
      source: "Farmhouse cellar upgrade"
    },
    {
      name: "Furnace",
      source: "Clint (cutscene)"
    }
  ]).then(seeded => {
    res.json(seeded);
  }).catch(err => res.status(500).json(err));
})

// seed buildings
router.post("/api/seed/buildings", function(req, res) {
  db.Building.bulkCreate([
    { // 1
      name: "Coop",
      cost: 4000,
      materials: "wood, stone",
      materialQuantities: "300, 100",
      capacity: 4
    },
    { // 2
      name: "Big Coop",
      cost: 10000,
      materials: "wood, stone",
      materialQuantities: "400, 150",
      capacity: 8
    },
    { // 3
      name: "Deluxe Coop",
      cost: 20000,
      materials: "wood, stone",
      materialQuantities: "500, 200",
      capacity: 12
    },
    { // 4
      name: "Barn",
      cost: 6000,
      materials: "wood, stone",
      materialQuantities: "350, 150",
      capacity: 4
    },
    { // 5
      name: "Big Barn",
      cost: 12000,
      materials: "wood, stone",
      materialQuantities: "450, 200",
      capacity: 8
    },
    { // 6
      name: "Deluxe Barn",
      cost: 25000,
      materials: "wood, stone",
      materialQuantities: "550, 300",
      capacity: 12
    },
    { // 7
      name: "Fish Pond",
      cost: 5000,
      materials: "stone, green algae, seaweed",
      materialQuantities: "200, 5, 5",
      capacity: 10
    },
    { // 8
      name: "Slime Hutch",
      cost: 10000,
      materials: "stone, refined quartz, iridium bar",
      materialQuantities: "500, 10, 1",
      capacity: 20
    }
  ]).then(seeded => {
    res.json(seeded);
  }).catch(err => res.status(500).json(err));
})

// seed animals
router.post("/api/seed/animals", function(req, res) {
  db.Animal.bulkCreate([
    { // 1
      name: "Chicken, White",
      source: "Marnie's Ranch",
      purchasePrice: 800
    },
    { // 2
      name: "Chicken, Brown",
      source: "Marnie's Ranch",
      purchasePrice: 800
    },
    { // 3
      name: "Chicken, Blue",
      source: "Marnie's Ranch",
      purchasePrice: 800
    },
    { // 4
      name: "Chicken, Void",
      source: "Void Egg",
      purchasePrice: null
    },
    { // 5
      name: "Chicken, Golden",
      source: "Golden Egg",
      purchasePrice: null
    },
    { // 6
      name: "Rabbit",
      source: "Marnie's Ranch",
      purchasePrice: 8000
    },
    { // 7
      name: "Duck",
      source: "Marnie's Ranch",
      purchasePrice: 1200
    },
    { // 8
      name: "Dinosaur",
      source: "Dinosaur Egg",
      purchasePrice: null
    },
    { // 9
      name: "Cow",
      source: "Marnie's Ranch",
      purchasePrice: 1500
    },
    { // 10
      name: "Goat",
      source: "Marnie's Ranch",
      purchasePrice: 4000
    },
    { // 11
      name: "Sheep",
      source: "Marnie's Ranch",
      purchasePrice: 8000
    },
    { // 12
      name: "Pig",
      source: "Marnie's Ranch",
      purchasePrice: 16000
    },
    { // 13
      name: "Ostrich",
      source: "Ostrich Egg",
      purchasePrice: null
    }
  ]).then(seeded => {
    res.json(seeded);
  }).catch(err => res.status(500).json(err));
})

// seed items
router.post("/api/seed/items", function (req, res) {
  db.Item.bulkCreate([
    {
      name: "Complete Breakfast",
      source: "Queen of Sauce (21 Spring, Year 2)",
      sellPrice: 250,
      TypeId: 1,
      edible: true
    },
    {
      name: "Salmon Dinner",
      source: "Gus (mail, 3+ :heart:)",
      sellPrice: 300,
      TypeId: 1,
      edible: true
    },
    {
      name: "Fried Mushroom",
      source: "Demetrius (mail, 3+ :heart:)",
      sellPrice: 200,
      TypeId: 1,
      edible: true
    },
    {
      name: "Leek",
      source: "Forage, Spring Seeds",
      sellPrice: 60,
      TypeId: 2,
      edible: true
    },
    {
      name: "Beet",
      source: "Beet Seeds",
      sellPrice: 100,
      TypeId: 5,
      edible: true,
      initialGrowthTime: 6,
      processingTime: 6000
    },
    {
      name: "Chocolate Cake",
      source: "Queen of Sauce (14 Winter, Year 1)",
      sellPrice: 200,
      TypeId: 1,
      edible: true
    },
    {
      name: "Diamond",
      source: "Diamond Node, Gem Node, Monster drop, Fishing (Treasure Chest), Panning",
      sellPrice: 750,
      TypeId: 10,
      edible: false
    },
    {
      name: "Fairy  Rose",
      source: "Fairy Seeds",
      sellPrice: 290,
      TypeId: 7,
      edible: false,
      initialGrowthTime: 12
    },
    {
      name: "Stuffing",
      source: "Pam (Mail, 7+ :heart:)",
      sellPrice: 165,
      TypeId: 1,
      edible: true
    },
    {
      name: "Tulip",
      source: "Tulip Bulb",
      sellPrice: 30,
      TypeId: 7,
      edible: false,
      initialGrowthTime: 6
    },
    {
      name: "Crab Cakes",
      source: "Queen of Sauce (21 Fall, Year 2), Iridium Crab",
      sellPrice: 275,
      TypeId: 1,
      edible: true
    },
    {
      name: "Tom Kha Soup",
      source: "Sandy (Mail, 7+ :heart:)",
      sellPrice: 250,
      TypeId: 1,
      edible: true
    },
    {
      name: "Duck Feather",
      source: "Traveling Cart",
      animalId: null,
      sellPrice: 30,
      TypeId: 4,
      edible: false
    },
    {
      name: "Lobster",
      source: "Crab Pot (ocean)",
      sellPrice: 120,
      TypeId: 14,
      edible: false
    },
    {
      name: "Pomegranate",
      source: "Pomegranate Tree, Traveling Cart, Farm Cave (Fruit Bats)",
      sellPrice: 140,
      TypeId: 15,
      edible: true
    },
    {
      name: "Squid Ink",
      source: "Squid Kid (Monster), Squid (Fish Pond), Midnight Squid (Fish Pond)",
      sellPrice: 110,
      TypeId: null,
      edible: false
    },
    {
      name: "Coffee",
      source: "The Saloon",
      equipmentId: 6,
      sellPrice: 150,
      TypeId: 3,
      edible: true
    },
    {
      name: "Pickles",
      source: "Any Vegetable",
      equipmentId: 4,
      sellPrice: 222,
      TypeId: 3,
      edible: true
    },
    {
      name: "Super Meal",
      source: "Kent (Mail, 7+ :heart:)",
      sellPrice: 330,
      TypeId: 1,
      edible: true
    },
    {
      name: "Truffle Oil",
      source: "Truffle",
      equipmentId: 7,
      sellPrice: 1065,
      TypeId: 3,
      edible: false
    },
    {
      name: "Wine",
      source: "Any Fruit",
      equipmentId: 6,
      sellPrice: 333,
      TypeId: 3,
      edible: true,
      processingTime: 10000
    },
    {
      name: "Cactus Fruit",
      source: "Forage (Desert), Oasis, Cactus Seeds",
      sellPrice: 75,
      TypeId: 2,
      edible: true
    },
    {
      name: "Maple Bar",
      source: "Queen of Sauce (14 Summer, Year 2)",
      sellPrice: 300,
      TypeId: 1,
      edible: true
    },
    {
      name: "Pizza",
      source: "Queen of Sauce (7 Spring, Year 2)",
      sellPrice: 450,
      TypeId: 1,
      edible: true
    },
    {
      name: "Tigerseye",
      source: "Geode (Magma, Omni)",
      sellPrice: 275,
      TypeId: 9,
      edible: false
    },
    {
      name: "Frozen Tear",
      source: "Mines (40-79), Geode (Frozen, Omni), Dust Sprite, Panning, Fishing (Treasure Chest)",
      sellPrice: 75,
      TypeId: 9,
      edible: false
    },
    {
      name: "Obsidian",
      source: "Geode (Magma, Omni)",
      sellPrice: 200,
      TypeId: 9,
      edible: false
    },
    {
      name: "Pumpkin Soup",
      source: "Robin (Mail, 7+ :heart:)",
      sellPrice: 300,
      TypeId: 1,
      edible: true
    },
    {
      name: "Sashimi",
      source: "Linus (Mail, 3+ :heart:)",
      sellPrice: 75,
      TypeId: 1,
      edible: true
    },
    {
      name: "Void Egg",
      source: "Void Chicken, Witch, Krobus",
      sellPrice: 65,
      TypeId: 4,
      edible: true
    },
    {
      name: "Beer",
      source: "The Saloon, Ginger Island Resort",
      equipmentId: 6,
      sellPrice: 50,
      TypeId: 1,
      edible: true,
      processingTime: 1750
    },
    {
      name: "Hot Pepper",
      source: "Pepper Seeds",
      sellPrice: 40,
      TypeId: 6,
      edible: true,
      initialGrowthTime: 5,
      reproductionTime: 3
    },
    {
      name: "Pepper Poppers",
      source: "Shane (Mail, 3+ :heart:)",
      sellPrice: 200,
      TypeId: 1,
      edible: true
    },
    {
      name: "Amethyst",
      source: "Amethyst Node, Gem Node, Green Slime, Fishing (Treasure Chest), Panning",
      sellPrice: 100,
      TypeId: 10,
      edible: false
    },
    {
      name: "Banana Pudding",
      source: "Island Trader",
      sellPrice: 260,
      TypeId: 1,
      edible: true
    },
    {
      name: "Blackberry Cobbler",
      source: "Queen of Sauce (14 Fall, Year 2)",
      sellPrice: 260,
      TypeId: 1,
      edible: true
    },
    {
      name: "Pufferfish",
      source: "Ocean, Ginger Island",
      sellPrice: 200,
      TypeId: 14,
      edible: true
    },
    {
      name: "Pumpkin",
      source: "Pumpkin Seeds",
      sellPrice: 320,
      TypeId: null,
      edible: false,
      initialGrowthTime: 13
    },
    {
      name: "Spicy Eel",
      source: "George (Mail, 7+ :heart:), Desert Trader, Serpent, Lava Eel (Fish Pond)",
      sellPrice: 175,
      TypeId: 1,
      edible: true
    },
    {
      name: "Aquamarine",
      source: "Aquamarine Node, Gem Node, Fishing (Treasure Chest), Panning",
      sellPrice: 180,
      TypeId: 10,
      edible: false
    },
    {
      name: "Cloth",
      source: "Recycling (Soggy Newspaper), Mummy, Desert Trader",
      equipmentId: 5,
      sellPrice: 470,
      TypeId: 3,
      edible: false
    },
    {
      name: "Emerald",
      source: "Emerald Node, Gem Node, Fishing (Treasure Chest), Panning",
      sellPrice: 250,
      TypeId: 10,
      edible: false
    },
    {
      name: "Jade",
      source: "Jade Node, Gem Node, Blue Slime, Dwarvish Sentry, Fishing (Treasure Chest)",
      sellPrice: 200,
      TypeId: 10
    },
    {
      name: "Ruby",
      source: "Ruby Node, Gem Node, Fishing (Treasure Chest), Panning",
      sellPrice: 250,
      TypeId: 10,
      edible: false
    },
    {
      name: "Survival Burger",
      source: "Foraging (2)",
      sellPrice: 180,
      TypeId: 1,
      edible: true
    },
    {
      name: "Topaz",
      source: "Topaz Node, Gem Node, Fishing (Treasure Chest), Panning",
      sellPrice: 80,
      TypeId: 10,
      edible: false
    },
    {
      name: "Wool",
      source: "Rabbit, Sheep",
      sellPrice: 340,
      TypeId: 4,
      edible: false
    },
    {
      name: "Coconut",
      source: "Foraging (Desert, Ginger Island), Oasis",
      sellPrice: 100,
      TypeId: null,
      edible: false
    },
    {
      name: "Fruit Salad",
      source: "Queen of Sauce (7 Fall, Year 2)",
      sellPrice: 450,
      TypeId: 1,
      edible: true
    },
    {
      name: "Pink Cake",
      source: "Queen of Sauce (21 Summer, Year 2)",
      sellPrice: 480,
      TypeId: 1,
      edible: true
    },
    {
      name: "Sunflower",
      source: "Sunflower Seeds",
      sellPrice: 80,
      TypeId: 7,
      edible: true,
      initialGrowthTime: 8
    },
    {
      name: "Goat Cheese",
      source: "Cheese Press",
      sellPrice: 400,
      TypeId: 3,
      edible: true
    },
    {
      name: "Poppyseed Muffin",
      source: "Queen of Sauce (7 Winter, Year 2)",
      sellPrice: 0,
      TypeId: 1,
      edible: false
    },
    {
      name: "Salad",
      source: "Emily (mail, 3+ :heart:)",
      sellPrice: 0,
      TypeId: 1,
      edible: false
    },
    {
      name: "Stir Fry",
      source: "Queen of Sauce (7 Spring, Year 1)",
      sellPrice: 0,
      TypeId: 1,
      edible: false
    },
    {
      name: "Truffle",
      source: "Pigs",
      sellPrice: 625,
      TypeId: null,
      edible: true
    },
    {
      name: "Vegetable Medley",
      source: "",
      sellPrice: 0,
      TypeId: 1,
      edible: false
    },
    {
      name: "Battery Pack",
      source: "Lightning Rod, Solar Panel, Iridium Bat",
      sellPrice: 500,
      TypeId: 16,
      edible: false
    },
    {
      name: "Cauliflower",
      source: "Cauliflower Seeds",
      sellPrice: 175,
      TypeId: 5,
      edible: true,
      initialGrowthTime: 12
    },
    {
      name: "Cheese Cauliflower",
      source: "Pam (Mail, 3+ :heart:)",
      sellPrice: 300,
      TypeId: 1,
      edible: true
    },
    {
      name: "Gold Bar",
      source: "Crafting, Furnace, Mines (tilling), Monster Drop",
      sellPrice: 250,
      TypeId: null,
      edible: false
    },
    {
      name: "Iridium Bar",
      source: "Furnace, Shadow Brute, Iridium Bat, Purple Slime",
      sellPrice: 1000,
      TypeId: null,
      edible: false
    },
    {
      name: "Miner's Treat",
      source: "Mining (3), Dwarf, Mummy",
      sellPrice: 200,
      TypeId: 1,
      edible: true
    },
    {
      name: "Radioactive Bar",
      source: "Furnace",
      sellPrice: 3000,
      TypeId: null,
      edible: false
    },
    {
      name: "Rhubarb Pie",
      source: "Marnie (Mail, 7+ :heart:)",
      sellPrice: 400,
      TypeId: 1,
      edible: true
    },
    {
      name: "Strawberry",
      source: "Strawberry Seeds",
      sellPrice: 120,
      TypeId: 6,
      edible: true,
      initialGrowthTime: 8,
      reproductionTime: 4
    },
    {
      name: "Melon",
      source: "Melon Seeds",
      sellPrice: 250,
      TypeId: 6,
      edible: true,
      initialGrowthTime: 12
    },
    {
      name: "Poppy",
      source: "Poppy Seeds",
      sellPrice: 140,
      TypeId: 7,
      edible: true,
      initialGrowthTime: 7
    },
    {
      name: "Red Plate",
      source: "Emily (Mail, 7+ :heart:)",
      sellPrice: 400,
      TypeId: 1,
      edible: true
    },
    {
      name: "Roots Platter",
      source: "Combat (3)",
      sellPrice: 100,
      TypeId: 1,
      edible: true
    },
    {
      name: "Sandfish",
      source: "Desert",
      sellPrice: 75,
      TypeId: 14,
      edible: true
    },
    {
      name: "Fish Taco",
      source: "Linus (mail, 7+ :heart:)",
      sellPrice: 500,
      TypeId: 1,
      edible: true
    },
    {
      name: "Green Tea",
      source: "Artisan Goods",
      sellPrice: 100,
      TypeId: 3,
      edible: true,
      equipment: 6
    },
    {
      name: "Tropical Curry",
      source: "Ginger Island Resort (Gus)",
      sellPrice: 500,
      TypeId: 1,
      edible: true
    },
    {
      name: "Summer Spangle",
      source: "Spangle Seeds",
      sellPrice: 90,
      TypeId: 7,
      edible: true,
      initialGrowthTime: 8
    },
    {
      name: "Artichoke Dip",
      source: "Queen of Sauce (28 Fall, Year 1)",
      sellPrice: 210,
      TypeId: 1,
      edible: true
    },
    {
      name: "Fiddlehead Risotto",
      source: "Queen of Sauce (28 Fall, Year 2)",
      sellPrice: 350,
      TypeId: 1,
      edible: true
    },
    {
      name: "Omni Geode",
      source: "Mining, Carbon Ghost, Panning, Krobus, Oasis, Crane Game (Movie Theater), Omni Geode Node",
      sellPrice: 0,
      TypeId: 11,
      edible: false
    },
    {
      name: "Bean Hotpot",
      source: "Clint (Mail, 7+ :heart:)",
      sellPrice: 100,
      TypeId: 1,
      edible: true
    },
    {
      name: "Ice Cream",
      source: "Jodi (Mail, 7+ :heart:), Ice Cream Stand, Oasis",
      sellPrice: 120,
      TypeId: 1,
      edible: true
    },
    {
      name: "Rice Pudding",
      source: "Evelyn (mail, 7+ :heart:)",
      sellPrice: 260,
      TypeId: 1,
      edible: true
    }
  ]).then(seeded => {
    res.json(seeded)
  }).catch(function (error) {
    res.status(500).json(error)
  });
});

router.post("/api/seed/gifts", function(req, res) {
  db.Gift.bulkCreate([
    {
      VillagerId: 1,
      ItemId: 1,
      preference: 'love'
    },
    {
      VillagerId: 1,
      ItemId: 2,
      preference: 'love'
    },
    {
      VillagerId: 4,
      ItemId: 11,
      preference: 'love'
    },
    {
      VillagerId: 4,
      ItemId: 12,
      preference: 'love'
    },
    {
      VillagerId: 4,
      ItemId: 13,
      preference: 'love'
    },
    {
      VillagerId: 4,
      ItemId: 14,
      preference: 'love'
    },
    {
      VillagerId: 4,
      ItemId: 15,
      preference: 'love'
    },
    {
      VillagerId: 4,
      ItemId: 16,
      preference: 'love'
    },
    {
      VillagerId: 5,
      ItemId: 17,
      preference: 'love'
    },
    {
      VillagerId: 5,
      ItemId: 18,
      preference: 'love'
    },
    {
      VillagerId: 5,
      ItemId: 19,
      preference: 'love'
    },
    {
      VillagerId: 5,
      ItemId: 20,
      preference: 'love'
    },
    {
      VillagerId: 5,
      ItemId: 21,
      preference: 'love'
    },
    {
      VillagerId: 6,
      ItemId: 22,
      preference: 'love'
    },
    {
      VillagerId: 6,
      ItemId: 23,
      preference: 'love'
    },
    {
      VillagerId: 6,
      ItemId: 24,
      preference: 'love'
    },
    {
      VillagerId: 6,
      ItemId: 25,
      preference: 'love'
    },
    {
      VillagerId: 7,
      ItemId: 26,
      preference: 'love'
    },
    {
      VillagerId: 7,
      ItemId: 27,
      preference: 'love'
    },
    {
      VillagerId: 7,
      ItemId: 28,
      preference: 'love'
    },
    {
      VillagerId: 7,
      ItemId: 29,
      preference: 'love'
    },
    {
      VillagerId: 7,
      ItemId: 30,
      preference: 'love'
    },
    {
      VillagerId: 8,
      ItemId: 31,
      preference: 'love'
    },
    {
      VillagerId: 8,
      ItemId: 32,
      preference: 'love'
    },
    {
      VillagerId: 8,
      ItemId: 33,
      preference: 'love'
    },
    {
      VillagerId: 9,
      ItemId: 34,
      preference: 'love'
    },
    {
      VillagerId: 9,
      ItemId: 35,
      preference: 'love'
    },
    {
      VillagerId: 9,
      ItemId: 36,
      preference: 'love'
    },
    {
      VillagerId: 9,
      ItemId: 37,
      preference: 'love'
    },
    {
      VillagerId: 9,
      ItemId: 38,
      preference: 'love'
    },
    {
      VillagerId: 9,
      ItemId: 39,
      preference: 'love'
    },
    {
      VillagerId: 9,
      ItemId: 40,
      preference: 'love'
    },
    {
      VillagerId: 10,
      ItemId: 34,
      preference: 'love'
    },
    {
      VillagerId: 10,
      ItemId: 41,
      preference: 'love'
    },
    {
      VillagerId: 10,
      ItemId: 42,
      preference: 'love'
    },
    {
      VillagerId: 10,
      ItemId: 43,
      preference: 'love'
    },
    {
      VillagerId: 10,
      ItemId: 44,
      preference: 'love'
    },
    {
      VillagerId: 10,
      ItemId: 45,
      preference: 'love'
    },
    {
      VillagerId: 10,
      ItemId: 46,
      preference: 'love'
    },
    {
      VillagerId: 10,
      ItemId: 47,
      preference: 'love'
    },
    {
      VillagerId: 10,
      ItemId: 48,
      preference: 'love'
    },
    {
      VillagerId: 11,
      ItemId: 49,
      preference: 'love'
    },
    {
      VillagerId: 11,
      ItemId: 50,
      preference: 'love'
    },
    {
      VillagerId: 11,
      ItemId: 51,
      preference: 'love'
    },
    {
      VillagerId: 11,
      ItemId: 52,
      preference: 'love'
    },
    {
      VillagerId: 12,
      ItemId: 53,
      preference: 'love'
    },
    {
      VillagerId: 12,
      ItemId: 54,
      preference: 'love'
    },
    {
      VillagerId: 12,
      ItemId: 55,
      preference: 'love'
    },
    {
      VillagerId: 12,
      ItemId: 56,
      preference: 'love'
    },
    {
      VillagerId: 12,
      ItemId: 57,
      preference: 'love'
    },
    {
      VillagerId: 12,
      ItemId: 58,
      preference: 'love'
    },
    {
      VillagerId: 12,
      ItemId: 21,
      preference: 'love'
    },
    {
      VillagerId: 13,
      ItemId: 7,
      preference: 'love'
    },
    {
      VillagerId: 13,
      ItemId: 59,
      preference: 'love'
    },
    {
      VillagerId: 13,
      ItemId: 60,
      preference: 'love'
    },
    {
      VillagerId: 13,
      ItemId: 61,
      preference: 'love'
    },
    {
      VillagerId: 13,
      ItemId: 62,
      preference: 'love'
    },
    {
      VillagerId: 13,
      ItemId: 63,
      preference: 'love'
    },
    {
      VillagerId: 13,
      ItemId: 65,
      preference: 'love'
    },
    {
      VillagerId: 13,
      ItemId: 66,
      preference: 'love'
    },
    {
      VillagerId: 13,
      ItemId: 67,
      preference: 'love'
    },
    {
      VillagerId: 13,
      ItemId: 33,
      preference: 'love'
    },
    {
      VillagerId: 14,
      ItemId: 7,
      preference: 'love'
    },
    {
      VillagerId: 14,
      ItemId: 43,
      preference: 'love'
    },
    {
      VillagerId: 14,
      ItemId: 68,
      preference: 'love'
    },
    {
      VillagerId: 14,
      ItemId: 69,
      preference: 'love'
    },
    {
      VillagerId: 14,
      ItemId: 54,
      preference: 'love'
    },
    {
      VillagerId: 14,
      ItemId: 70,
      preference: 'love'
    },
    {
      VillagerId: 14,
      ItemId: 71,
      preference: 'love'
    },
    {
      VillagerId: 14,
      ItemId: 72,
      preference: 'love'
    },
    {
      VillagerId: 14,
      ItemId: 12,
      preference: 'love'
    }
  ]).then(seeded => {
    res.json(seeded);
  }).catch(function (error) {
    res.status(500).json(error)
  });
});

module.exports = router;