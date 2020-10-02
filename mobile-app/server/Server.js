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
  var prices = JSON.parse(JSON.stringify(res.body.prices));
  //   console.log(prices);
  //   var length = Number(req.body.length);
  //   var total = 0;
  //   var i;
  //   for (i = 0; i < length; i++) {
  //     total = total + Number(prices[i]);
  //   }
  res.send(prices);
});

app.listen(PORT, () => {
  console.log("server running at port 3000");
});
