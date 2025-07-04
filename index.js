const express = require("express");
const app = express();
const db = require("./db");
const employeeRoutes = require("./controllers/employeeController");
const bodyParser = require("body-parser");

//middleware
app.use(bodyParser.json());
app.use("/api/employees", employeeRoutes);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send({ "Something went wrong": err.message });
});

// Connect to MySQL database
db.query("SELECT 1")
  .then(() => {
    console.log("Connected to MySQL database successfully!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MySQL database:", err);
  });
