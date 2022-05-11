const Admin = require('./Admin');
const Appointment = require('./Appointment');
// const Category = require('./Category');
// const Pharma = require('./Pharma');
// const Scheduler = require('./Scheduler');
const User = require('./User');

// Links users with appointment
// User.belongsTo(Appointment, {
//   foreignKey: 'user_id',
// })

// Appointment.hasOne(User, {
//   foreignKey: 'user_id',
// });

// // Links admin with appointments
// // Admin.belongsTo(Appointment, {
// //   foreignKey: 'admin_id',
// // })

// Appointment.hasOne(Admin, {
//   foreignKey: 'admin_id',
// });

module.exports = { 
  Admin,
  Appointment,
  // Category,
  // Pharma,
  // Scheduler,
  User};

