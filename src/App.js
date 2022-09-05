import './App.css';
import NoteList from './components/NoteList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react'

function App() {
  //NOTES STATE
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Making your hapiness independent from what happens in your personal relationships or career will secure a safety net for your emotional well being",
      date: "jan 12, 2022",
    },
    {
      id: 2,
      text: "Do work as long as its not motivated by ambition for ambition's sake",
      date: "feb 19, 2022",
    },
    {
      id: 3,
      text: "Subject your ideas to examination rather than acting on impules",
      date: "mar 8, 2022",
    },
    {
      id: 4,
      text: "Would you rather be a happy simpleton and live a life of blissful ignorance of the world around you, or be a miserable intellectual who is enlightened to the true nature of the world but rejected by the rest of society",
      date: "apr 11, 2022",
    },
  ]);

  //DATE FUNCTION
  const dateGetter = (num) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

    // using number from newdate function call to display specific date from day & month arrays
    const day = days[num.getDay()];
    const date = num.getDate();
    const month = months[num.getMonth()];
    const year = num.getFullYear();

    return `${day}, ${month} ${date}, ${year}`;
  };

  const addNote = (text) => {
    if (text) {
      let num = notes.length + 1;
      setNotes([
        ...notes,
        { id: num, text: text, date: dateGetter(new Date()) },
      ]);
    }
  };

  return (
    <div className="App">
      <h1>Simple Notes</h1>
      <div className="search-bar">
        <span className="search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input type="text" placeholder="Search for Note..." />
        <span>
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </div>
      <NoteList notes={notes} handleSave={addNote} />
    </div>
  );
}

export default App;
