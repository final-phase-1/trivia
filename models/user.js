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
          return Teacher.findOne({
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
          return Teacher.findOne({
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
      beforeCreate:(user)=>{
        bcrypt.hash(user.password, "boleh", function(err, hash) {
          // Store hash in your password DB.
          if(err){
            console.log(err)
          }
          else user.password = hash
        });
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Topic,{through:models.UserTopic,foreignKey:"UserId"})
  };
  return User;
};