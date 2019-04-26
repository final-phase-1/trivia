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
<<<<<<< HEAD
      beforeCreate:(user)=>{
        bcrypt.hash(user.password, "boleh", function(err, hash) {
          // Store hash in your password DB.
          if(err){
            console.log(err)
          }
          else user.password = hash
          
        });
=======
      afterValidate:(user) => {
        let salt = bcrypt.genSaltSync(9);
        user.password = bcrypt.hashSync(user.password, salt) 
>>>>>>> 66ce95e7ce4db4015cd3b85a2f1ac5806c8e6efb
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Topic,{through:models.UserTopic,foreignKey:"UserId"})
  };
  return User;
};