const app = require('./src/app.js');
const db = require("./src/config/dataBase.js");
const axios = require("axios");

// const testUrl = async () => {
//     const response = await axios.get(`https://api.rawg.io/api/games?page=1&page_size=100&key=${process.env.API_KEY}`);
//     console.log(response.data);
//     console.log(`this is the response: ${response.data}`);
// }
// testUrl().then(data => {
//     console.log(data);
// })

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})
db.sequelize.sync({force: true}).then(() => {
    console.log("Drop and re-sync db.");
    console.log("Database synced!");
}).catch(err => {
    console.log("Failed to sync Database :" + err.message);
})