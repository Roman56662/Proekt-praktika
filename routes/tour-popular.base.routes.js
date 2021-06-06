// router init
const { Router } = require('express')

//models
const Tour = require('../models/Tour')
const Hotel = require('../models/Hotel')
const City = require('../models/City')

//router 
const router = Router()


const postData = {
  country: null

}
const hotelTitle1 = [] 
const hotelArr1 = []


// hotelTitle1.length = 0
// hotelArr1.length = 0

router.post('/tour-popular', function (req, res) {

  postData.country = req.body.country

  console.log(req.body.country)

  Tour.
  find({  }).
  populate('hotel').
  exec(function (err, tour) {
    if (err) return handleError(err)

    hotelTitle1.length = 0
    hotelArr1.length = 0

    // console.log(tour)

    let title = tour[0].hotel.title
    hotelTitle1.push(tour[0].hotel.title)

    tour.map((item) => {
      if (title != item.hotel.title) {
        hotelTitle1.push(item.hotel.title)
        title = item.hotel.title
      }
    })

    // console.log(hotelTitle1)

    hotelTitle1.map((item) => {
      Hotel.find({title: item}).populate('city room country').exec(function (err, hotel) {
        if (err) return handleError(err)

        hotel.map((hotelEl) => {
          if(hotelEl.country.title === postData.country){
            hotelArr1.push(hotelEl)
          } 
        })
      })
    })
  })
})

console.log(hotelArr1)

//все туры по конкретному отелю
router.get('/hotels', function (req, res) {
  res.send( hotelArr1 )
})



module.exports = router