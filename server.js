const express = require('express')
const mongoose = require('mongoose')

// client cors
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
app.use(express.json())

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

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', require('./routes/base.routes'), cors())
app.use('/api/base', require('./routes/home.base.routes'))

app.options("/*", function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.sendStatus(200);
});

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use('/static', express.static(__dirname + '/public')) //Rome_Kings_Suite_Rooms1

app.get('/', function (req,res) {
  res.send()
})

filterData = {
  country: null,
  dayArrived: null,
  dayDeparted: null,
  monthArrived: null,
  monthDeparted: null,
  countNights: null,
  parentsCount: null,
  titleParents: null,
  childrensCount: null,
  titleChildrens: null,
}


app.post('/post', function (req, res) {

  for (key in filterData) {
    filterData[key] = req.body[key]
  }
});

app.get('/post', function (req, res) {
  res.send(filterData)
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