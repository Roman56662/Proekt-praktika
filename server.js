const express = require('express')
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

Aviabullets.find({}, function (err, bullet) {
  if (err) return handleError(err);
  bullet.map((item) => {
    aviabulletsArr.push(item)
  })
  console.log(aviabulletsArr)
 
  // 'bullet' содержит список спортсменов, соответствующих критерию.
})



app.use('/api',require('./routes/test.rout'))

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