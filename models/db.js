const Sequelize = require('sequelize')
const db = {}


const sequelize = new Sequelize('nasa', 'root', 'admin', {
host: "localhost",
dialect: 'mysql',
 pool: { max: 5, min: 0, acquire: 30000, idle: 10000 }, timezone: '-03:00' })
 db.sequelize = sequelize
 db.Sequelize = Sequelize
 module.exports = db
