// Dependencies
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
// const apiRoutes = require('./routes/apiRoutes');

const fs = require('fs');
const {v4: uuidv4} = require ('uuid');
const path = require('path');
const db = ('./db/db.json');

// Set Server
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));
// app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.get('/api/notes', (req, res) => {
    res.json(JSON.parse(fs.readFileSync(db, "utf8")));
});

app.post('/api/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync(db, 'utf8'));
    const newNote = req.body;
    newNote.Id = uuidv4();
    notes.push(newNote);
    fs.writeFileSync(db, JSON.stringify(notes, null, 2));
    res.json(notes);
});

app.get("/api/notes/:id", function(req,res) {
    res.json(notes[req.params.id]);
});

app.delete("/api/notes/:id", function(req, res) {
    notes.splice(req.params.id, 1);
    updateDb();
    console.log("Deleted note with id "+req.params.id);
});

// Listen
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
