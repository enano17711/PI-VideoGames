const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const videoGamesRoutes = require("./routes/VideoGamesRoute.js");
const genresRoutes = require("./routes/GenresRoute.js");

const app = express();

app.use(cors());
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended: true, limit: "50mb"}));
app.use(morgan("dev"));

// simple route
app.get("/", (req, res) => {
    res.json({message: "Welcome to VideoGames application."});
});

app.use("/videogames", videoGamesRoutes);
app.use("/genres", genresRoutes);

module.exports = app;