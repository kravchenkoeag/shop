const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, // Name DB
    process.env.DB_USER, // User
    process.env.DB_PASSWORD, //Pass
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)