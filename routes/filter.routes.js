// router init
const { Router } = require('express')

//router 
const router = Router()

filterData = {
  country: null,
  dayArrived: null,
  dayDeparted: null,
  monthArrived: null,
  monthDeparted: null,
  countNights: null,
  parentsCount: null,
  titleParents: null,
  childrensCount: null,
  titleChildrens: null,
}

router.post('/post', function (req, res) {
  for (key in filterData) {
    filterData[key] = req.body[key]
  }
});

router.get('/post', function (req, res) {
  res.send(filterData)
  res.status(400)
});

router.get('/filter', async (req, res) =>{
  res.send(filterData)
  res.status(400)
})

module.exports = router