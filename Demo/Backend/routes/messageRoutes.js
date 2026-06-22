const express = require("express");
const router = express.Router();


const { getMessages, sendMessage } = require("../controllers/messageController");
const authmiddleware = require("../middleware/authMiddleware"); 

router.get("/messages", authmiddleware, getMessages);
router.post("/messages", authmiddleware, sendMessage);

module.exports = router;
