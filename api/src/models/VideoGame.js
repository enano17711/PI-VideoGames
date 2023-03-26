const {DataTypes} = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    return sequelize.define("VideoGame", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        apiId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        platforms: {
            type: DataTypes.STRING,
            allowNull: true
        },
        background_image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        released: {
            type: DataTypes.STRING,
            allowNull: true
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },{
        timestamps: false
    })
}