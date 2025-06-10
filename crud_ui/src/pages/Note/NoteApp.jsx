import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NoteApp.css";

function NoteApp() {
  const [notes, setNotes] = useState([]);
  const [description, setDescription] = useState("");

  const fetchNotes = async () => {
    const res = await axios.get("https://localhost:7245/api/note");
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async () => {
    if (!description.trim()) return;
    await axios.post("https://localhost:7245/api/note", { description });
    setDescription("");
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await axios.delete(`https://localhost:7245/api/note/${id}`);
    fetchNotes();
  };

  return (
    <div className="note-container">
      <h1>Notes App</h1>
      <div className="note-input">
        <textarea
          placeholder="Write your note here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addNote}>Add Note</button>
      </div>

      <ul className="note-list">
        {notes.map((note) => (
          <li key={note.id}>
            <p>{note.description}</p>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteApp;
