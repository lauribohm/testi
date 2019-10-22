const express = require("express");

const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  let j = [1, 2, 3];
  res.render("appi", { k: "homo" });
});

app.listen(8080);
