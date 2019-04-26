const bcrypt = require("bcrypt")

var salt = bcrypt.genSaltSync(10);

console.log(salt)