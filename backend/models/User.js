const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config();

const sequelize = new Sequelize(process.env.MYSQLDATABASE, process.env.MYSQLUSER, password = process.env.MYSQLPASSWORD, {
    dialect: password = process.env.DIALECT,
    host: password = process.env.HOST,
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
    imageUrl: { type: Sequelize.STRING(255) },
    admin: { type: Sequelize.INTEGER, defaultValue: 0, allowNull: false }
},
{
  timestamps: true, createdAt: 'created', updatedAt: false, underscored: true
})
User.sync().then(() => 
{
    bcrypt.hash(process.env.DB_PASSWORD, 10)
    .then(hash => {
      User.findOrCreate({
        where: {
          email:"admin@groupomania.com"
        },
        defaults:{
          id: 1,
          lastname: "admin",
          firstname: "admin",
          email: process.env.DB_MAIL,
          password: hash,
          imageUrl: "",
          admin: 1
        }    
      })
    })
    .catch(console.log('Erreur')) 
})
exports.User = User

const Post = sequelize.define('post', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.TEXT, allowNull: true },
  imageUrl: { type: DataTypes.STRING(255) },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  liked: { type: DataTypes.INTEGER(255), allowNull: true }
},
{ 
  timestamps: true, underscored: true 
})
exports.Post = Post

const Comment = sequelize.define('comment', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  content: { type: DataTypes.TEXT, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  postId: { type: DataTypes.INTEGER, allowNull: false }    
},
{ timestamps: true, underscored: true })
exports.Comment = Comment

User.hasMany(Post, {foreignKey: 'userId'})

Post.belongsTo(User, {foreignKey: 'userId', as:'author'})

User.hasMany(Comment, {foreignKey: 'userId'})

Comment.belongsTo(User, {foreignKey: 'userId', as:'author'})

sequelize.sync()

