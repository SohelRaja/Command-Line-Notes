//console.log('App started');

const fs = require('fs'); //Requiring file system module
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs
    .command('add','Add a new note.',{
        title: {
            describe: 'Title of the note.',
            demand: true,
            alias: 't'
        },
        body: {
            describe: 'Body of the note.',
            demand: true,
            alias: 'b'
        }
    })
    .command('list','List all the notes.')
    .command('read','Read a note.',{
        title: {
            describe: 'Title of the note.',
            demand: true,
            alias: 't'
        }
    })
    .command('remove','Remove a note.'{
        title: {
            describe: 'Title of the note.',
            demand: true,
            alias: 't'
        }
    })
    .help()
    .argv;

var command = argv._[0];

if(command === 'add'){
    var note = notes.addNote(argv.title,argv.body);
    if(note){
        console.log('------------');
        console.log('Note Created');
        console.log('------------');
        notes.logNote(note);
    }else{
        console.log('------------------------');
        console.log('Note title already taken');
        console.log('------------------------');
    }
}else if(command === 'list'){
    var allNotes = notes.getAll();
    noOfNotes = allNotes.length;
    if(noOfNotes === 0){
        console.log('-------------------------');
        console.log(`There is no note present.`);
        console.log('-------------------------');
    }else{
        console.log('----------------------------');
        console.log(`Printing : ${noOfNotes} note(s) below.`);
        console.log('----------------------------');
        allNotes.forEach((note) => {
            notes.logNote(note);
        });
    }
}else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log('----------');
        console.log('Note Found');
        console.log('----------');
        notes.logNote(note);
    }else{
        console.log('---------------');
        console.log('Note not found.');
        console.log('---------------');
    }
}else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed.' : 'Unable to find the note.';
    console.log('------------------------');
    console.log(message);
    console.log('------------------------');
}else{
    console.log('Command Not recognized');
}