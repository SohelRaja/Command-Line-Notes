console.log('Notes App started');

const fs = require('fs');

var fetchNotes = () => {
    try{
        //Reading the previous value of the json file
        var notesString = fs.readFileSync('notes-data.json');
        //converting string to json object
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }
};

var saveNotes = (notes) => {
    //Converting json object to string
    stringValue = JSON.stringify(notes);

    //Saving the string value into a file
    fs.writeFileSync('notes-data.json',stringValue);
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title: title,
        body: body
    };
    
    //For finding the unique title of a note
    duplicateNotes = notes.filter((note) => {
        return (note.title === title);
    });
    if(duplicateNotes.length === 0){
        //Pushing the note object to the notes array
        notes.push(note);
        //Saving the notes
        saveNotes(notes);
        //Returning the Created note
        return note;
    }
};
var getAll = () => {
    console.log('Listing all notes');
};
var getNote = (title) => {
    console.log('Reading note',title);
};
var removeNote = (title) => {
    console.log('Removing note',title);
};

module.exports = {
    addNote: addNote, 
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote
};