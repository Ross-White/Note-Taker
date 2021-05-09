const router = require('express').Router();
const { notStrictEqual } = require('assert');
const fs = require('fs');


// API Routes
router.get('/api/notes', function(req, res) {
    fs.readFileSync("../db/db.json", "utf8", function(err, data) {
    if (err) throw err;
    res.json(JSON.parse(data));
    })
});

router.post('/api/notes', function(req, res) {
    let newNote = req.body;
    notStrictEqual.push(newNote);
    rewriteDB();
})

const rewriteDB = () => {
    fs.writeFile('db/db.json', JSON.stringify(notes,), err => {
        if (err) throw err;
        return true;
    })
}

module.exports = router;