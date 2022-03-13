const CustomAPIError = require("../error/custom-error");
const asyncWrapper = require("./async-wrapper");
const validator = asyncWrapper(async (req, res, next) => {
    const { name, age, message } = req.body;
    const parsedAge = Number(age);
    let nameValid = true;
    let messageValid = true;
    let ageValid = true;
    if (name) {
        nameValid = typeof name == "string";
    }
    if (message) {
        messageValid = typeof message === "string";
    }
    if (age) {
        ageValid = !isNaN(parsedAge);
    }

    if (!nameValid || !messageValid || !ageValid) {
        throw new CustomAPIError("invalid property type", 400);
    }
    next();
});

module.exports = validator;
