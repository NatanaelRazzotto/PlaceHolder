const { DataTypes } = require('sequelize');
const database = require('../db');

const ModelPost = database.define(
    'post',
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
        body: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);
ModelPost.associate = function (models) {
    ModelPost.belongsTo(models.user, { foreignKey: 'userId', as: 'user' });
    ModelPost.hasMany(models.comment);
};

module.exports = { ModelPost };
