const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: {type:String, required:true},
  family: {type:String, required:true},
  dataR: {type: String, required: true},
  seria: {type: String, required: true},
  nomer: {type: String, required: true},
  cityO: {type: String, required: true},
  cityP: {type:String, required:true},
  dataO: {type: String, reqired:true} ,
  timesO: {type: String, required:true}
})

module.exports = model('BookingUser', schema)