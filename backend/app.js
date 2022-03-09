const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config();
const { Sequelize } = require('sequelize');
const mysql = require('mysql2/promise');

initialize();

async function initialize() {
  host = process.env.HOST
  port = process.env.MYSQLPORT
  user = process.env.MYSQLUSER
  password = process.env.MYSQLPASSWORD
  database = process.env.MYSQLDATABASE

  const connection = await mysql.createConnection({ host, port, user, password });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

  //Connexion à la base de donnée MySQL
  const sequelize = new Sequelize(process.env.MYSQLDATABASE, process.env.MYSQLUSER, process.env.MYSQLPASSWORD, {
    dialect: process.env.DIALECT,
    host: process.env.HOST
  });
  try {
    sequelize.authenticate();
    console.log('Connecté à la base de données MySQL!');
  } catch (error) {
    console.error('Impossible de se connecter, erreur suivante :', error);
  }



  //Appelle les routes
  const postRoutes = require('./routes/post') 
  const userRoutes = require('./routes/user')


  //Controle d'accès
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });


  app.use(bodyParser.json());


  //Routes
  app.use('/api/auth', postRoutes);
  app.use('/api/auth', userRoutes)
  app.use('/images', express.static(path.join(__dirname, 'images')));

  await sequelize.sync();
}

module.exports = app;