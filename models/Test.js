const { Schema, model } = require('mongoose')

const schema = new Schema({
  cityO: {type: String, required: true , unique: false},
  cityP: {type:String, required:true, unique: false },
  dataO: {type: Date, reqired:true, unique: false} ,
  timesO: {type: String, required:true , unique: false},
  dataP: {type: Date, reqired:true , unique: false},
  timesP: {type: String, required:true , unique: false},
  price: {type: String, required: true , unique: false}
})

module.exports = model('Country', schema)