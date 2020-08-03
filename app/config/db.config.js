const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

//Models/tables
db.quotes = require('../model/quote.model.js')(sequelize, Sequelize)

module.exports = db
