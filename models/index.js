//import models
const User = require('./User');
const Post = require('./Post');

//association methods for the Sequelize models to create relationships between them
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post };