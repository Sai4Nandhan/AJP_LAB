const express = require("express");
const router = express.Router();
const Faculty = require("../modules/Faculty");

// Add faculty
router.post("/faculty", async (req, res) => {
    const faculty = new Faculty(req.body);
    await faculty.save();
    res.send(faculty);
});

// Get all faculty
router.get("/faculty", async (req, res) => {
    const faculty = await Faculty.find();
    res.send(faculty);
});

module.exports = router;