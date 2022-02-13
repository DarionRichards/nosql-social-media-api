const {Schema, model} = require("mongoose");
const isValidEmail = require("../helpers/validEmail");

const userSchema = {
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		validate: {
			validator: isValidEmail,
			message: "Not a valid Email",
		},
	},
	thoughts: [
		{
			type: Schema.Types.ObjectId,
			ref: "thought",
		},
	],
	friends: [
		{
			type: Schema.Types.ObjectId,
			ref: "user",
		},
	],
};

const schema = new Schema(userSchema);

schema.virtual("friendCount").get(function () {
	return this.friends.length;
});

const User = model("user", schema);

module.exports = User;
