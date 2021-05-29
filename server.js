const express = require('express')
const mongoose = require('mongoose')
const request = require('supertest')

// client cors
const cors = require('cors')
const bodyParser = require('body-parser');

// создание приложения
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

// создание bodyparser
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


// routes
app.use('/api', require('./routes/base.routes'), cors())
app.use('/api/base', require('./routes/home.base.routes'))

app.use('/api/base',require('./routes/allTours.toutes'))
app.use('/api/base',require('./routes/country.routes'))
app.use('/api/base',require('./routes/filter.routes'))
app.use('/api/base',require('./routes/tour.routes'))

// файловый сервер
app.use('/static', express.static(__dirname + '/public')) //Rome_Kings_Suite_Rooms1


console.log('started')

app.listen(3001)