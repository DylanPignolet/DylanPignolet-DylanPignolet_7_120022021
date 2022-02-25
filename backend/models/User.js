const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize("groupomania", "root", "33302764Aa8ec78db", {
    dialect: "mysql",
    host: "localhost"
});
try {
    sequelize.authenticate();
    console.log('Connecté à la base de données MySQL!');
  } catch (error) {
    console.error('Impossible de se connecter, erreur suivante :', error);
  }

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    lastname: { type: DataTypes.STRING(100), allowNull: false },
    firstname: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(200), allowNull: false },
},
{
  timestamps: true, createdAt: 'created', updatedAt: false, underscored: true
})


exports.User = User

