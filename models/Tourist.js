const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  name:           { type: String, required: true },
  mail:           { type: String, required: true },
  phone:          { type: String, required: true },
  birth:          { type: Date, required: true },
  ipassport:      { type: Number, required: true },
  ipassportDate:  { type: Date, required: true },
  depart:         { type: String, required: true },
  arrive:         { type: String, required: true },
  identifier:     { type: String, required: true },
  hotel:          { type: Types.ObjectId, ref: 'Hotel' },
})

module.exports = model('Tourist', schema)