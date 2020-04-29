const yargs = require('yargs')
const notes = require('./notes.js');
yargs.command({
    command: "add",
    describe: "For adding a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addnotes(argv.title, argv.body);
    }
})

yargs.command({
    command: "remove",
    describe: "For removing a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removenotes(argv.title);
    }
})

yargs.command({
    command: "list",
    describe: "for listing out the notes",
    handler: function(){
        notes.listnotes();
    }
})

yargs.command({
    command: "read",
    describe: "read a note",
    builder: {
        title: {
            describe: "Title for note to be read",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.readnotes(argv.title);
    }
})
yargs.parse();  
