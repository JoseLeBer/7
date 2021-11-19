const express = require("express");

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);

module.exports = app;
