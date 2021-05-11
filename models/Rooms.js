const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  type:    { type: String, required: true, unique: true},
  count:   { type: Number, required: true},
  imgRoom: { type: String, required: true },
  price:   { type: String, required: true },
})

module.exports = model('Rooms', schema)