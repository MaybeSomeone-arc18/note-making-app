import { useState } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

export default function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => setNotes([...notes, note]);

  const deleteNote = (i) =>
    setNotes(notes.filter((_, index) => index !== i));

  const editNote = (i, field, value) => {
    const updated = [...notes];
    updated[i][field] = value;
    setNotes(updated);
  };

  return (
    <div>
      <h1>Note Taking App</h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote} />
    </div>
  );
}
