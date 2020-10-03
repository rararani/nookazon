const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  cartItems: Array,
});

mongoose.model("user", UserSchema);
