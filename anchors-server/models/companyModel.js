// company.js
const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  logo: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  balance: { type: Number, default: 200 },
  jobPostings: [{
    role: String,
    minCTC: Number,
    maxCTC: Number,
    location: String,
    requiredRupees: Number,
    appliedStudents: [String] // Array of student emails
  }],
  rupeeHistory: [{ type: String }] // Array of history messages
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;


