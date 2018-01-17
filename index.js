class App {
  static init() {
    fetch('http://localhost:3000/api/v1/notes')
      .then(res => res.json())
      .then(json => {
          App.addNotes(json)
          App.displayNotes(noteStore)
          App.loadNote(noteStore[0].id)
        })

    const noteForm = document.getElementById('create-note')
    noteForm.addEventListener('submit', App.handleCreateNote)

    const editForm = document.getElementById('current-note')
    editForm.addEventListener('submit', App.handleEditNote)
  }

static loadNote(noteId) {
  let note = noteStore.find(function(n) {
    return n.id === noteId
  })
  document.querySelector('#edit-note-title').value = `${note.title}`
  document.querySelector('#edit-note-body').value = `${note.body}`
  document.querySelector('#current-note').dataset.id = note.id
}

static addNotes(data) {
  for (let i = 0; i < data.length; i++) {
    new Note(data[i].title, data[i].body, data[i].id)
  }
}

static displayNotes(noteStore) {
  for(let note of noteStore.reverse()) {
    if (document.querySelectorAll.includes(function(x) {
      x.dataset.id === note.id
    }))

    })
    let noteThumbNail = document.createElement("li")
     noteThumbNail.innerHTML = note.title
     document.getElementById("note-list").appendChild(noteThumbNail)
  }
}

static handleCreateNote() {
  const newNoteTitle = document.getElementById('new-note-title').value
  const newNoteBody = document.getElementById('new-note-body').value

  fetch('http://localhost:3000/api/v1/notes',
   {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      title: newNoteTitle,
      body: newNoteBody
    })
    }).then(res => res.json())
      .then(noteData => {
        const note = new Note(noteData)
        // RENDER
        let el = document.createElement('li')
        el.innerText = note.title
        document.getElementById('note-list').appendChild(el)
    })
  }

static handleEditNote(event) {
  event.preventDefault()

  const editNoteTitle = document.getElementById('edit-note-title').value
  console.log(editNoteTitle)
  const editNoteBody = document.getElementById('edit-note-body').value
  console.log(editNoteBody)
  const noteId = document.getElementById('current-note').dataset.id
  console.log(noteId)

  fetch('http://localhost:3000/api/v1/notes/' + noteId,
   {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      title: editNoteTitle,
      body: editNoteTitle
    })
    }).then(res => res.json())
      .then(noteData => noteData)

}

}

document.addEventListener('DOMContentLoaded',  App.init)
