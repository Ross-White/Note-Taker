// const router = require('express').Router();
// const fs = require('fs');
// const {v4: uuidv4} = require ('uuid');
// const db = ('../db/db.json');


// router.get('/api/notes', (req, res) => {
//     res.json(JSON.parse(fs.readFileSync(db, "utf8")));
// });

// router.post('/api/notes', (req, res) => {
//     let notes = JSON.parse(fs.readFileSync(db, 'utf8'));
//     const newNote = req.body;
//     newNote.Id = uuidv4();
//     notes.push(newNote);
//     fs.writeFileSync(db, JSON.stringify(notes, null, 2));
//     res.json(notes);
// });

// module.exports = router;