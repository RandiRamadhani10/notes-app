const Notes = require('../models/notes');
const NotesController = {
    async index(req, res) {
        try{
            const notes = Notes.getAllNotes();
            res.render('index',{
                notes,
            });
        } catch(error) {
            res.render('index', {
                error: error.message,
            });
        }
    },

    async addPage(req, res){
        res.render('add');
    },

    async add(req, res){
        try{
            const { title,body } = req.body;
            const createdAt = new Date().toLocaleDateString();
            Notes.createNewNote({
                title,
                body,
                createdAt,
            });
            res.redirect('/');

        } catch(error){
            console.log(error);
            res.render('add', {
                error: error.message,
            });
        }
    },
    async delete(req, res) {
        try{
            const { id } = req.params;
            const notes = Notes.deleteNoteById(id);
            res.redirect('/');
        } catch(error) {
            res.render('index', {
                error: error.message,
            });
        }
    },
    async editPage(req, res) {
        try{
            const { id } = req.params
            const notes = Notes.getNoteById(id);
            res.render('edit',{
                notes,
            });
        } catch(error) {
            res.render('edit', {
                error: error.message,
            });
        }
    },
    async edit(req, res){
        try{
            const { id } = req.params
            const { title, body, } = req.body;
            const createdAt = new Date().toLocaleDateString();
            Notes.updateNoteById(id, {
                title,
                body,
                createdAt,
            });
            res.redirect('/');

        } catch(error){
            console.log(error);
            res.render('edit', {
                error: error.message,
            });
        }
    },
};

module.exports = NotesController;