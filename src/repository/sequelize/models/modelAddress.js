const { DataTypes } = require('sequelize');
const database = require('../db/db');

const ModelAddress = database.define(
    'address',
    {
        addressId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        street: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        suite: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        zipcode: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        lat: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        lng: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },

    },
    {
        freezeTableName: true,
    }
);
ModelAddress.associate = function (models) {
    ModelAddress.hasOne(models.user);
};


module.exports = { ModelAddress };
