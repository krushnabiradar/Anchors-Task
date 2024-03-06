// student.js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  balance: { type: Number, default: 300 },
  appliedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }], // Reference to Job model
  rupeeHistory: [{ type: String }] // Array of history messages
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
