import React from 'react'
import Note from './Note'
import NewNote from './NewNote';

const NoteList = ({ notes, handleSave, handleEdit }) => {

  return (
    <div className="notes-list">
      <NewNote  handleSave={handleSave}/>
      {notes.sort((a, b) => (a.id > b.id ? 1 : -1)).map((note) => {
        return <Note key={note.id} id={note.id} text={note.text} date={note.date} handleEdit={handleEdit} />
      })}
    </div>
  );
}

export default NoteList