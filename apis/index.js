const router = require("express").Router();
const multer = require("multer");
const fs = require("fs");

const roomsApi = require("./rooms");
const roomService = require("../databaseServices/room");

router.use("/rooms", roomsApi);

router.use(
  "/rooms/localSignin/addRoom",
  multer({ dest: "uploads" }).single("file"),
  async (req, res) => {
    try {
      const { path, originalname } = req.file;
      const readStream = fs.createReadStream(path);

      const fileStream = fs.createWriteStream(`assets/images/${originalname}`);
      readStream.pipe(fileStream);

      readStream.on("end", async () => {
        const addedRoom = await roomService.addRoomsToDb(req.body);
        return res.json({ success: true, addedRoom });
      });
    } catch (error) {
      return res.send({ success: false, message: error.message });
    }
  }
);

module.exports = router;
