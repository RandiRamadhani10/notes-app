const express = require('express');
const NotesController = require('../controllers/notes-controller');
const router = express.Router();

router.route('/:id')
.get(NotesController.delete);

module.exports = router;