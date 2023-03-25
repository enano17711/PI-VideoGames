require("dotenv").config();
const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
)

const db = {
    sequelize,
    Sequelize,
    models: {
        VideoGame: require("./src/models/VideoGame")(sequelize, Sequelize),
        Genre: require("./src/models/Genre")(sequelize, Sequelize),
    }
}

db.models.VideoGame.belongsToMany(db.models.Genre, {
    through: "VideoGame_Genre",
    as: "genres",
    foreignKey: "videoGameId"
});
db.models.Genre.belongsToMany(db.models.VideoGame, {
    through: "VideoGame_Genre",
    as: "videoGames",
    foreignKey: "genreId"
})

module.exports = db