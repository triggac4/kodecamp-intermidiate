// const router = require("express").Router();
// router.route("/").get();
// router.route("/:messageId").get().post().patch().delete();
const messageDb = require("../database.json");

const { response } = require("express");
const asyncWrapper = require("../middleware/async-wrapper");
const CustomAPIError = require("../error/custom-error");

const getAllMessages = asyncWrapper(async function (req, res, next) {
    res.json({ messages: messageDb });
});
const createMessage = asyncWrapper(async function (req, res, next) {
    const { name, age, message } = req.body;

    const createDate = Date.now();
    const id = createDate.toString();
    const resData = {
        id,
        name,
        age,
        message,
        createDate,
    };
    messageDb.push(resData);
    res.json({ status: "success", ...resData });
});

const getMessage = asyncWrapper(async function (req, res, next) {
    const { messageId } = req.params;
    const index = messageDb.findIndex((e) => {
        return e.id === messageId;
    });
    if (index >= 0) {
        res.json({ status: "success", ...messageDb[index] });
        return;
    }
    throw new CustomAPIError("message not found", 404);
});
const deleteMessages = asyncWrapper(async function (req, res, next) {
    const { messageId } = req.params;
    const index = messageDb.findIndex((e) => {
        return e.id === messageId;
    });
    if (index >= 0) {
        messageDb.splice(index, 1);
        res.json({ status: "success" });
        return;
    }
    throw new CustomAPIError("message not found", 404);
});
const updateMessages = asyncWrapper(async function (req, res, next) {
    const { name, age, message } = req.body;
    const { messageId } = req.params;
    const index = messageDb.findIndex((e) => {
        return e.id === messageId;
    });
    if (index >= 0) {
        const update = { name, age, message };
        messageDb[index] = { ...messageDb[index], name, age, message };
        res.json({ status: "success", data: messageDb[index] });
        return;
    }
    throw new CustomAPIError("message not found", 404);
});

module.exports = {
    getAllMessages,
    getMessage,
    createMessage,
    deleteMessages,
    updateMessages,
};
