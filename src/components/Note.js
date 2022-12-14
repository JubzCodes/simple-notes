import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare,
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Note = ({ id, text, date, handleEdit, handleDelete }) => {

  //EDIT STATES
  const [clicked, setClicked] = useState(false);
  const [edit, setEdit] = useState('');

  //HANDLE TEXTAREA
  const charLimit = 200;
  const handleChange = (e) => {
    if (charLimit - e.target.value.length >= 0) {
      let edited = {
       id: edit.id,
       text: e.target.value,
       date:date
     }
    setEdit(edited);
    }
  };
  
  //HANDLE EDIT CLICK
  const handleClick = () => {
    if (clicked == false) {
      setClicked(true);
    }
  }
  
  //HANDLE EDIT
  const saveEdit = () => {
    handleEdit(edit);
    setClicked(false);
  }

  return (
    <div className="note">
      {clicked == true ? (
        // {EDIT FORM}
        <>
          <div className="note edit">
            <textarea
              autoFocus
              onFocus={(e) => e.currentTarget.select()}
              rows="8"
              cols="10"
              value={edit && edit.text}
              onChange={handleChange}
            />
            <div className="footer">
              <span>
                {edit ? charLimit - edit.text.length : charLimit - text.length}{" "}
                Remaining
              </span>
              <span className="save" title="Save Change" onClick={saveEdit}>
                <FontAwesomeIcon icon={faCircleCheck} size="lg" />
              </span>
            </div>
          </div>
        </>
      ) : (
        // {NOTE COMPONENT}
        <>
          <span>{text}</span>
          <div className="footer">
            <span>{date}</span>
            <div className="buttons">
              <span title="Edit" onClick={handleClick}>
                <FontAwesomeIcon
                  className="edit-icon"
                  icon={faPenToSquare}
                  onClick={() => setEdit({ id: id, text: text, date: date })}
                />
              </span>
              <span title="Delete" onClick={() => handleDelete(id)}>
                <FontAwesomeIcon className="delete" icon={faTrashCan} />
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Note
