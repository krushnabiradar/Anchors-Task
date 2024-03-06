const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(process.env.DB_LOCATION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/company", require("./routes/companyRoute"));
app.use("/api/student", require("./routes/studentRoute"));
app.use("/api/auth", require("./routes/authRoute"));

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
