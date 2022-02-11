const mongoose = require("mongoose");

const {User, Thought} = require("../models");

const usersSeed = require("./data/users");
const thoughtsSeed = require("./data/thoughts");

const init = async () => {
	try {
		await mongoose.connect("mongodb://localhost:27017/socialMediaApiDb", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log("[INFO]: Connection to DB successful");

		await Thought.deleteMany({});
		await Thought.insertMany(thoughtsSeed);

		console.log("[INFO]: Successfully seeded thoughts");

		const thoughtFromDb = await Thought.find({});
		thoughtFromDb.forEach((thought) => {
			const thoughtUsername = thought.username;

			const thoughtId = thought._id.toString();

			const user = usersSeed.find((user) => user.username === thoughtUsername);

			user.thoughts = [...user.thoughts, thoughtId];
		});

		await User.deleteMany({});
		await User.insertMany(usersSeed);
		const usersFromDb = await User.find({});

		console.log("[INFO]: Successfully seeded users");

		const userIdsArray = usersFromDb.map((user) => user._id.toString());

		const friendPromise = usersFromDb.map(async (user) => {
			const shuffledUserIds = userIdsArray.sort(() => 0.5 - Math.random());

			const slicedArray = shuffledUserIds.slice(
				Math.floor(Math.random() * shuffledUserIds.length)
			);

			const friends = slicedArray.filter((userId) => userId !== user._id);

			await User.findByIdAndUpdate(user._id, {friends});
		});

		await Promise.all(friendPromise);

		console.log("[INFO]: Successfully seeded friends");

		await mongoose.disconnect();
	} catch (error) {
		console.log(`[ERROR]: Connection to DB unsuccessful | ${error.message}`);
	}
};

init();
