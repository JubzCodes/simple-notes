import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const NewNote = () => {
  return (
    <div className='note new'>
      <textarea rows='8' cols='10' placeholder='Add a new note :)' ></textarea>
      <div className='footer'>
        <span>200 Remaining</span>
        <span>
          <FontAwesomeIcon icon={faCircleCheck} />
        </span>
      </div>
    </div>
  )
}

export default NewNote