const db = require('../config/dataBase.js');
const VideoGame = db.models.VideoGame
const Genre = db.models.Genre
const {Op} = require("sequelize")
const {randomUUID} = require('crypto')

const getGenresApiData = async () => {
    const url = `https://api.rawg.io/api/genres?key=${process.env.API_KEY}`
    console.log(`esto es url: ${url}`)
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data.results.map(item => {
            return {
                id: randomUUID(),
                apiId: item.id,
                name: item.name
            }
        })
    } catch (e) {
        console.log(e.message)
    }
}


const saveGenresApiDataToDbData = async () => {
    const genresApiData = await getGenresApiData()
    try {
        await Genre.bulkCreate(genresApiData, {
            fields: ['id', 'apiId', 'name'],
        })
        return await Genre.findAll()
    } catch (e) {
        console.log(e.message)
    }
}

const genresAllData = async () => {
    try {
        return await Genre.findAll()
    } catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    getGenresApiData,
    genresAllData,
    saveGenresApiDataToDbData
}