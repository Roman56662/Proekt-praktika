const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  title:   { type: String, required: true, unique: true },
  popular: { type: Boolean, required: true },
  flag:    { type: String, required: true },
  city:    [{ type: Types.ObjectId, ref: 'City', default: null }]
})

module.exports = model('Country', schema)