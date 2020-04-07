const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    access_token: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      index: {
        unique: true,
      },
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
