const express = require("express");
const router = express.Router();
const controller = require("../controllers/GenresController.js");

router.get("/", controller.getGenres)

module.exports = router