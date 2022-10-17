const router = require("express").Router();

const dbhandler = require("../databasehandler");
const roomService = require("../databaseServices/room");

router.get("/", async (req, res) => {
  try {
    const allRooms = await roomService.fetchAllRooms(req.query);
    return res.send({
      data: allRooms,
    });
  } catch (e) {
    console.log("ERROR: GET_ALL_ROOMS", JSON.stringify(e));
    return res.status(500).send({
      error: true,
      errorMessage: "An unexpected error occurred",
      data: [],
    });
  }
});

module.exports = router;
