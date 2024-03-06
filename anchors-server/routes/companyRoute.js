

// companyRoutes.js
const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");

router.post("/add-details", companyController.addDetails);
router.post("/add-role", companyController.addRole);
router.post("/post-job", companyController.postJob);

module.exports = router;

