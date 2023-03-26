const db = require('../config/dataBase.js');
const VideoGame = db.models.VideoGame
const Genre = db.models.Genre
const {Op} = require("sequelize")
const {randomUUID} = require('crypto')

const createVideoGameWithGenres = async (data) => {
    console.log(`this is data: ${data}`)
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

        console.log(`this is videoGame: ${videoGame}`)
        console.log(`this is genres data: ${data.genres}`)

        for (const genre of data.genres) {
            const genreOfDataFormatted = await Genre.findByPk(genre.id)
            console.log(`this is genreOfDataFormatted: ${genreOfDataFormatted}`)
            await videoGame.addGenre(genreOfDataFormatted)
        }
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = {
    createVideoGameWithGenres
}