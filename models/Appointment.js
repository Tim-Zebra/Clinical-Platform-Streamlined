const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Appointment extends Model {}

Appointment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true,
        // Dates/time (Should be able to pass in both date and time)
        // https://sebhastian.com/sequelize-date-format/
        },
        date: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false,
        },
        // Cost of appointment
        cost: {
            type: DataTypes.DECIMAL(10,2),
            unique: false,
            allowNull: false,
        },
        // // // Patient seen
        user_id: {
            type: DataTypes.INTEGER,
            unique: false,
            allowNull: false,
                references: {
                    model: 'user',
                    key: 'id',
                }
        },
        // // Provider seen
        admin_id: {
            type: DataTypes.INTEGER,
            unique: false,
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
        modelName: 'appointment',
    }
);

module.exports = Appointment;