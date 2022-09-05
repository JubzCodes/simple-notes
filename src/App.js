import './App.css';
import NoteList from './components/NoteList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTimes, faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from 'react'

function App() {
  //NOTES STATE
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Making your hapiness independent from what happens in your personal relationships or career will secure a safety net for your emotional well being",
      date: "Jan 12, 2022",
    },
    {
      id: 2,
      text: "Do hard work as long as it's not motivated by ambition for ambition's sake",
      date: "Feb 19, 2022",
    },
    {
      id: 3,
      text: "Subject your ideas to examination rather than acting on impules",
      date: "Mar 8, 2022",
    },
    {
      id: 4,
      text: "Would you rather live a life of blissful ignorance of the world around you, or be enlightened to the true nature of the world but rejected by the rest of society",
      date: "Apr 11, 2022",
    },
  ]);

  const [search, setSearch] = useState("");

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

    if (text.trim().length > 0) {
      let num = notes.length + 1;
      setNotes([
        ...notes,
        { id: num, text: text, date: dateGetter(new Date())},
      ]);
    }
    else {
      alert("No Blank Notes !")
    }
  };

    const editNote = (text,e) => {
      console.log(text)
      if (text.text.trim().length > 0) {
        let edited = [...notes].filter(note => note.id !== text.id)
        let updated = [
          ...edited,
          { id: text.id, text: text.text, date: dateGetter(new Date()) },
        ];
        setNotes(updated);
        console.log(notes)
      } else {
        alert("No Blank Notes !");
      }
    };

    const deleteNote = (id) => {
      setNotes(notes.filter((note) => note.id !== id));
    }
    
  
    useEffect(() => {
      const savedNotes = JSON.parse(localStorage.getItem('user-notes'));
      if (savedNotes) {
        setNotes(savedNotes);
      }
    },[])
    
    useEffect(() => {
      localStorage.setItem('user-notes', JSON.stringify(notes));
    },[notes])

  return (
    <div className="App">
      <h1>Simple Notes <FontAwesomeIcon className='sticky' icon={faNoteSticky} /></h1>
      <div className="search-bar">
        <span className="search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input type="text" placeholder="Search for Note..." value={search} onChange={(e)=>setSearch(e.target.value)} />
        <span className='clear' title='Clear' onClick={() => setSearch("")}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </div>
      <NoteList notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()))} handleSave={addNote} handleEdit={editNote} handleDelete={deleteNote}/>
    </div>
  );
}

export default App;
