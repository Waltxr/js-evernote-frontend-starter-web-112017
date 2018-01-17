let noteStore = []

class Note {
  constructor(title, body, noteId) {
    this.title = title
    this.body = body
    this.id = noteId
    noteStore.push(this)
  }
}
