const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("test", "postgres", process.env.PG_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
});

try {
  sequelize.authenticate();
  console.log("database connected");
} catch (error) {
  throw error;
};

module.exports = sequelize;