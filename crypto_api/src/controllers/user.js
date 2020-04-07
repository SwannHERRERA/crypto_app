const User = require('../models/user')

exports.listing = async (req, res, next) => {
  const users = await User.find()
  return res.status(200).json({ users: users })
}

exports.insert = async (req, res, next) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  })
  await user.save()
  return res.status(201).json({ user: user })
}
