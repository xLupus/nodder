require('dotenv').config();
const Sequelize = require('sequelize');
const env = process.env;

const DB_NAME = env.DATABASE_NAME;
const DB_USER = env.DATABASE_USER;
const DB_PASS = env.DATABASE_PASS;
const DB_PORT = env.DATABASE_PORT;
const DB_HOST = env.DATABASE_HOST;
const DB_DIALECT = env.DATABASE_CONNECTION;

const connection = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT
});

connection.authenticate().then(() => {console.log('Conexão com o banco Estabelecida')})
                         .catch(err => {console.log(err);});
                         
module.exports = connection;