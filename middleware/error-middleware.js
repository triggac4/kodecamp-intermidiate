const CustomAPIError = require("../error/custom-error");
async function errorHandler(err, req, res, next) {
    if (err instanceof CustomAPIError) {
        res.status(err.statusCode).send(err.message);
        return;
    }
    res.status(500).send("Something broke!");
}

module.exports = errorHandler;
