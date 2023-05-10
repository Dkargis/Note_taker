const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.post("/notes", (req, res) => {
    console.log(req.body);
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        const notes = JSON.parse(data);
        const newNote = req.body;
        notes.push(newNote);
        console.log(notes);
    fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
        if (err) throw err;
        res.json(notes);
});
});
});

router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        const notes = JSON.parse(data);
    res.json(notes);
});
});



module.exports = router;