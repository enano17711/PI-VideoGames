const db = require('../config/dataBase.js');
const VideoGame = db.models.VideoGame
const Genre = db.models.Genre
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

        for (const genre in data.genres) {
            const genreOfDataFormatted = await Genre.findByPk(data.genres[genre])
            await videoGame.addGenre(genreOfDataFormatted)
            const testResult = await VideoGame.findByPk(videoGame.id)
        }
    } catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    createVideoGameWithGenres
}