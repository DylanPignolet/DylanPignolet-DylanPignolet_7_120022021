const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize("groupomania", "root", "33302764Aa8ec78db", {
    dialect: "mysql",
    host: "localhost"
});

const postModel = sequelize.define('post', {
    userId: { type: DataTypes.INTEGER, allowNull: false },
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    title: {type: DataTypes.STRING, allowNull: false },
    text: { type: DataTypes.STRING, allowNull: false },
    comments: { type: DataTypes.ARRAY, defaultValue: [] },
    likes: { type: DataTypes.INTEGER, defaultValue: 0 },
    dislikes: { type: DataTypes.INTEGER, defaultValue: 0 },
    usersliked: { type: DataTypes.ARRAY, defaultValue: [] },
    usersdisliked: { type: DataTypes.ARRAY, defaultValue: [] }, 
})

exports.postModel = postModel