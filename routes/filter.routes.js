// router init
const { Router } = require('express')

//date converter
const dateFormat = require("dateformat")

//models
const Tour = require('../models/Tour')

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

// массив с месяцами
const monthArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

router.post('/post', function (req, res) {
// получение данных и запись их в фильтр
  for (key in filterData) {
    filterData[key] = req.body[key]
  }  
  console.log(filterData)

// поиск тура 
  Tour.find().
  populate('hotel').
  exec(function (err, tour) {
    if (err) return handleError(err);

    tour.map((item) => {

// преобразование месяца из текста в слово
      let monthA 
      let monthD

      monthArr.map((month, key)=>{  // поиск по названию месяца и получени индекса массива - номера месяца 
        if (month == filterData.monthArrive) {
          monthA = key + 1
        }
      })
      monthArr.map((month, key)=>{ // -.-
        if (month == filterData.monthDepart) {
          monthD = key + 1
        }
      })

let hotelArr = []
let hotelTitle = []

//фильтрация по датам
      if( (filterData.dayArrive == new Date(item.dateArrive).getDate() && monthA == new Date(item.dateArrive).getMonth()+1) ||
          (filterData.dayDepart == new Date(item.dateDepart).getDate() && monthD == new Date(item.dateDepart).getMonth()+1) ||
          (filterData.dayArrive == new Date(item.dateArrive).getDate() && monthA == new Date(item.dateArrive).getMonth()+1 && 
          filterData.dayDepart == new Date(item.dateDepart).getDate() && monthD == new Date(item.dateDepart).getMonth()+1) )
        {
          console.log(item)
          hotelTitle.push(item.hotel.title)
          
        } 
        console.log(hotelTitle)
    })

  })
})

router.get('/post', function (req, res) {
  res.send(filterData)
  res.status(400)
});

router.get('/filter', async (req, res) =>{
  res.send(filterData)
  res.status(400)
})



router.get('/filter/result', async (req, res) =>{
  res.send('123')
  res.status(400)
})

module.exports = router

// Tour.find().
// populate('hotel room').
// exec(function (err, tour) {
//   if (err) return handleError(err);
//   tour.map((item) => {
//     if( (filterData.dayArrive == new Date(item.dateArrive).getDay()+1) && (filterData.monthArrive == new Date(item.dateArrive).getMonth()+1)  ){
//     console.log(tour)
//   } else {
//     console.log('err')
//   }
//   })
  
//   console.log('tour[0].dateArrive ',new Date(tour[0].dateArrive).getDay()+1)
//   console.log('tour[0].dateDepart ',new Date(tour[0].dateDepart).getMonth()+1)
//   console.log('filter day ',filterData.dayArrive)
//   console.log('filter month ',filterData.monthArrive)
  
// })