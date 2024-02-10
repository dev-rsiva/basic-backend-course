data = {};
data.employees = require("../model/employees.json");

const getAllEmployees = (req, res) => {
  res.json(data.employees);
};

const createNewEmployee = (req, res) => {
  console.log(req.body);

  data.employees.push(req.body);
  res.json(data.employees[data.employees.length - 1]);
};

const updateEmployee = (req, res) => {
  res.json({
    putfirstname: req.body.firstname,
    putlastname: req.body.lastname,
  });
};

const deleteEmployee = (req, res) => {
  res.json({
    id: req.body.id,
  });
};

const getEmployee = (req, res) => {
  res.json({
    id: req.params.id,
  });
};

module.exports = {
  getAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
};
