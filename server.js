// TODO: this file :)
const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Employees!");
});

const employees = require("./employees");

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/random", (req, res) => {
  const i = Math.floor(Math.random() * employees.length);
  res.json(employees[i]);
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  if (id < 0 || id >= employees.length) {
    res.status(404).send("Employee does not exist in system");
  } else {
    res.json(employees[id]);
  }
});

app.listen(PORT, () => {
  `listening on port ${PORT}`;
});
