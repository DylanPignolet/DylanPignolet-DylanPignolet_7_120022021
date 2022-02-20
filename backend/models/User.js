const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize("groupomania", "root", "33302764Aa8ec78db", {
    dialect: "mysql",
    host: "localhost"
});

const userModel = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    lastname: { type: DataTypes.STRING(100), allowNull: false },
    firstname: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(200), allowNull: false },
    imageUrl: { type: DataTypes.STRING },
})

exports.userModel = userModel

