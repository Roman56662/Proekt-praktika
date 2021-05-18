const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  title:    { type: String, required: true, unique: true },
  stars:    { type: Number, required: true },
  photo:    { type: String, required: true },
  bar:      { type: Boolean, required: true },
  parking:  { type: Boolean, required: true },
  wifi:     { type: Boolean, required: true },
  geopos:   { type: String, required: true },
  room:    [{ type: Types.ObjectId, ref: 'Room' }],
  review:  [{ type: Types.ObjectId, ref: 'Review' }],
  city:     { type: Types.ObjectId, ref: 'City' }
})

module.exports = model('Hotel', schema)