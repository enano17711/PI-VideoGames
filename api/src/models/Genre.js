const {DataTypes} = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    return sequelize.define("Genre", {
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
        }
    }, {
        timestamps: false
    })
}