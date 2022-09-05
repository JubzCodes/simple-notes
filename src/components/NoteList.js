import React from 'react'
import Note from './Note'
import NewNote from './NewNote';

const NoteList = ({ notes, handleSave }) => {

  return (
    <div className="notes-list">
      <NewNote  handleSave={handleSave}/>
      {notes.map((note) => {
        return <Note key={note.id} id={note.id} text={note.text} date={note.date} />
      })}
    </div>
  );
}

export default NoteList