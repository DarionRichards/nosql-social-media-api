const emailRegex = /([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})/;

const isValidEmail = (email) => {
	return emailRegex.test(email);
};

module.exports = isValidEmail;
