const { DataTypes } = require('sequelize');
const database = require('../db/db');

const ModelCompany = database.define(
    'company',
    {
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        catchPhrase: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        bs: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);

ModelCompany.associate = function (models) {
    ModelCompany.hasMany(models.user);
};

module.exports = { ModelCompany };
