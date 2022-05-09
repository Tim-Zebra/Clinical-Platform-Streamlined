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
        // Dates/time (Should be able to pass in both date and time)
        // https://sebhastian.com/sequelize-date-format/
        },
        appointment_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        // Patient seen
        client_name: {
            type: DataTypes.STRING,
            allowNull: false,
                references: {
                    model: 'User',
                    key: 'id',
                }
        },
        // Provider seen
        provider_name: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Admin',
                key: 'id',
            }
        },
        // Cost of appointment
        cost: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'appointments',
    }
);

module.exports = User;