const sequelize = require('../config/connection');
const { User, Admin } = require('../models');

const userData = require('./userData.json');
const adminData = require('./adminData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const admin = await Admin.bulkCreate(adminData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
