const db = require('../config/dataBase.js');
const VideoGame = db.models.VideoGame
const Genre = db.models.Genre
const axios = require("axios");


const gamesApiDataById = async (id) => {
    const url = `${process.env.API_GAMES}/${id}?key=${process.env.API_KEY}`

    try {
        const response = await axios.get(url)
        const dataResult = response.data

        return {
            id: dataResult.id,
            name: dataResult.name,
            description: dataResult.description,
            released: dataResult.released,
            rating: dataResult.rating,
            background_image: dataResult.background_image,
            genres: dataResult.genres,
            platforms: dataResult.platforms.map(plat => plat.platform.name)
        }
    } catch (e) {
        throw new Error(e.message)
    }
}
const gamesDbDataById = async (id) => {
    const condition = {
        include: [
            {
                model: Genre,
                as: 'genres',
                attributes: ['id', 'apiId', 'name'],
                through: {
                    attributes: []
                }
            }
        ]
    }
    try {
        const videoById = await VideoGame.findByPk(id, condition)
        return {
            ...videoById,
            platforms: JSON.parse(videoById.platforms)
        }
    } catch (e) {
        throw new Error(e.message)
    }
}
const getAllDataById = async (id) => {
    try {
        let data = {}

        if (id.indexOf("-") === -1) {
            data = await gamesApiDataById(id)
        } else {
            data = await gamesDbDataById(id)
            return {...data.dataValues, platforms: JSON.parse(data.dataValues.platforms)}
        }

        if (data.detail) {
            throw new Error(data.detail)
        }

        return {
            id: data.id,
            apiId: data.apiId,
            name: data.name,
            description: data.description,
            released: data.released,
            rating: data.rating,
            background_image: data.background_image,
            genres: data.genres.map(gen => gen.name),
            platforms: data.platforms
        }
    } catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    gamesDbDataById,
    getAllDataById,
    gamesApiDataById
}