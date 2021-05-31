const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const mongoose = require('mongoose')
const Aviabullets = require('./models/Avia')


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

let aviabulletsArr = []

console.log()

Aviabullets.find({}, function (err, bullet) {
  if (err) return handleError(err);
  bullet.map((item) => {
    aviabulletsArr.push(item)
  })
  // console.log(aviabulletsArr)
 
  // 'bullet' содержит список спортсменов, соответствующих критерию.
})

let test2

app.post('/base/bullets',(req,res) => {
  test2 = req.body
  console.log(test2)
  Aviabullets.find({cityO : test2.citySelectO}, function (err, bullets) {
    if (err) return handleError(err);
    console.log(bullets)
    // 'athletes' содержит список спортсменов, соответствующих критерию.
  })
})

app.get('/base/bullets',(req,res) => {
  res.send(test2)
})

// 



// console.log(bullet)

app.use('/base',require('./routes/booking.route'))

app.get('/',async(req, res) => {
    res.send(aviabulletsArr)
})

app.use('/static',express.static(__dirname + '/public'))


// const aviabullets = new Aviabullets({
//   cityO: 'Москва',
//   cityP: 'Ростов-на-Дону',
//   dataO: '2021-06-02T22:40:00',
//   timesO: '12:40:00',
//   dataP: '2021-06-02T17:15:00',
//   timesP: '17:15:00',
//   price: '14000 руб.',
// })

// aviabullets.save(function (err) {
//   if (err) return handleError(err)
// })


// console.log(aviabullets)





app.listen(3001)