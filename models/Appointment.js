const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Appointment extends Model {}

Appointment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        // Dates/time (Should be able to pass in both date and time)
        // https://sebhastian.com/sequelize-date-format/
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Cost of appointment
        cost: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        // Patient seen
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
                references: {
                    model: 'user',
                    key: 'id',
                }
        },
        // Provider seen
        admin_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'admin',
                key: 'id',
            }
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

module.exports = Appointment;