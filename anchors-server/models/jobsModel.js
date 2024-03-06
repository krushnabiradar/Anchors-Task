
// job.js
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  role: { type: String, required: true },
  minCTC: { type: Number, required: true },
  maxCTC: { type: Number, required: true },
  location: { type: String, required: true },
  requiredRupees: { type: Number, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" }, // Reference to Company model
  appliedStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }] // Reference to Student model
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;