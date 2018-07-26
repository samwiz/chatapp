const express = require("express");

const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");

const app = express();

//DB config
const db = require("./config/keys").mongoURI;

//connect to mongo db

mongoose
  .connect(db)
  .then(() => console.log("Coonected to Mongo DB"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello Sameer"));

//Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);

const port = 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));
