import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NewNote = () => {

  //TEXT STATE
  const [text, setText] = useState("");

  //HANDLE TEXTAREA
  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className='note new'>
      <textarea rows='8' cols='10' placeholder='Add a new note :)' value={text} onChange={handleChange} ></textarea>
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