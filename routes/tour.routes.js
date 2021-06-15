// router init
const { Router } = require('express')

//models
const Tour = require('../models/Tour')
const Hotel = require('../models/Hotel')

//router 
const router = Router()

let tourArr = []

const tourOptions = {
  title: null
}

//название конкретного отеля 
router.post('/tour', function (req, res) {
  tourArr.length = 0
  tourOptions.title = req.body.tourTitle

  
  
  Tour.
  find({  }).
  populate('hotel room').
  exec(function (err, tour) {
    if (err) return handleError(err)
    
    tour.map((item)=> {

      if (item.hotel.title == tourOptions.title) {
        tourArr.push(item)
        console.log(item.price)
      }


    })
  })

})


//все туры по конкретному отелю
router.get('/tour', function (req, res) {
  res.send( tourArr )
  res.status(200)
})



let idHotel
let reqHotel
//конкретный отель
router.post('/hotel', function (req, res) {
  idHotel = req.body.hotel

  Hotel.findById(idHotel).populate('city room country review').exec(
    function (err, hotel) {
      if (err) return handleError(err)
      reqHotel = hotel
      console.log(reqHotel)
    }
  )

})

router.get('/hotel', function (req, res) {
  res.send(reqHotel)
})

module.exports = router