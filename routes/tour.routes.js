// router init
const { Router } = require('express')

//models
const Tour = require('../models/Tour')

//router 
const router = Router()

let tourArr = []

const tourOptions = {
  title: null
}

//название конкретного отеля 
router.post('/tour', async (req, res) =>{
  tourArr.length = 0
  tourOptions.title = req.body.tourTitle

  Tour.
  find({  }).
  populate('hotel').
  exec(function (err, tour) {
    if (err) return handleError(err)
    tour.map((item)=> {
      if (item.hotel.title == tourOptions.title) {
        tourArr.push(item)
      }
    })
  })

})

  

//все туры по конкретному отелю
router.get('/tour', async (req, res) =>{
  res.send( tourArr )
})



let reqHotel
//конкретный отель
router.post('/hotel', async (req, res) =>{
  reqHotel = req.body.hotel
})

router.get('/hotel', async (req, res) =>{
  res.send(reqHotel)
})

module.exports = router