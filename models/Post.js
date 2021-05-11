const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  title: String,
  postedBy: { type: Types.ObjectId, ref: 'User'},
  comments: [{text: String, postedBy: {
              type: Types.ObjectId, ref: 'User'
            }
          }]
})

module.exports = model('Post', schema)