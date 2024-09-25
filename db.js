const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'telega',
    'root',
    'root',
    {
        host: '176.114.64.188',
        port: '5432',
        dialect: 'postgres'
    }
)