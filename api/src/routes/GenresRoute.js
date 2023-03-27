const express = require("express");
const router = express.Router();
const controller = require("../controllers/GenresController.js");

router.get("/", controller.getGenres)
router.get("/charge", controller.getGenresForDataBase)

module.exports = router