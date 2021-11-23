const { DataTypes } = require('sequelize');
const database = require('../db');

const ModelUser = database.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
  ModelUser.hasMany(models.post);
  ModelUser.hasMany(models.album);
  ModelUser.hasMany(models.todos);
};

module.exports = { ModelUser };
