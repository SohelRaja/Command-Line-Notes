//console.log('App started');

const fs = require('fs'); //Requiring file system module
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleSchema = {
    describe: 'Title of the note.',
    demand: true,
    alias: 't'
};
const bodySchema = {
    describe: 'Body of the note.',
    demand: true,
    alias: 'b'
};
var args = yargs
    .command('add','Add a new note.',{
        title: titleSchema,
        body: bodySchema
    })
    .command('list','List all the notes.')
    .command('read','Read a note.',{
        title: titleSchema
    })
    .command('remove','Remove a note.',{
        title: titleSchema
    })
    .help()
    .argv;

var command = args._[0];

if(command === 'add'){
    var note = notes.addNote(args.title,args.body);
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
        console.log(`Printing : ${noOfNotes} note(s) below,`);
        console.log('----------------------------');
        allNotes.forEach((note) => {
            notes.logNote(note);
        });
    }
}else if(command === 'read'){
    var note = notes.getNote(args.title);
    if(note){
        console.log('----------');
        console.log('Note Found:');
        console.log('----------');
        notes.logNote(note);
    }else{
        console.log('---------------');
        console.log('Note not found.');
        console.log('---------------');
    }
}else if(command === 'remove'){
    var noteRemoved = notes.removeNote(args.title);
    var message = noteRemoved ? 'Note was removed.' : 'Unable to find the note.';
    console.log('------------------------');
    console.log(message);
    console.log('------------------------');
}else{
    console.log('-----------------------');
    console.log('Command Not recognized.');
    console.log('-----------------------');
    console.log(`For more details type: app.js --help`);
    console.log('-----------------------');
}