import React from "react";
import { Card } from "../Card/Card";
import "./NotesList.css";

interface Note {
	id: string;
	title: string;
	desc: string;
	color: string;
}

interface NotesProps {
	notes: Note[];
	setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList: React.FunctionComponent<NotesProps> = ({
	notes,
	setNotes,
}) => {
	const handleDelete = (id: string) => {
		console.log(id);
		setNotes(notes.filter((note) => note.id !== id));
	};

	return (
		<div className="card-container">
    
			{notes.length ? notes.map((note) => (
				<>
					<Card key={note.id} note={note} handleDelete={handleDelete} />
				</>
			)) : <p className="empty-notes">You dont any notes, Try creating new notes</p>}
		</div>
	);
};

export { NotesList };
