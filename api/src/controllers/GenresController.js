const {saveGenresApiDataToDbData} = require("../utils/getGenresData");
module.exports = {
    getGenres: async (req, res) => {
        try {
            res.send(await saveGenresApiDataToDbData())
        } catch (e) {
            console.log(e.message)
        }
    }
}