const notes = require('../data/notes');
const { v4: uuidv4 } = require('uuid');

const Notes = {
    createNewNote({
        title,
        body,
        createdAt,
    }) {
        if(!title || !body || !createdAt){
            throw new Error('inputan ada yang kosong');
        }
        const newNote = {
            id: uuidv4(),
            title,
            body,
            createdAt,
        }
        notes.push(newNote);
        
        return true;
    }, 

    getAllNotes(){
        return notes;
    },

    getNoteById(id){
        return notes.find((note) => note.id === id);
    },

    updateNoteById(id, newData){

        const{ title, body, createdAt } = newData;
        
        if(!title || !body || !createdAt){
            throw new Error('inputan ada yang kosong');
        }

        const index = notes.findIndex((note) => note.id === id);

        if(index === -1){
            throw new Error('Id tidak ditemukan');
        }

        notes[index] = {
            id,
            title,
            body,
            createdAt,
        };
        
        return true;
    },

    deleteNoteById(id) {
        const index = notes.findIndex((note) => note.id === id);

        if(index === -1){
            throw new Error('Id tidak ditemukan');
        }

        notes.splice(index, 1);

        return true;
    },
}

module.exports = Notes;