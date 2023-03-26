const express = require("express");
const router = express.Router();
const controller = require("../controllers/VideoGamesController");

router.get("/", controller.getVideoGames)
router.get("/:idVideogame", controller.getVideoGameById)
router.post("/", controller.postVideoGames)

module.exports = router