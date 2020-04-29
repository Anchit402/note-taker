const fs = require('fs');

const getnotes = function(){
    return "your notes...";
}
const addnotes = function(title, body){
    const notes = loadnotes()
    const duplicatenote = notes.filter(function (note){
        return note.title === title
    })
    console.log(duplicatenote);
    if(duplicatenote.length === 0)
    {
        notes.push({
            title: title,
            body: body
        })
        savenotes(notes);
        console.log("New note added: ");
    }

    else 
        console.log("Aready taken");
}
const removenotes = function(title){
    const notes = loadnotes();
    const keptnotes = notes.filter(function(note){
        return note.title !== title;
    })
    savenotes(keptnotes);
}

const listnotes = function(){
    console.log("YOUR NOTES: ");
    const notes = loadnotes();
    notes.forEach(function(note){
        console.log(note.title);
    })
}

const readnotes = function(title){
    const notes = loadnotes();
    const foundnote = notes.filter(function(note){
        if(title === note.title)
            console.log(note);
        return title === note.title;
    })
    if(foundnote.length === 0)
        console.log("Note not found");

}

const savenotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadnotes = function(){
    try{
        const databuffer = fs.readFileSync('notes.json');
        return JSON.parse(databuffer.toString());
    }catch(e){
        return []
    }
    
}
module.exports = {
    getnotes: getnotes,
    addnotes: addnotes,
    removenotes: removenotes,
    listnotes: listnotes,
    readnotes: readnotes
};
