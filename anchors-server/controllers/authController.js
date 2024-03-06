const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Student = require("../models/studentModel");
const Company = require("../models/companyModel");
const { generateOTP } = require("../utils/utils");
const { sendEmail } = require("../services/emailServices");

const transporter = nodemailer.createTransport({
  // Your email configuration here
});

const register = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const otp = generateOTP();

    let user;
    if (role === "company") {
      user = new Company({ email, password, otp });
    } else if (role === "student") {
      user = new Student({ email, password, otp });
    } else {
      return res.status(400).json({ message: "Invalid role" });
    }

    await user.save();
    await sendEmail(email, "Verification OTP", `Your OTP is ${otp}`);

    res.status(200).json({ message: "Please verify your email with OTP" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Registration failed" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    let user;
    if (role === "company") {
      user = await Company.findOne({ email });
    } else if (role === "student") {
      user = await Student.findOne({ email });
    } else {
      return res.status(400).json({ message: "Invalid role" });
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed" });
  }
};

module.exports = {
  register,
  login,
};
