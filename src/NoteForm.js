import { useState, useEffect } from "react";

export default function NoteForm({ onAdd, onUpdate, editData }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
      setContent(editData.content);
    }
  }, [editData]);

  function handleSubmit(e) {
    e.preventDefault();
    const note = { title, content };

    if (editData) {
      onUpdate(note); // call update if editing
    } else {
      onAdd(note); // else add new
    }

    // reset form
    setTitle("");
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">{editData ? "Update" : "Add"}</button>
    </form>
  );
}
