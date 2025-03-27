const express = require("express");
const router = express.Router();
const { getVisitorCount, incrementVisitorCount,resetVisitorCount } = require("../controllers/countController");

router.get("/api/getincrement", getVisitorCount);
router.post("/api/postincrement", incrementVisitorCount);
router.post("/api/reset", resetVisitorCount);

module.exports = router;
