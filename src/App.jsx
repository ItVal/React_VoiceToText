import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const [isRecording, setisRecording] = useState(false);
const [note, setNote] = useState(null);
const [notesStore, setnotesStore] = useState([]);
function App() {
  const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
  const microphone = new SpeechRecognition();

  microphone.continuous = true;
  microphone.interimResults = true;
  microphone.lang = "en-US";

  return (
    <>
      <h1>Voices to Notes</h1>
      <div className="container">
        <div className="noteContainer">
          <h2>Enregistrez votre note ici</h2>
          <button className="button">Save</button>
          <button className="button1">Start/Stop</button>
        </div>
        <div className="noteContainer">
          <h2>Notes Engestrées</h2>
        </div>
      </div>
    </>
  );
}

export default App;
