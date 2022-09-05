import './App.css';
import NoteList from './components/NoteList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <h1>Simple Notes</h1>
      <div className='search-bar'>
        <span className='search-icon'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      <input type="text" placeholder='Search for Note...'/>
      <span>
        <FontAwesomeIcon icon={faTimes}/>
      </span>
      </div>
      <NoteList/>
    </div>
  );
}

export default App;
