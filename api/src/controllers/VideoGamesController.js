const db = require('../config/dataBase.js');
const VideoGame = db.models.VideoGame
const {Op} = require("sequelize")
const {getAllData} = require("../utils/getVideoGamesData");
const {getAllDataById} = require("../utils/getVideoGameDataById");

module.exports = {
    getVideoGames: async (req, res) => {
        const name = req.query.name

        try {
            const dataResponse = await getAllData(name)
            res.send(dataResponse)
        } catch (e) {
            console.log(e.message)
        }
    },
    getVideoGameById: async (req, res) => {
        const idVideogame = req.params.idVideogame
        try {
            const dataResponse = await getAllDataById(idVideogame)
            res.send(dataResponse)
        } catch (e) {
            console.log(e.message)
        }
    }
}
