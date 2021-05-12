const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  dateArrive: { type: Date, required: true },
  dateDepart: { type: Date, required: true },
  price:      { type: Number, required: true },
  nutrition:  { type: Boolean, required: true },
  fly:        { type: Boolean, required: true },
  transfer:   { type: Boolean, required: true },
  health:     { type: Boolean, required: true },
  hotel:      { type: Types.ObjectId, ref: 'Hotel' },
  country:    { type: Types.ObjectId, ref: 'Country' },
  city:       { type: Types.ObjectId, ref: 'City' }
})

module.exports = model('Tour', schema)