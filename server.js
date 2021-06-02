const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const mongoose = require('mongoose')
const Aviabullets = require('./models/Avia')
const AviabulletsSales = require('./models/AviaSales')


mongoose.connect('mongodb+srv://roma:123qwerty@cluster0.hiemo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('base connected')
})

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));

// cors settings
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



let test2

let aviabulletsArr = []

Aviabullets.find({}, function (err, bullet) {
  if (err) return handleError(err);
  bullet.map((item) => {
    aviabulletsArr.push(item)
  })
})
let aviabulletsArrSearch = []

app.post('/base/bullets',(req,res) => {
  test2 = req.body
  console.log(test2)
  aviabulletsArrSearch = []
  Aviabullets.
  find().
  where('cityO').equals(test2.citySelectO).
  where('cityP').equals(test2.citySelectP).
  where('dataO').equals(test2.dataSelect).  //Дополнительное условие
  exec(function (err, bullets) {
    if (err) return handleError(err);
    bullets.map((item) => {
      aviabulletsArrSearch.push(item)
    })
    console.log(aviabulletsArrSearch)
  })

})

let aviabulletsArrSales = []

AviabulletsSales.find({}, function (err, bulletSales) {
  if (err) return handleError(err);
  bulletSales.map((item) => {
    aviabulletsArrSales.push(item)
  })
})


// const aviabulletsSales = new AviabulletsSales({
//   cityO: 'Санкт-Петербург',
//   cityP: 'Ростов-на-Дону',
//   dataO: '24.06.2021',
//   timesO: '05:05:00',
//   dataP: '24.06.2021',
//   timesP: '17:45:00',
//   priceOld: '26200 руб',
//   priceNew: '19800 руб'
// })

// aviabulletsSales.save(function (err) {
//   if (err) return handleError(err)
// })

// console.log(aviabulletsSales)

app.get('/base/bullets',(req,res) => {
  res.send(test2)
})

// console.log(bullet)

app.use('/base',require('./routes/booking.route'))

app.get('/base/sales', async(req, res) => {
  res.send(aviabulletsArrSales)
})

app.get('/base/search', async(req, res) => {
  res.send(aviabulletsArrSearch)
})

app.get('/',async(req, res) => {
    res.send(aviabulletsArr)
})

app.use('/static',express.static(__dirname + '/public'))


// const aviabullets = new Aviabullets({
//   cityO: 'Сочи',
//   cityP: 'Санкт-Петербург',
//   dataO: '28.06.2021',
//   timesO: '19:00:00',
//   dataP: '29.06.2021',
//   timesP: '06:05:00',
//   price: '24150 руб.',
// })

// aviabullets.save(function (err) {
//   if (err) return handleError(err)
// })


// console.log(aviabullets)




app.listen(3001)