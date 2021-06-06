// router init
const { Router } = require('express')

//models
const Tour = require('../models/Tour')

//router 
const router = Router()

let tourArr = []

const tourOptions = {
  id: null
}

//название конкретного отеля 
router.post('/pay', function (req, res) {
  tourArr.length = 0
  tourOptions.id = req.body.tour
  
  
  // Tour.
  // find({  }).
  // populate('hotel room').
  // exec(function (err, tour) {
  //   if (err) return handleError(err)
    
  //   tour.map((item)=> {

  //     if (item._id == tourOptions.id) {
  //       tourArr.push(item)
  //     }


  //   })
  // })

})



router.get('/pay', function (req, res) {
  res.send( [tourOptions.id] )
  res.status(400)
})


module.exports = router