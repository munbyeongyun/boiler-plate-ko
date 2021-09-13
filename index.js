const express = require("express");
const app = express();
const port = 4000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://dkqk1326:a123456@cluster0.7bnph.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
