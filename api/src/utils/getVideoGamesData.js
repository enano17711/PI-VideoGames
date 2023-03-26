const db = require('../config/dataBase.js');
const VideoGame = db.models.VideoGame
const Genre = db.models.Genre
const {Op} = require("sequelize")


const gamesApiData = async (searchString) => {
    const url = searchString !== undefined
        ? `${process.env.API_GAMES}?page=1&page_size=100&search=${searchString}&key=${process.env.API_KEY}`
        : `${process.env.API_GAMES}?page=1&page_size=100&key=${process.env.API_KEY}`
    console.log(`esto es url: ${url}`)

    try {
        const response = await fetch(url)
        const data = await response.json()
        return data.results
    } catch (e) {
        console.log(e.message)
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
        return await VideoGame.findAll(condition)
    } catch (e) {
        console.log(e.message)
    }
}
const getAllData = async (searchString) => {
    try {
        const dbData = await gamesDbData(searchString)
        const apiData = await gamesApiData(searchString)

        console.log(`dbData: ${dbData}`)
        console.log(`apiData: ${apiData}`)

        Object.keys(apiData[0]).forEach(key => {
            console.log(`key de apiData: ${key}`)
        })

        return [...dbData, ...apiData].map(game => {
            return {
                name: game.name,
                image: game.background_image,
                genres: game.genres.map(g => g.name)
            }
        })
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = {
    getAllData,
    gamesApiData,
    gamesDbData
}