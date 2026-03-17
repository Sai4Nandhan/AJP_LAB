const express = require("express");
const router = express.Router();
const Student = require("../modules/Student");

//multi insert 
router.post("/students/bulk", async (req, res) => {
    const students = await Student.insertMany(req.body);
    res.send(students);
});

//retrive all 
router.get("/students", async (req, res) => {
    const students = await Student.find();
    res.send(students);
});

//single creation
router.post("/students", async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.send(student);
});

//get by id 
router.get("/students/:id", async (req, res) => {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).send({ message: "Student not found" });
    res.send(student);
});

//delete
router.delete("/students/:id", async (req, res) => {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).send({ message: "Student not found" });
    res.send({ message: "Student deleted", student });
});

//update
router.put("/students/:id", async (req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!student) return res.status(404).send({ message: "Student not found" });
    res.send(student);
});

module.exports = router;