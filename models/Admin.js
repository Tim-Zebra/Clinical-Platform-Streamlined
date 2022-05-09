const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Admin extends Model {}

Admin.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Doctor, tech-admin, receptionist
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Admin Name
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Dates/time (Should be able to pass in both date and time)
    // https://sebhastian.com/sequelize-date-format/
    appointment_date: {
      type: DataTypes.DATE,
    },
    // Who they saw
    user_name: {
        type: DataTypes.STRING,
    },
    // Cost of appointment
    cost: {
      type: DataTypes.FLOAT,
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