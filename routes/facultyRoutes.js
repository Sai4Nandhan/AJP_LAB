const express = require("express");
const router = express.Router();
const Faculty = require("../models/Faculty");

//create
router.post("/faculties", async (req,res) =>{
    const faculty = new Faculty(req.body);
    await faculty.save();
    res.send(faculty);
});
//read
router.get("/faculties", async (req, res)=> {
    const faculty = await Faculty.find();
    res.send(faculty);
});

//single faculty insert
router.post("/faculties", async (req, res) => {
    const faculty = new Faculty(req.body);
    await faculty.save();
    res.send(faculty);
});

// multiple faculties insertion
router.post("/faculties/bulk", async (req, res) => {
    const faculties = await Faculty.insertMany(req.body);
    res.send(faculties);
});

// Get all faculties
router.get("/faculties", async (req, res) => {
    const faculties = await Faculty.find();
    res.send(faculties);
});

//Get single faculty by id
router.get("/faculties/:id", async (req, res) => {
    const faculty = await Faculty.findById(req.params.id);
    if (!faculty) return res.status(404).send({ message: "Faculty not found" });
    res.send(faculty);
});

// Update a faculty by id
router.put("/faculties/:id", async (req, res) => {
    const faculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!faculty) return res.status(404).send({ message: "Faculty not found" });
    res.send(faculty);
});

// Delete a faculty by id
router.delete("/faculties/:id", async (req, res) => {
    const faculty = await Faculty.findByIdAndDelete(req.params.id);
    if (!faculty) return res.status(404).send({ message: "Faculty not found" });
    res.send({ message: "Faculty deleted", faculty });
});

module.exports = router;