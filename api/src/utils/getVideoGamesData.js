const db = require('../config/dataBase.js');
const VideoGame = db.models.VideoGame
const Genre = db.models.Genre
const {Op} = require("sequelize")
const axios = require('axios')

const gamesApiData = async (searchString) => {
    const url = searchString !== undefined
        ? `${process.env.API_GAMES}?page=1&page_size=100&search=${searchString}&key=${process.env.API_KEY}`
        : `${process.env.API_GAMES}?page=1&page_size=100&key=${process.env.API_KEY}`

    try {
        const allVideoGames = await axios.get(url)
        return allVideoGames.data.results.map(data => {
            return {
                id: data.id,
                name: data.name,
                released: data.released,
                rating: data.rating,
                background_image: data.background_image,
                genres: data.genres,
                platforms: data.platforms
            }
        })
    } catch (e) {
        throw new Error(e.message)
    }
}
const gamesDbData = async (searchString) => {
    const condition = searchString !== undefined
        ? {
            where: {name: {[Op.iLike]: ` %${searchString} % `}},
            include: [
                {
                    model: Genre,
                    as: 'genres',
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }
            ]
        } : {
            include: [
                {
                    model: Genre,
                    as: 'genres',
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }
            ]
        }
    try {
        const allVideoGames = await VideoGame.findAll(condition)
        return allVideoGames.map(data => {
            return {
                id: data.id,
                apiId: data.apiId,
                name: data.name,
                description: data.description,
                released: data.released,
                rating: data.rating,
                background_image: data.background_image,
                genres: data.genres,
                platforms: JSON.parse(data.platforms)
            }
        })
    } catch (e) {
        throw new Error(e.message)
    }
}
const getAllData = async (searchString) => {
    try {
        const dbData = await gamesDbData(searchString)
        const apiData = await gamesApiData(searchString)

        return [...dbData, ...apiData].map(game => {
            return {
                id: game.id,
                apiId: game.apiId,
                name: game.name,
                description: game.description,
                released: game.released,
                rating: game.rating,
                background_image: game.background_image,
                genres: game.genres.map(g => g.name),
                platforms: game.platforms
            }
        })
    } catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    getAllData,
    gamesApiData,
    gamesDbData
}