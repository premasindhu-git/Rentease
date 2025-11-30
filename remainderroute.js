const express = require("express");
const router = express.Router();
const { sendRentReminder } = require("../controllers/reminderController");

// POST /api/reminder/send
router.post("/send", sendRentReminder);

module.exports = router;
