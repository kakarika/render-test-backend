const mongoose = require("mongoose");

if (process.argv.length < 3) {
	console.log("give password as argument");
	process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://pyaesone:pyaesone21@cluster0.y42f8.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
	content: {
		type: String,
		minLength: 5,
		required: true,
	},
	important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

Note.find({}).then((result) => {
	result.forEach((note) => {
		console.log(note);
	});
	mongoose.connection.close();
});
