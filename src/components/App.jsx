import React, {useState} from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import CreateArea from "./createNote/CreateArea";
import Note from "./note/Note";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return id !== index;
      });
    });
  }

  return <div>
    <Header/>
      <CreateArea onAdd={addNote}/>
      {
        notes.map((note, index) => <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote}/>)
      }
    <Footer/>
  </div>
}

export default App;