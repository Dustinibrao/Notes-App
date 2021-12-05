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
	return (
		<div className="container">
			<NotesList notes={notes} />
		</div>
	);
}

export default App;
