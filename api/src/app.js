const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const videoGamesRoutes = require("./routes/VideoGamesRoute.js");

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));

// simple route
app.get("/", (req, res) => {
    res.json({message: "Welcome to VideoGames application."});
});

app.use("/videogames", videoGamesRoutes);

module.exports = app;