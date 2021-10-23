// https://sequelize.org/master/class/lib/model.js~Model.html
// https://sequelize.org/master/manual/raw-queries.html
// https://sequelize.org/master/variable/index.html#static-variable-QueryTypes

const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  logging: false,
});

/*sequelize.sync({ alter: true })
  .then(() => {
    console.log(`Database sync & tables created and update!`)
  })*/

module.exports = sequelize;

// logging: NODE_ENV === "production" ? false : console.log,
//  logging: false,
