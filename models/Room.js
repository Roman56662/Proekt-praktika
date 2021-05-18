const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  type:        { type: String, required: true },
  roomsHotel:  { type: Number, required: true },
  countPeople: { type: Number, required: true },
  photo:      [{ type: String, required: true }],
  hotel:       { type: Types.ObjectId, ref: 'Hotel', default: null }
})

module.exports = model('Room', schema)