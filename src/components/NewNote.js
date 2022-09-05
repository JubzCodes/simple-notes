import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const NewNote = () => {
  return (
    <div className='note new'>
      <textarea rows='8' cols='10' placeholder='Add a new note :)' ></textarea>
      <div className='footer'>
        <span>200 Remaining</span>
        <span className='save' title='Save'>
          <FontAwesomeIcon icon={faCircleCheck} size="lg" />
        </span>
      </div>
    </div>
  )
}

export default NewNote