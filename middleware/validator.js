const CustomAPIError = require("../error/custom-error");
const asyncWrapper = require("./async-wrapper");
const validator = asyncWrapper(async (req, res, next) => {
    const { name, age, message } = req.body;
    const parsedAge = Number(age);

    if (
        typeof name != "string" ||
        typeof message != "string" ||
        isNaN(parsedAge)
    ) {
        throw new CustomAPIError("invalid property type", 400);
    }
    next();
});

module.exports = validator;
