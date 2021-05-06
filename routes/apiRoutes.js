const router = require('express').Router();
const fs = require('fs');
// router.use(express.json());


// API Routes
router.get('/api/notes', function(req, res) {
    fs.readFile("../db/db.json", "utf8", function(err, data) {
    if (err) throw err;
    res.json(JSON.parse(data));
    })
});

module.exports = router;