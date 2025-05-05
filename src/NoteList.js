export default function NoteList({ notes, onDelete, onEdit }) {
    return (
      <div>
        {notes.map((note, i) => (
          <div key={i}>
            <input
              value={note.title}
              onChange={(e) => onEdit(i, "title", e.target.value)}
            />
            <textarea
              value={note.content}
              onChange={(e) => onEdit(i, "content", e.target.value)}
            />
            <button onClick={() => onDelete(i)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
  