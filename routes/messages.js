const router = require("express").Router();
const {
    getAllMessages,
    getMessage,
    createMessage,
    updateMessages,
    deleteMessages,
} = require("../controllers/messages");
const validator = require("../middleware/validator");
router.route("/").get(getAllMessages).post(validator, createMessage);
router
    .route("/:messageId")
    .get(getMessage)
    .patch(updateMessages)
    .delete(deleteMessages);

module.exports = router;
