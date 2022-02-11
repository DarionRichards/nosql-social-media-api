const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);

const init = async () => {
	try {
		await mongoose.connect("mongodb://localhost:27017/socialMediaApiDb", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log("[INFO]: Connection to DB successful");

		app.listen(PORT, () => {
			console.log(`🚀🚀 Server running on http://localhost:${PORT} 🚀🚀`);
		});
	} catch (error) {
		console.log(`[ERROR]: Connection to DB unsuccessful | ${error.message}`);
	}
};

init();
