import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

function App() {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: "testing text one",
			date: "dec 4 2021",
		},
		{
			id: nanoid(),
			text: "testing text two",
			date: "dec 5 2021",
		},
		{
			id: nanoid(),
			text: "testing text three",
			date: "dec 6 2021",
		},
	]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid,
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className="container">
			<NotesList
				notes={notes}
				handleAddNote={addNote}
				handleDeleteNote={deleteNote}
			/>
		</div>
	);
}

export default App;
