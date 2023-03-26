const db = require('../config/dataBase.js');
const VideoGame = db.models.VideoGame
const Genre = db.models.Genre
const {Op} = require("sequelize")
const {randomUUID} = require('crypto')

const createVideoGameWithGenres = async (data) => {
    try {
        const videoGameDataFormatted = {
            id: randomUUID(),
            apiId: null,
            name: data.name,
            description: data.description,
            platforms: JSON.stringify(data.platforms),
            background_image: data.background_image,
            released: data.released,
            rating: data.rating
        }

        const videoGame = await VideoGame.create(videoGameDataFormatted)
        await videoGame.addGenres(data.genres)
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = {
    createVideoGameWithGenres
}