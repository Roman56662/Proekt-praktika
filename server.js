const express = require('express')
const mongoose = require('mongoose')

// client cors
const cors = require('cors')
const bodyParser = require('body-parser');
//

const app = express()

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api', require('./routes/base.routes'), cors())
app.use('/api/base', require('./routes/home.base.routes'))

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

// app.use((req, res, next) => {
//   res.header({"Access-Control-Allow-Origin": "http://localhost:3000"})
// }) 



// app.get('/', async (req, res) =>{
//   // res.append('Access-Control-Allow-Origin', ['*']);
//   // res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   // res.append('Access-Control-Allow-Headers', 'Content-Type');

//   // res.set({
//   //   'Access-Control-Allow-Origin': 'http://localhost:3000/',
//   // })
//   console.log(req.body)
//   res.send(req.query)
// })

let email = null
  let username = null
  let password = null

app.post('/post', function (req, res) {
  email = req.body.name
  username = req.body.username
  password = req.body.password
});

app.get('/post', function (req, res) {
  res.send(email + ' ' + username + ' ' + password)
  console.log('hi')
});


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