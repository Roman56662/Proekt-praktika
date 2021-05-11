const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  author: { type: Types.ObjectId, ref: 'Person' },
  title: String,
  fans: [{ type: Types.ObjectId, ref: 'Person' }]

})

module.exports = model('Story', schema)