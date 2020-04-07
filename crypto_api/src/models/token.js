const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tokenSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    shortName: {
      type: String,
    },
    linkGraph: {
      type: String,
      required: false,
    },
    marketPair: {
      type: Array,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Token', tokenSchema)
