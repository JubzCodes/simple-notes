import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NewNote = ({ handleSave }) => {

  //TEXT STATE
  const [text, setText] = useState("");

  const charLimit = 200;

  //HANDLE TEXTAREA
  const handleChange = (e) => {
    
    if (charLimit - e.target.value.length >= 0) {
      setText(e.target.value);
    }
  }

  //HANDLE SAVE
  const Save = () => {
    handleSave(text);
    setText("");
  }

  return (
    <div className='note new'>
      <textarea rows='8' cols='10' placeholder='Add a new note :)' value={text} onChange={handleChange} ></textarea>
      <div className='footer'>
        <span>{charLimit - text.length} Remaining</span>
        <span className='save' title='Save' onClick={Save}>
          <FontAwesomeIcon icon={faCircleCheck} size="lg" />
        </span>
      </div>
    </div>
  )
}

export default NewNote