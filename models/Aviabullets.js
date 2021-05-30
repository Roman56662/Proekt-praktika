const { Schema, model } = require('mongoose')

const schema = new Schema({
  cityO: {type: String, required: true},
  cityP: {type:String, required:true},
  dataO: {type: Date, reqired:true} ,
  timesO: {type: String, required:true},
  dataP: {type: Date, reqired:true},
  timesP: {type: String, required:true},
  price: {type: String, required: true}
})

module.exports = model('Aviabullets', schema)