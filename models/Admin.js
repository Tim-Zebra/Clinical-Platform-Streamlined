const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Admin extends Model {}

Admin.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    // Doctor, tech-admin, receptionist
    title: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    // Admin Name
    name: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    // login
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'admin',
  }
);

module.exports = Admin;