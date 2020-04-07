const Token = require('../models/token')

exports.listing = async (req, res, next) => {
  const tokens = await Token.find()
  return res.status(200).json({ users: tokens })
}

exports.insert = async (req, res, next) => {
  const token = new Token({
    name: req.body.name,
    shortName: req.body.shortName,
    linkGraph: req.body.linkGraph,
    marketPair: req.body.marketPair,
  })
  await token.save()
  return res.status(201).json({ token: token })
}
