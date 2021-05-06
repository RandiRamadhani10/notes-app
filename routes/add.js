const express = require('express');
const NotesController = require('../controllers/notes-controller');
const router = express.Router();

router.get('/', NotesController.index);

router.route('/add')
.get(NotesController.addPage)
.post(NotesController.add);


module.exports = router;