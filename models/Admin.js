const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Admin extends Model {}

Admin.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      primaryKey: true,
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
    // login
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    appt_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'appointment',
        key: 'id',
      },
    }
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