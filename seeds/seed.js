const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const seedUser = require('./seedUser.json');
const seedBlog = require('./seedBlog.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(seedUser, {
    individualHooks: true,
    returning: true,
  });

  await Blog.bulkCreate(seedBlog, {});

  process.exit(0);
};

seedDatabase();
