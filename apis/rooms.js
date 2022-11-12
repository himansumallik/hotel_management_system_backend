const router = require("express").Router();
require("dotenv").config();
const express = require("express");
const dbhandler = require("../databasehandler");
const roomService = require("../databaseServices/room");
const jwt = require("jsonwebtoken");
router.use(express.json());

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

router.post("/signin", async (req, res) => {
  try {
    const data = req.body;
    var id = data.userid;
    var pass = data.password;

    if (!id) {
      throw new Error("UserId required");
    }

    if (!pass) {
      throw new Error("Password required");
    }

    if (id === "galaxy" && pass === "12345") {
      const user = { name: id, password: pass };
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
      res.json({ success: true, accessToken: accessToken });
    } else {
      throw new Error("Invalid Credentials");
    }
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});

router.post("/localSignin/addRoom", async (req, res) => {
  try {
    const addedRoom = await roomService.addRoomsToDb(req.body);
    return res.json({ success: true });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});

module.exports = router;
