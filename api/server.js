const app = require('./src/app.js');
const db = require("./src/config/dataBase.js");

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})
db.sequelize.sync().then(() => {
    console.log("Database synced!");
}).catch(err => {
    console.log("Failed to sync Database :" + err.message);
})