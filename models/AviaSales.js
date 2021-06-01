const { Schema, model } = require('mongoose')

const schema = new Schema({
  cityO: {type: String, required: true},
  cityP: {type:String, required:true},
  dataO: {type: String, reqired:true} ,
  timesO: {type: String, required:true},
  dataP: {type: String, reqired:true},
  timesP: {type: String, required:true},
  priceOld: {type: String, required: true},
  priceNew: {type: String, required: true}
})

module.exports = model('AviaSales', schema)