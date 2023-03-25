const app = require('./src/app.js');
const db = require("./dataBase.js");

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