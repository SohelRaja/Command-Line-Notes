console.log('Notes App started');

var addNote = (title, body) => {
    console.log('Adding a new note',title,body);
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