const { DataTypes } = require('sequelize');
const database = require('../db');

const ModelComment = database.define(
    'comment',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        body: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);
ModelComment.associate = function (models) {
    ModelComment.belongsTo(models.post, { foreignKey: 'postId', as: 'post' });
};

module.exports = { ModelComment };
