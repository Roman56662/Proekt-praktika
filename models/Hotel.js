const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  title:    { type: String, required: true, unique: true },
  about:    { type: String, required: true },
  stars:    { type: Number, required: true },
  photo:    { type: String, required: true },
  bar:      { type: Boolean, required: true },
  parking:  { type: Boolean, required: true },
  wifi:     { type: Boolean, required: true },
  geopos:   { type: String, required: true },
  room:    [{ type: Types.ObjectId, ref: 'Room' }],
  review:  [{ type: Types.ObjectId, ref: 'Review' }],
  city:     { type: Types.ObjectId, ref: 'City' },
  country:  { type: Types.ObjectId, ref: 'Country' }
})

module.exports = model('Hotel', schema)