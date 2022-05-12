const Admin = require('./Admin');
const Appointment = require('./Appointment');
// const Category = require('./Category');
// const Pharma = require('./Pharma');
// const Scheduler = require('./Scheduler');
const User = require('./User');

// Links users with appointment
Appointment.belongsTo(User, {
  foreignKey: 'user_id'
})

User.hasMany(Appointment, {
  foreignKey: 'user_id'
});

// // Links admin with appointments
Appointment.belongsTo(Admin, {
  foreignKey: 'admin_id'
})

Admin.hasMany(Appointment, {
  foreignKey: 'admin_id'
});

Admin.belongsToMany(User, {
  through: {
    model: Appointment,
    unique: false
  },
  foreignKey: 'admin_id'
});

User.belongsToMany(Admin, {
  through: {
    model: Appointment,
    unique: false
  },
  foreignKey: 'admin_id'
});


module.exports = { 
  Admin,
  Appointment,
  // Category,
  // Pharma,
  // Scheduler,
  User};

