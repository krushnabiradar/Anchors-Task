
// studentRoutes.js
const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.post("/apply-job", studentController.applyJob);

module.exports = router;