const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  title:   { type: String, required: true, unique: true },
  country: { type: Types.ObjectId, ref: 'Country', default: null }
})

module.exports = model('City', schema)