const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("./Product");

const PORT = 3000;
const mongoURI =
  "mongodb+srv://rararani:lalaland101@cluster0.fzqt6.mongodb.net/<dbname>?retryWrites=true&w=majority";
const product = mongoose.model("product");

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => console.log("connected to mongo"));
mongoose.connection.on("error", (err) =>
  console.log("an error has occured", err)
);

app.get("/", (req, res) => {
  res.send("welcome to node.js :)");
});
app.listen(PORT, () => {
  console.log("server running at port 3000");
});
