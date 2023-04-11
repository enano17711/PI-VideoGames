const db = require('../config/dataBase.js');
const VideoGame = db.models.VideoGame
const {Op} = require("sequelize")
const {getAllData} = require("../utils/getVideoGamesData");
const {getAllDataById} = require("../utils/getVideoGameDataById");
const {createVideoGameWithGenres} = require("../utils/postVideoGames");

module.exports = {
    getVideoGames: async (req, res) => {
        const name = req.query.name

        try {
            const dataResponse = await getAllData(name)
            res.status(200).send(dataResponse)
        } catch (e) {
            res.status(404).send(e.message)
        }
    },
    getVideoGameById: async (req, res) => {
        const idVideogame = req.params.idVideogame
        try {
            const dataResponse = await getAllDataById(idVideogame)
            res.status(200).send(dataResponse)
        } catch (e) {
            res.status(404).send(e.message)
        }
    },
    postVideoGames: async (req, res) => {
        const data = req.body

        try {
            res.status(201).send(await createVideoGameWithGenres(data))
        } catch (e) {
            res.status(403).send(e.message)
        }
    }
}
