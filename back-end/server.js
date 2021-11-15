const express = require("express");
//const authRoutes = require("./routes/auth.routes");
require("dotenv").config({ path: "./config/.env" });
const app = express();

// routes
//app.use("/api/auth", authRoutes);

// server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
