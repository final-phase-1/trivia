'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserTopic = sequelize.define('UserTopic', {
    UserId: DataTypes.INTEGER,
    TopicId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {});
  UserTopic.associate = function(models) {
    // associations can be defined here
  };
  return UserTopic;
};