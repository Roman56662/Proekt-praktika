const { Router } = require('express')
const { Types } = require('mongoose')

const cors = require('cors')

const Country = require('../models/Country')
const City = require('../models/City')
const Hotel = require('../models/Hotel')
const Room = require('../models/Room')
const Tour = require('../models/Tour')

const router = Router()

let countryArr = ''
let cityArr = []

// Country.find(function (err, item) {
//   if (err) return handleError(err)
//   country = item
// })

Country.
  find({  }).
  populate('city').
  exec(function (err, country) {
    if (err) return handleError(err)
    countryArr = country
    country.map((city) => {
      city.city.map((item) => {
        cityArr.push(item)
      })
    })

    // City.findOne({ title: country.city }, function (err, city) {
    //   if (err) return handleError(err)
      
    //   console.log(city)
    // })
  })


router.get('/home', cors(), async (req, res) =>{
  res.send(countryArr)
})

module.exports = router