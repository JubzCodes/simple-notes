import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faEraser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NewNote = ({ handleSave }) => {

  //TEXT STATE
  const [text, setText] = useState("");

  
  //HANDLE TEXTAREA
  const charLimit = 200;
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

  //HANDLE CLEAR
  const clear = () => {
    setText("")
  }

  return (
    <div className="note new">
      <textarea
        autoFocus
        rows="8"
        cols="10"
        placeholder="Add a new note :)"
        value={text}
        onChange={handleChange}
      ></textarea>
      <div className="footer">
        <span>{charLimit - text.length} Remaining</span>
        <span>
          <span className="save" title="Save" onClick={Save}>
            <FontAwesomeIcon icon={faCircleCheck} size="lg" />
          </span>
          <span className="eraser" title="Clear" onClick={clear}>
            <FontAwesomeIcon icon={faEraser} size="lg" />
          </span>
        </span>
      </div>
    </div>
  );
}

export default NewNote