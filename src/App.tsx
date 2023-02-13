import React, { useState} from 'react';
import './App.css';
import { NotesList} from "../src/components"

function App() {

  interface Note {
    id:string,
    title:string,
    desc:string,
  }

  const [notes, setNotes]= useState<Note[]>([
    {
      id:(new Date).toString(),
      title:"node 1",
      desc:"meeting at 2pm",
    },
  ]);


  return (
    <div className="App">
     <h1>notes app</h1>
     <NotesList notes={notes} setNotes={setNotes}/>
    </div>
  );
}

export default App;
