const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = 3000;

require("./User");

app.use(bodyParser.json());

const User = mongoose.model("user");
const mongoURI =
  "mongodb+srv://dbUser:g1pS9EMOI24Silk9@cluster0.qtdsy.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => console.log("connected to mongo"));
mongoose.connection.on("error", (err) =>
  console.log("an error has occured", err)
);

app.get("/", (req, res) => {
  res.send("welcome");
});

app.post("/send", (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    cartItems: req.body.cartItems,
  });
  user
    .save()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log("server running at port " + PORT);
});
