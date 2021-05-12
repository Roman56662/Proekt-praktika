const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  title:   { type: String, required: true, unique: true },
  country: { type: Types.ObjectId, ref: 'Country' }
})

module.exports = model('City', schema)