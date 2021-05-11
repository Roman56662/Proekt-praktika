const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  _id: Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
})

module.exports = model('Person', schema)