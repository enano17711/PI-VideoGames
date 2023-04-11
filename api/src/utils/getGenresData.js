const db = require('../config/dataBase.js');
const Genre = db.models.Genre
const {randomUUID} = require('crypto')
const axios = require("axios");

const getGenresApiData = async () => {
    const url = `https://api.rawg.io/api/genres?key=${process.env.API_KEY}`
    try {
        const data = await axios.get(url)
        return data.data.map(item => {
            return {
                id: randomUUID(),
                apiId: item.id,
                name: item.name
            }
        })
    } catch (e) {
        throw new Error(e.message)
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
        throw new Error(e.message)
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