const express = require('express')
const mongoose = require('mongoose')

// client cors
const cors = require('cors')
//

const app = express()

// mongoose connection
mongoose.connect('mongodb+srv://admin:1234qwerty@cluster0.tqb42.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// base connection
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('base connected')
})

// schema
const testSchema = new mongoose.Schema({
  title: String,
  price: Number,
  popular: Boolean
})

const Test = mongoose.model('Test', testSchema)

//client export
  app.get('/api/export', cors(), (req, res) =>{
    res.send()
  })
//

console.log('started')

app.listen(3001)