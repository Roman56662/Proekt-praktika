const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  name:    { type: String, required: true, unique: true },
  email:   { type: String, required: true },
  review:  { type: Types.ObjectId, ref: 'Review' },
})

module.exports = model('User', schema)