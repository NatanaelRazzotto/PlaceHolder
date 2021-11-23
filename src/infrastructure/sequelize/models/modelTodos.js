const { DataTypes } = require('sequelize');
const database = require('../db');

const ModelTodos = database.define(
    'todos',
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
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);
ModelTodos.associate = function (models) {
    ModelTodos.belongsTo(models.user, { foreignKey: 'userId', as: 'user' });
};

module.exports = { ModelTodos };
