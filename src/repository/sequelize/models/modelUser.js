const { DataTypes } = require('sequelize');
const database = require('../db/db');

const ModelUser = database.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'address',
        key: 'addressId'
      }
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'company',
        key: 'companyId'
      }
    },
  },
  {
    freezeTableName: true,
  }
);

ModelUser.associate = function (models) {
  ModelUser.belongsTo(models.company, { foreignKey: 'companyId', as: 'company' });
  ModelUser.belongsTo(models.address, { foreignKey: 'addressId', as: 'address' });
};

module.exports = { ModelUser };
