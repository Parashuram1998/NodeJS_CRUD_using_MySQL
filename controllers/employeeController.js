const express = require("express");
router = express.Router();
const services = require("../services/employeeService");

//http://localhost:3000/api/employees/
router.get("/", async (req, res) => {
  const allEmployees = await services.getAllEmployees();
  res.send(allEmployees);
});

//http://localhost:3000/api/employees/1
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const employee = await services.getEmployeeById(id);
  if (employee.length === 0) {
    throw new Error("Employee not found");
  }
  res.send(employee);
});

//http://localhost:3000/api/employees/1
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const employee = await services.deleteEmployeeById(id);
  if (employee.affectedRows === 0) {
    throw new Error("Employee not found");
  }
  res.send("employee deleted successfully");
});

router.post("/", async (req, res) => {
  const obj = req.body;
  if (!obj.name || !obj.employee_code || !obj.salary) {
    throw new Error("Please provide all required fields");
  }
  const affectedRows = await services.addOrUpdateEmployee(obj);
  res
    .status(201)
    .json({ message: "Employee created Successfully.", data: affectedRows });
});

router.patch("/:id", async (req, res) => {
  const affectedRows = await services.addOrUpdateEmployee(
    req.body,
    req.params.id
  );
  if (affectedRows === 0) {
    throw new Error("Employee not found with the given ID " + req.params.id);
  }
  res.status(201).json({ message: "Employee updated Successfully." });
});

module.exports = router;
