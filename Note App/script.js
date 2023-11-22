// by clicking the button it generate new note area.
//  by double clicking , we can delete the note.
// store the note in the local storage before after updating the note. get and set , add and remove


// declaring the element
// const noteEl = document.getElementById("note");
const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");

// 7th step ---to save in the local storage
getNotes().forEach((note) =>{
    const noteEL = createNoteEl(note.id, note.content);
    appEl.insertBefore(noteEL, btnEl);
});

// 3rd step
// this function has two input one is id and another one is content.  
//  created element and replaced it with noteEL. 
function createNoteEl(id, content){
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value = content;

    element.addEventListener("dblclick", ()  =>{
        const warning = confirm("Do you want to delete this note?")
            if(warning){
                deleteNote(id, element)
            }
    });

    // 5th step
    // if anything happen inside the element it will be updated.
    element.addEventListener("input", ()=>{
        updateNote(id, element.value);
    });
    return element;
}


// 4th step
// filter method will delete the note which has targeted id and element.
function deleteNote(id, element){
    const notes = getNotes().filter((note)=>note.id != id);
    saveNote(notes);
    appEl.removeChild(element);
}

// 6th step
// filter method target the specified element
// filter method update the specified id and content
function updateNote(id, content){
    const notes = getNotes();
    const target = notes.filter((note) => note.id == id)[0];
    target.content = content;
    saveNote(notes);
}

// 2nd step
// to add note(textarea)
// the note has an id and content. at first the content is empty".
// created note element where the note will be stored and pass the note objects in it. first the id and then the content. 
// insertBefore method is used to insert the element before and element.
function addNote(){
    const notes = getNotes();
    const notObj = {
        id : Math.floor(Math.random() * 100000),
        content : "",
    };
    const noteEl = createNoteEl(notObj.id, notObj.content);
    appEl.insertBefore(noteEl, btnEl)

    notes.push(notObj);

    saveNote(notes);
}

// to save notes in the local storage. we cant save any array inside the local storage. thats why we added a function to that variable. and converted it to JSON file.
function saveNote(notes){
        localStorage.setItem("note-app", JSON.stringify(notes))
}

// this is to get the saved notes as an array.
function getNotes(){
    return JSON.parse(localStorage.getItem("note-app") || "[]")
}

// fist step 
btnEl.addEventListener("click", addNote)
