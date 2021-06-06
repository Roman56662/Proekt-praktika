// router init
const { Router } = require('express')

//models
const Country = require('../models/Country')

//router 
const router = Router()

let countryArr = ''
let cityArr = []

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
  })

// все страны
router.get('/country', function (req, res) {
  res.send(countryArr)
  res.status(400)
})

module.exports = router