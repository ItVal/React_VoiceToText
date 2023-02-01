import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>Enregistrer des notes vocales</h1>
      <div>
        <div className="noteContainer">
          <h2>Enregistrez votre note ici</h2>
          <button className="button">Save</button>
          <button>Marche/Arrêt</button>
        </div>
        <div className="noteContainer">
          <h2>Notes Engestrées</h2>
        </div>
      </div>
    </>
  );
}

export default App;
