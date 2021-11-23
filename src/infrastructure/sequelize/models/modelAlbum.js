const { DataTypes } = require('sequelize');
const database = require('../db');

const ModelAlbum = database.define(
    'album',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);
ModelAlbum.associate = function (models) {
    ModelAlbum.belongsTo(models.user, { foreignKey: 'userId', as: 'user' });
    ModelAlbum.hasMany(models.photo);
};

module.exports = { ModelAlbum };
