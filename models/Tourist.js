const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  name:           { type: String, required: true },
  fam:            { type: String, required: true },
  email:          { type: String, required: true },
  phone:          { type: String, required: true },
  birth:          { type: Date, required: true },
  ipassport:      { type: String, required: true },
  ipassportDate:  { type: Date, required: true },
  identifier: { 
    {type: String, required: true},
    {type: String, required: true}
    },
  tour:           { type: Types.ObjectId, ref: 'Tour' },
})

module.exports = model('Tourist', schema)