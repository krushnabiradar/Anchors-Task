const Company = require("../models/companyModel");
const nodemailer = require("nodemailer");
const { sendEmail } = require("../services/emailServices");

const companyController = {
  addDetails: async (req, res) => {
    try {
      const { companyName, logo } = req.body;
      const company = new Company({ companyName, logo, balance: 200 });
      await company.save();
      res.status(200).json({ message: "Company details added successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  addRole: async (req, res) => {
    try {
      const { roleName, minCTC, maxCTC, location } = req.body;
      const requiredRupees =
        roleName.length +
        minCTC.toString().length +
        maxCTC.toString().length +
        location.length;
      // Validate company balance
      const company = await Company.findById(req.user.id);
      if (!company) {
        return res.status(404).json({ error: "Company not found" });
      }
      if (company.balance < requiredRupees) {
        return res
          .status(400)
          .json({ error: "Insufficient balance to add role" });
      }
      // Deduct required Rupees
      company.balance -= requiredRupees;
      await company.save();
      res.status(200).json({ message: "Role added successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  postJob: async (req, res) => {
    try {
      const { roleName } = req.body;
      // Find company
      const company = await Company.findById(req.user.id);
      if (!company) {
        return res.status(404).json({ error: "Company not found" });
      }
      // Find role by name
      const role = company.roles.find((r) => r.roleName === roleName);
      if (!role) {
        return res.status(404).json({ error: "Role not found" });
      }
      // Add job post
      role.jobPosts.push({
        postedBy: req.user.id,
        postedAt: Date.now(),
      });
      await company.save();
      // Send email notifications
      const students = []; // Fetch students who might be interested in this job
      students.forEach((student) => {
        sendEmail(
          student.email,
          "New Job Post",
          `${company.companyName} posted a new job for ${roleName}`
        );
      });
      res.status(200).json({ message: "Job posted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = companyController;
