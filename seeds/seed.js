const sequelize = require('../config/connection');
const { User, Admin, Appointment, Pharma, Category } = require('../models');

const userData = require('./userData.json');
const adminData = require('./adminData.json');
const appointmentData = require('./appointmentData.json');
const pharmaData = require('./pharmaData.json');
// const pharmaCatData = require('./pharmaCatData.json');

// Organized by most to least dependent on seeds
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const admin = await Admin.bulkCreate(adminData, {
    individualHooks: true,
    returning: true,
  });

  const appointment = await Appointment.bulkCreate(appointmentData, {
    individualHooks: true,
    returning: true,
  });

  const pharma = await Pharma.bulkCreate(pharmaData, {
    individualHooks: true,
    returning: true,
  });

  // const pharmaCat = await PharmaCat.bulkCreate([pharmaCatData], {
  //   individualHooks: true,
  //   returning: true,
  // });


  process.exit(0);
};

seedDatabase();