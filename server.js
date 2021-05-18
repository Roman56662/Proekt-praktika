const express = require('express')
const mongoose = require('mongoose')

// client cors
const cors = require('cors')
//

const app = express()

app.use('/api/base', require('./routes/base.routes'))

// mongoose connection
mongoose.connect('mongodb+srv://admin:1234qwerty@cluster0.tqb42.mongodb.net/tours?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

// base connection
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('base connected')
})

// // schema
// const testSchema = new mongoose.Schema({
//   title: String,
//   price: Number,
//   popular: Boolean
// })

// const Test = mongoose.model('Test', testSchema)

// let arr = ''

// const turk = new Test({
//   title: 'Турция',
//   price: 36000,
//   popular: true
// })
// const domin = new Test({
//   title: 'Доминикана',
//   price: 106000,
//   popular: false
// })

// // save in table


// Test.find( (err, items) => {
//   if (err) return console.error(err)
//   arr = items
//   console.log(items)
// })

// //client export
//   app.get('/api/export', cors(), (req, res) =>{
//     res.send(arr)
//   })
// //

console.log('started')

app.listen(3001)