const router = require("express").Router();
const {
    getAllMessages,
    getMessage,
    createMessage,
    updateMessages,
    deleteMessages,
} = require("../controllers/messages");

router.route("/").get(getAllMessages);
router
    .route("/:messageId")
    .get(getMessage)
    .post(createMessage)
    .patch(updateMessages)
    .delete(deleteMessages);

module.exports = router;
