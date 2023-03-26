const db = require('../config/dataBase.js');
const VideoGame = db.models.VideoGame
const Genre = db.models.Genre
const {Op} = require("sequelize")


const gamesApiDataById = async (id) => {
    const url = `${process.env.API_GAMES}/${id}?key=${process.env.API_KEY}`
    console.log(`esto es url: ${url}`)

    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (e) {
        console.log(e.message)
    }
}
const gamesDbDataById = async (id) => {
    const condition = {
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
        return await VideoGame.findByPk(id, condition)
    } catch (e) {
        console.log(e.message)
    }
}
const getAllDataById = async (id) => {
    console.log(`this is id: ${id}`)
    console.log(typeof id)
    try {
        let data = {}

        if (typeof Number(id) === 'number')
            data = await gamesApiDataById(id)
        else
            data = await gamesDbDataById(id)

        if (data.detail)
            throw new Error(data.detail)

        return data
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = {
    gamesDbDataById,
    getAllDataById,
    gamesApiDataById
}