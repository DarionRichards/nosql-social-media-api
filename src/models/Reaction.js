const {Schema} = require("mongoose");

const moment = require("moment");

const reactionSchema = {
	reactionId: {
		type: Schema.Types.ObjectId,
		auto: true,
	},
	reactionBody: {
		type: String,
		required: true,
		maxLength: 280,
	},
	username: {
		type: String,
		required: true,
		ref: "user",
	},

	createdAt: {
		type: Date,
		default: moment(),
	},
};

const schema = new Schema(reactionSchema);

module.exports = schema;
