const { DataTypes } = require('sequelize');
const database = require('../db');

const ModelPhoto = database.define(
    'photo',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        albumId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'album',
                key: 'id'
            }
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        thumbnailUrl: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);
ModelPhoto.associate = function (models) {
    ModelPhoto.belongsTo(models.album, { foreignKey: 'albumId', as: 'album' });
};

module.exports = { ModelPhoto };
