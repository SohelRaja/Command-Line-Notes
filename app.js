console.log('App started');

const fs = require('fs'); //Requiring file system module
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv;
var command = process.argv[2];

console.log("Command: ", command);
console.log("Process: ", process.argv);
console.log("Yargs: ", argv);

if(command === 'add'){
    console.log('Adding a new note');
}else if(command === 'list'){
    console.log('Listing all notes');
}else if(command === 'read'){
    console.log('Reading note');
}else if(command === 'remove'){
    console.log('Removing note');
}else{
    console.log('Command Not recognized');
}