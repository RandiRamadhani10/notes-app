const express = require('express');
const NotesController = require('../controllers/notes-controller');
const router = express.Router();

router.route('/:id')
.get(NotesController.editPage)
.post(NotesController.edit);

module.exports = router;