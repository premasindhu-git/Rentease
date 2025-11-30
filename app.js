const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const tenantRoutes = require("./routes/tenantRoutes");
const rentRoutes = require("./routes/rentRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/tenants", tenantRoutes);
app.use("/api/rent", rentRoutes);

module.exports = app;
