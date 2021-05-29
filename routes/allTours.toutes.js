// router init
const { Router } = require('express')

//models
const Hotel = require('../models/Hotel')
const Tour = require('../models/Tour')

//router 
const router = Router()

let hotelArr = []
let hotelTitle = []

Tour.
  find({  }).
  populate('hotel').
  exec(function (err, tour) {
    if (err) return handleError(err)

    let title = tour[0].hotel.title
    hotelTitle.push(tour[0].hotel.title)

    tour.map((item) => {
      if (title != item.hotel.title) {
        hotelTitle.push(item.hotel.title)
        title = item.hotel.title
      }
    })

    hotelTitle.map((item) => {
      Hotel.find({title: item}).populate('city').exec(function (err, hotel) {
        if (err) return handleError(err)
        hotelArr.push(hotel[0])
      })
    })

  })

//все отели, у которых есть туры
router.get('/hotels', async (req, res) =>{
  res.send(hotelArr)
})

module.exports = router