const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pharma extends Model {}

Pharma.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pharma_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    side_effects: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 25,
      allowNull: false,
      validate: {
        isNumeric: true
      },
      References: {
        model: "category",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pharma',
  }
);

module.exports = Pharma;
