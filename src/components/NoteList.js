import React from 'react'
import Note from './Note'
import NewNote from './NewNote';

const NoteList = ({ notes, handleSave, handleEdit, handleDelete }) => {

  return (
    <div className="notes-list">

      {/* {NEW NOTE COMPONENT} */}
      <NewNote  handleSave={handleSave}/>

      {/* {MAP && SORT THROUGH NOTE COMPONENTS} */}
      {notes.sort((a, b) => (a.id > b.id ? 1 : -1)).map((note) => {
        return <Note key={note.id} id={note.id} text={note.text} date={note.date} handleEdit={handleEdit} handleDelete={handleDelete}/>
      })}
    </div>
  );
}

export default NoteList