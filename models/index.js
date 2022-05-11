const Admin = require('./Admin');
const Appointment = require('./Appointment');
// const Category = require('./Category');
// const Pharma = require('./Pharma');
// const Scheduler = require('./Scheduler');
const User = require('./User');

// These are linked by when admin and user interacted, denoted by the Model Appointments
Admin.belongsToMany(User, {
  through: {
    model: Appointment,
    unique: false,
  },
  foreignKey: 'admin_id',
});

User.belongsToMany(Admin, {
  through: {
    model: Appointment,
    unique: false,
  },
  foreignKey: 'user_id',
});

User.belongsToMany(Appointment, {
  foreignKey: 'user_id',
});

Appointment.hasOne(User, {
  foreignKey: 'user_id',
});

module.exports = { 
  Admin,
  Appointment,
  // Category,
  // Pharma,
  // Scheduler,
  User};

