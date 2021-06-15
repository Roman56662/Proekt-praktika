// router init
const { Router } = require('express')

//models
const User = require('../models/User')
const Review = require('../models/Review')
const Hotel = require('../models/Hotel')

//router 
const router = Router()

user = {
  name: null,
  email: null,
}

review = {
  text: null,
  date: null,
  rating: null
}

hotel = {
  id: null,
  title: null
}


router.post('/comment', function (req, res) {
  user.name = req.body.name
  user.email = req.body.email
  review.text = req.body.comment
  review.date = new Date()
  review.rating = req.body.number
  hotel.id = req.body.id
  hotel.title = req.body.hotelTitle

const userBase = new User({ 
  name: user.name,
  email: user.email
})

const reviewBase = new Review({
  text: review.text,
  date: review.date,
  rating: review.rating,
  name: user.name,
  user: userBase._id,
  hotel: hotel.id
})

console.log(userBase)
console.log(reviewBase)

reviewBase.save(function (err) {
  if (err) return handleError(err)
})

userBase.save(function (err) {
  if (err) return handleError(err)
})


Hotel.findOne({title: hotel.title}).populate().exec(function (err, hotel) {
  if (err) return handleError(err)
  
  hotel.review.push(
    reviewBase._id
  )
  hotel.save(function (err) {
      if (err) return handleError(err)
    })
    
  console.log(hotel)
})

})

router.get('/comment', function (req, res) {
  res.send('123')
})


module.exports = router