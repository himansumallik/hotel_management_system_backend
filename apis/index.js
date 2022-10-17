const router = require("express").Router();

const roomsApi = require("./rooms");

router.use("/rooms", roomsApi);

module.exports = router;
