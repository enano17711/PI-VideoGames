const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

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

module.exports = app;