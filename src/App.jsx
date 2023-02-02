import { useState, useEffect } from "react";
import "./App.css";

const [isRecording, setisRecording] = useState(false);
const [note, setNote] = useState(null);
const [notesStore, setnotesStore] = useState([]);
function App() {
  //initialisation micro
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const microphone = new SpeechRecognition();

  microphone.continuous = true;
  microphone.interimResults = true;
  microphone.lang = "en-US";

  //écouter le son et le convertir en texte
  const startRecordController = () => {
    if(isRecording){
      microphone.start();
      microphone.onend = () => {
        console.log("continué...");
        microphone.start();
      };
    }else{
      microphone.stop();
      microphone.onend = () => {
        console.log("Arrêt du micro sur Click");
      };
    }
    microphone.onstart = () => {
      console.log("microphones on");
    };
  
    microphone.onresult = (event) => {
      const recordingResult = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(recordingResult);
      setNote(recordingResult);
      microphone.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  //appel de la fonction à chaque fois que le composant est monté
  useEffect(() =>{
    startRecordController();
  }, [isRecording])

  //stocker les notes vocales
  const storeNote = () => {
    setnotesStore([...notesStore, note]);
    setNote("");
  };

  return (
    <>
      <h1>Voices to Notes</h1>
      <div className="container">
        <div className="noteContainer">
          <h2>Enregistrez votre note ici</h2>
          {isRecording ? <span>Recording... </span> : <span>Stopped </span>}
          <button className="button" onClick={storeNote} disabled={!note}>
            Save
          </button>
          <button
            className="button1"
            onClick={() => setisRecording((prevState) => !prevState)}
          >
            Start/Stop
          </button>
          <p>{note}</p>
        </div>
        <div className="noteContainer">
          <h2>Notes Engestrées</h2>
        </div>
      </div>
    </>
  );
}

export default App;
