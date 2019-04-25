'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    name: DataTypes.STRING
  }, {});
  Topic.associate = function(models) {
    // associations can be defined here
    Topic.belongsToMany(models.User,{through:models.UserTopic,foreignKey:"TopicId"})
  };
  return Topic;
};