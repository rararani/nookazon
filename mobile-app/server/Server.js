const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("./Product");

const PORT = 3000;
const mongoURI =
  "mongodb+srv://rararani:lalaland101@cluster0.fzqt6.mongodb.net/<dbname>?retryWrites=true&w=majority";

const Product = mongoose.model("product");
var statusCode = 0;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => console.log("connected to mongo"));
mongoose.connection.on("error", (err) =>
  console.log("an error has occured", err)
);

app.get("/", (req, res) => {
  console.log("welcome");
});

app.post("/", (req, res) => {
  var costs = Array(req.body.costs);
  var total = 0;
  var i;
  for (i = 0; i < costs.length; i++) {
    total = total + costs[i];
  }
  res.send(total);
});

app.listen(PORT, () => {
  console.log("server running at port 3000");
});
