'use strict';
const bcrypt = require("bcrypt")

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Validation error: email format is incorrect"
        },
        isUnique(value) {
          return User.findOne({
            where : {
              name: value
            }
          })
          .then(row=>{
            if(row){
              throw new Error('Email sudah digunakan')
            } 
          })
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        isUnique(value) {
          return User.findOne({
            where : {
              name: value
            }
          })
          .then(row=>{
            if(row){
              throw new Error('Email sudah digunakan')
            } 
          })
        }
      }
    }
  }, {
    hooks: {
      afterValidate:(user) => {
        let salt = bcrypt.genSaltSync(9);
        user.password = bcrypt.hashSync(user.password, salt) 
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Topic,{through:models.UserTopic,foreignKey:"UserId"})
  };
  return User;
};