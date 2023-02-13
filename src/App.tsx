import React, { useState } from "react";
import "./App.css";
import { NotesList, CreateNote } from "../src/components";

function App() {
	interface Note {
		id: string;
		title: string;
		desc: string;
		color:string
	}

	const [notes, setNotes] = useState<Note[]>([
		{
			id: new Date().toString(),
			title: "node 1",
			desc: "meeting at 2pm",
			color:"#63BFA1"
		},
	]);

	return (
		<div className="App">
			<h1>notes app</h1>
			<CreateNote notes={notes} setNotes={setNotes}/>
			<NotesList notes={notes} setNotes={setNotes} />
		</div>
	);
}

export default App;
