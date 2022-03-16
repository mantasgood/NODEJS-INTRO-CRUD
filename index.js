const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(5000);

const food = [
  { id: 1, name: "pizza" },
  { id: 2, name: "zeppelin" },
  { id: 3, name: "hotdogs" },
  { id: 4, name: "meatballs" },
];

app.get("/api/food", function (req, res) {
  res.send(food);
});

// search by id
app.get("/api/food/:id", function (req, res) {
  const my_food = food.find((food) => food.id === parseInt(req.params.id));
  if (!my_food) res.status(404).send("not found");
  res.send(my_food);
});

// search by name
app.get("/api/food/byname/:name", function (req, res) {
  const named_food = food.find((food) => food.name === req.params.name);
  if (!named_food) res.status(404).send("not found");
  res.send(named_food);
});

app.delete("/api/food/:id", function (req, res) {
  //look up the name
  // if it does not exist , return not found
  const my_food = food.find((food) => food.id === parseInt(req.params.id));
  if (!my_food) res.status(404).send("not found");

  // delete
  const index = food.indexOf(my_food);
  food.splice(index, 1);

  res.send(my_food);
});
