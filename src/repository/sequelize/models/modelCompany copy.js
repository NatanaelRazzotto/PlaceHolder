const { DataTypes } = require('sequelize');
const database = require('../db/db');

const ModelUser = database.define(
    'user',
    {
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = { ModelUser };
