const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  cost: Number,
  picture: String,
});

mongoose.model("product", ProductSchema);
