const { Schema, model } = require('mongoose')

const schema = new Schema({
  title:   { type: String, required: true, unique: true },
  popular: { type: Boolean, required: true },
  flag:    { type: String, required: true }
})

module.exports = model('Country', schema)