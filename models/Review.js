const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  text:    { type: String, required: true },
  date:    { type: Date, required: true, default: Date.now() },
  rating:  { type: String, required: true },
  name:    { type: String, required: true },
  user:    { type: Types.ObjectId, ref: 'User' },
  hotel:   { type: Types.ObjectId, ref: 'Hotel' },
})

module.exports = model('Review', schema)