const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Scheduler extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Scheduler.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  
    appointment_id: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull:false
    },

    appointment_start: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    appointment_end: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    client_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    client_phone: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    client_symptoms: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'scheduler',
  }
);

module.exports = Scheduler;
