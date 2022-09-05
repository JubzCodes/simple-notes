import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";

const Note = ({ id, text, date }) => {

  return (
    <div className='note' >
      <span>{text}</span>
      <div className='footer'>
        <span>{date}</span>
        <div className='buttons'>
        <span className='edit' title='Edit'>
        <FontAwesomeIcon icon={faPenToSquare} />
        </span>
        <span className='delete' title='Delete'>
        <FontAwesomeIcon icon={faTrashCan}/>
        </span>
        </div>
      </div>
    </div>
  )
}

export default Note
