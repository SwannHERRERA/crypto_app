const bcrypt = require('bcrypt')

let password = ''
const saltRounds = 10
bcrypt.genSalt(saltRounds, function (err, salt) {
  bcrypt.hash(req.body.password, salt, function (err, hash) {
    password = hash
  })
})
