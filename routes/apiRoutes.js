const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

router.post("/notes", (req, res) => {
    console.log(req.body);
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        const notes = JSON.parse(data);
        const newNote = req.body;
        notes.push(newNote);
        newNote.id = uuidv4();
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

router.get('/notes/:id', async (req, res) => {
    const noteId = req.params.id;
    try {
      const note = await getNoteById(noteId);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Server error' });
    }
  });

module.exports = router;