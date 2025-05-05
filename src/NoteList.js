import { useState } from "react";

export default function NoteList({ notes, onDelete, onEdit }) {
  const [editIndex, setEditIndex] = useState(-1);

  return (
    <div>
      {notes.map((note, i) => (
        <div key={i}>
          {editIndex === i ? (
            <>
              <input
                value={note.title}
                onChange={(e) => onEdit(i, "title", e.target.value)}
              />
              <textarea
                value={note.content}
                onChange={(e) => onEdit(i, "content", e.target.value)}
              />
              <button onClick={() => setEditIndex(-1)}>Save</button>
            </>
          ) : (
            <>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <button onClick={() => setEditIndex(i)}>Edit</button>
              <button onClick={() => onDelete(i)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
