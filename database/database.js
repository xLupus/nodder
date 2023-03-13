require('dotenv/config');
const ENV = process.env;
const Sequelize = require('sequelize');

const DB_NAME = ENV.DATABASE_NAME;
const DB_USER = ENV.DATABASE_USER;
const DB_PASS = ENV.DATABASE_PASS;
const DB_PORT = ENV.DATABASE_PORT;
const DB_HOST = ENV.DATABASE_HOST;
const DB_DIALECT = ENV.DATABASE_CONNECTION;

const connection = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT
});

connection.authenticate().then(() => {console.log('Conexão com o banco Estabelecida')})
                         .catch(err => {console.log(err);});
                         
module.exports = connection;