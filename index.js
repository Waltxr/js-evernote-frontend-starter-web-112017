

  fetch('http://localhost:3000/api/v1/notes')
    .then(res => res.json())
    .then(json => displayNotes(json))


  function displayNotes(data) {
    for (let i = 0; i < data.length; i++) {
      new Note(data[i].title, data[i].body)
    }


  function listOfNotes(noteStore) {
    for(let note of noteStore) {
      let noteThumbNail = document.createElement("li")
       noteThumbNail.innerHTML = note.title
       document.getElementById("note-list").appendChild(noteThumbNail)
    }
  }

   return listOfNotes()
