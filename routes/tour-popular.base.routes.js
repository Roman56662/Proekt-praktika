// router init
const { Router } = require('express')

//models
const Tour = require('../models/Tour')
const Hotel = require('../models/Hotel')
const City = require('../models/City')

//router 
const router = Router()

const hotelTitle = [] 
const hotelArr = []
const postData = {
  country: null
}

router.post('/tour-popular', async (req, res) =>{
  hotelTitle.length = 0
  hotelArr.length = 0
  postData.country = req.body.country

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
      Hotel.find({title: item}).populate('city room country').exec(function (err, hotel) {
        if (err) return handleError(err)
        hotel.map((hotelEl) => {

          if(hotelEl.country.title == postData.country){
            hotelArr.push(hotelEl)
          }
          

        })
      })
    })

  })

})

//все туры по конкретному отелю
router.get('tour-popular/hotels', async (req, res) =>{
  res.send( hotelArr )
  res.status(400)
})

module.exports = router