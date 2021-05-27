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

router.get('/country', async (req, res) =>{
  res.send(countryArr)
})

let tourArr = ''
let hotelArr = []
let hotelTitle = []

Tour.
  find({  }).
  populate('hotel').
  exec(function (err, tour) {
    if (err) return handleError(err)
    tourArr = tour

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
    

    // let title = tour[0].hotel.title
    // hotelArr.push(tour[0].hotel)
    // console.log(tour[0].hotel.title)

    // tour.map((item) => {
    //   Hotel.find({title: item.hotel.title}).populate('city').exec(function (err, hotel) {
    //     if (err) return handleError(err)
    //     if (title != hotel.title) {
    //       title = hotel.title
    //       hotelArr.push(hotel)
    //     }
    //     // console.log(hotelArr)
    //   })
    // })

    

  })

// Tour.
//   find({  }).
//   populate('hotel').
//   exec(function (err, tour) {
//     if (err) return handleError(err)
//     tourArr = tour

//     let title = tour[0].hotel.title 
//     hotelArr.push(tour[0].hotel)
//     tour.map((item)=> {
//       if (item.hotel.title != title){
//         title = item.hotel.title
//         hotelArr.push(item.hotel)

//       }
//     })
//   })

  

router.get('/tour-card/tour', async (req, res) =>{
  res.send(tourArr)
})

router.get('/tour-card/hotel', async (req, res) =>{
  res.send(hotelArr)
})


module.exports = router