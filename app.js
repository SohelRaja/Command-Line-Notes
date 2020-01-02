console.log('App started');

const fs = require('fs'); //Requiring file system module
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv;
var command = argv._[0];

console.log("Command: ", command);
console.log("Yargs: ", argv);

if(command === 'add'){
    var note = notes.addNote(argv.title,argv.body);
    if(note){
        console.log('------------');
        console.log('Note Created');
        console.log('------------');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }else{
        console.log('------------------------');
        console.log('Note title already taken');
        console.log('------------------------');
    }
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
    notes.getNote(argv.title);
}else if(command === 'remove'){
    notes.removeNote(argv.title);
}else{
    console.log('Command Not recognized');
}