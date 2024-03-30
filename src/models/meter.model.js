const mongoose = require("mongoose");

const LightSchema = new mongoose.Schema({
  name: String,
  measure: Number,
  createAt: { type: Date, default: Date.now },
});

const Light = mongoose.model("meter", LightSchema, "meter");

module.exports = Light;
