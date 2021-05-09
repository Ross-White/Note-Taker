const router = require('express').Router();
const fs = require('fs');
const {v4: uuidv4} = require ('uuid');
const path = require('path');
const db = path.join(__dirname,'..', 'db', 'db.json');

router.get('/', (req, res) => {
    res.json(JSON.parse(fs.readFileSync(db, "utf8")));
});

router.post('/', (req, res) => {
    let notes = JSON.parse(fs.readFileSync(db, 'utf8'));
    const newNote = req.body;
    newNote.id = uuidv4();
    notes.push(newNote);
    fs.writeFileSync(db, JSON.stringify(notes, null, 2));
    res.json(notes);
});

router.delete("/:id", function(req, res) {
    let notes = JSON.parse(fs.readFileSync(db, 'utf8'));
    notes.splice(req.params.id, 1);
    fs.writeFileSync(db, JSON.stringify(notes, null, 2));
    res.json(notes);
});


module.exports = router;