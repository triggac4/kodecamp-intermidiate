// const router = require("express").Router();
// router.route("/").get();
// router.route("/:messageId").get().post().patch().delete();
const { response } = require("express");
const asyncWrapper = require("../middleware/async-wrapper");

const getAllMessages = asyncWrapper(async function (req, res, next) {
    res.send("get all messages");
});
const getMessage = asyncWrapper(async function (req, res, next) {
    res.send("get message");
});
const createMessage = asyncWrapper(async function (req, res, next) {
    res.send("create message");
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
