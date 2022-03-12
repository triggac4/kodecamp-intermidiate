// const router = require("express").Router();
// router.route("/").get();
// router.route("/:messageId").get().post().patch().delete();
const messageDb = require("../database.json");

const { response } = require("express");
const asyncWrapper = require("../middleware/async-wrapper");

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
    res.json(resData);
});

const getMessage = asyncWrapper(async function (req, res, next) {
    console.log(req.params);
    res.send(req.params);
});
const deleteMessages = asyncWrapper(async function (req, res, next) {
    res.send("delete messages");
});
const updateMessages = asyncWrapper(async function (req, res, next) {
    res.send("update messages");
});

module.exports = {
    getAllMessages,
    getMessage,
    createMessage,
    deleteMessages,
    updateMessages,
};
