const {saveGenresApiDataToDbData} = require("../utils/getGenresData");
module.exports = {
    getGenres: async (req, res) => {
        try {
            res.send(await saveGenresApiDataToDbData())
        } catch (e) {
            console.log(e.message)
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