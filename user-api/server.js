const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection error:", error.message));

const userRoutes = require("./routes/users");
const profileRoutes = require("./routes/profile");

app.use("/api/users", userRoutes);
app.use("/api/profile", profileRoutes);

app.get("/", (req, res) => {
  res.json({ message: "User Authentication API is running" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
