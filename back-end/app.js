const express = require("express");

const authRoutes = require("./routes/auth.routes");
const postRoutes = require("./routes/post.routes");

const app = express();

app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

module.exports = app;
