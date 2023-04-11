const {saveGenresApiDataToDbData, genresAllData} = require("../utils/getGenresData");
module.exports = {
    getGenres: async (req, res) => {
        try {
            res.status(200).send(await genresAllData())
        } catch (e) {
            res.status(404).send(e.message)
        }
    },
    getGenresForDataBase: async (req, res) => {
        try {
            await saveGenresApiDataToDbData()
            res.send("Genres data saved to database")
        } catch (e) {
            console.log(e.message)
        }
    }
}