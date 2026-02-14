const mongoose = require("mongoose");
const Fertilizer = require("./models/Fertilizer");
const Rental = require("./models/Rental");

mongoose.connect("mongodb://127.0.0.1:27017/agrosmart");

const seedData = async () => {
  await Fertilizer.deleteMany();
  await Rental.deleteMany();

  await Fertilizer.insertMany([
    { name: "Urea (46-0-0)", description: "High nitrogen", recommended: true },
    { name: "DAP (18-46-0)", description: "Root growth", recommended: true },
    { name: "Potash (0-0-60)", description: "Flowering" }
  ]);

  await Rental.insertMany([
    { name: "Tractors", description: "Mahindra, John Deere", count: 12 },
    { name: "Harvesters", description: "Combine harvesters", count: 5 },
    { name: "Sprayers", description: "Manual & power", count: 15 }
  ]);

  console.log("✅ Data Inserted");
  process.exit();
};

seedData();
