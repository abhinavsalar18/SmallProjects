const main = document.querySelector('#main');
const addNewNotes = document.querySelector('#addbtn');

addNewNotes.addEventListener('click', function(){
    addNotes("");
});



  function loadData() {
        console.log("loading");
        const localStorageNotes = JSON.parse(localStorage.getItem("notes"));
        if(localStorageNotes == null || localStorageNotes.length == 0){
            addNotes("");
        }
        else{
            localStorageNotes.forEach(function (lsnote) {
                addNotes(lsnote);
                console.log(lsnote);
            });
        }
        

        
    }
function addNotes(data){
    // alert("new note");
    const note = document.createElement('div');
    note.classList.add('notes');
    note.innerHTML = `
    <div class="tools">
        <img  class="save" src="./icons/saveIcon.png" alt="save">
        <img  class="trash" src="./icons/trashIcon.png" alt="trash">
    </div>
    <textarea>${data}</textarea>`;

    main.appendChild(note);

   note.querySelector('.save').addEventListener('click', function() {
    saveNotes();
});

note.querySelector(".save").addEventListener('focusout', function(){
    saveNotes();
})

   note.querySelector('.trash').addEventListener('click', function(){
    note.remove();
    saveNotes();
});

  note.querySelector('.notes textarea').addEventListener('focusout', function () {
    saveNotes();
  })

}

function saveNotes(save){
    const notes = document.querySelectorAll(".notes textarea");
    // console.log(notes);
    const data = [];

    notes.forEach(function(note){
        data.push(note.value);
    }
    );

    if(data.length == 0){
        localStorage.removeItem("notes");
    }
    else{
        localStorage.setItem("notes", JSON.stringify(data));
    }
}




 