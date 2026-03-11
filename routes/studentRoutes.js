const express = require("express");
const router = express.Router();
const Student = require("../modules/Student");

router.post("/students", async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.send(student);
});

router.get("/students", async (req, res) => {
    const students = await Student.find();
    res.send(students);
});

module.exports = router;