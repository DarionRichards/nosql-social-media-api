const emailRegex = /([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})/;

const isValidEmail = (email) => {
	return emailRegex.test(email);
};

const test = isValidEmail("thisIsAnEmail@outlook.com");
console.log(test);

module.exports = isValidEmail;
