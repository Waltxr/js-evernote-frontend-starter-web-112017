let noteStore = []
let noteId = 0

class Note {
  constructor(title, body) {
    this.title = title
    this.body = body
    this.id = noteId++
    noteStore.push(this)
  }
}
