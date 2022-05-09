const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // User Name
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
            allowNull: false,
        },
        // Who was seen
        provider_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Cost of appointment
        cost: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },

    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;