// studentController.js

const Student = require("../models/studentModel");
const Company = require("../models/companyModel");
const nodemailer = require("nodemailer");

// Email service setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

const studentController = {
  applyJob: async (req, res) => {
    try {
      const { companyName, roleName } = req.body;
      // Find student
      const student = await Student.findById(req.user.id);
      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }
      // Find company
      const company = await Company.findOne({ companyName });
      if (!company) {
        return res.status(404).json({ error: "Company not found" });
      }
      // Find role by name
      const role = company.roles.find((r) => r.roleName === roleName);
      if (!role) {
        return res.status(404).json({ error: "Role not found" });
      }
      // Check student balance
      if (student.balance < role.requiredRupees) {
        return res
          .status(400)
          .json({ error: "Insufficient balance to apply for job" });
      }
      // Deduct required Rupees
      student.balance -= role.requiredRupees;
      await student.save();
      // Credit half of the Rupees to the company account
      company.balance += role.requiredRupees / 2;
      await company.save();
      // Send email notification to company
      transporter.sendMail({
        from: "your-email@gmail.com",
        to: company.email,
        subject: "Job Application",
        text: `${student.studentName} applied for this role ${roleName}`,
      });
      res.status(200).json({ message: "Job application successful" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = studentController;
