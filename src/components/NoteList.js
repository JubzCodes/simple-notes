import React from 'react'
import Note from './Note'
import NewNote from './NewNote';

const NoteList = ({ notes }) => {

  return (
    <div className="notes-list">
      <NewNote />
      {notes.map((note) => {
        return <Note key={note.id} id={note.id} text={note.text} date={note.date} />
      })}
    </div>
  );
}

export default NoteList