// router init
const { Router } = require('express')

//date converter
// const dateFormat = require("dateformat")

//models
const Tour = require('../models/Tour')
const Hotel = require('../models/Hotel')
const City = require('../models/City')

//router 
const router = Router()

// пустой фильтр
filterData = {
  country: null,
  dayArrive: null,
  dayDepart: null,
  monthArrive: null,
  monthDepart: null,
  countNights: null,
  parentsCount: null,
  titleParents: null,
  childrensCount: null,
  titleChildrens: null,
}

  const hotelList = []
  const hotelTitleList = [] 

router.post('/hotels', function (req, res) {


// получение данных и запись их в фильтр
  for (key in filterData) {
    filterData[key] = req.body[key]
  }  

  filterData.country = req.body.country

  hotelList.length = 0
  hotelTitleList.length = 0

  console.log(filterData)

  

  Tour.find().
  populate('hotel').
  exec(function (err, tour) {

    let title = tour[0].hotel.title
    hotelTitleList.push(tour[0].hotel.title)
    tour.map((item) => {
      if (title != item.hotel.title) {
        hotelTitleList.push(item.hotel.title)
        title = item.hotel.title
      }
    })
    console.log(hotelTitleList)

hotelTitleList.map((item) => {
    Hotel.find({title: item}).populate('city room country').exec(function (err, hotel) {
      if (err) return handleError(err)
      hotel.map((hotelEl) => {
        // проверка на страну
        if(hotelEl.country.title === filterData.country){
          hotelEl.room.map((room) => {
            if(room.countPeople >= filterData.parentsCount){
              hotelList.push(hotelEl)
            } else if(filterData.parentsCount === undefined ){
              hotelList.push(hotelEl)
            }
          })
        } 
      })
    })
  })

  })

  
  

})


router.get('/hotels', function (req, res) {
  res.send(hotelList)
});


router.get('/filter', function (req, res){
  res.send(filterData.country)
})

module.exports = router

