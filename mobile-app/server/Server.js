const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("./User");

const PORT = 3000;
const mongoURI =
  "mongodb+srv://rararani:lalaland101@cluster0.fzqt6.mongodb.net/<dbname>?retryWrites=true&w=majority";

const User = mongoose.model("user");

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

app.post("/send", (req, res) => {
  const user = User({
    username: req.body.username,
    password: req.body.password,
    cartItems: req.body.cartItems,
  });
  user
    .save()
    .then((data) => {
      console.log(data);
      res.send({});
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, () => {
  console.log("server running at port 3000");
});
