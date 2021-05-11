const { Router } = require('express')
const { Types } = require('mongoose')
const Country = require('../models/Country')
const Person = require('../models/Person')
const Story = require('../models/Story')
const router = Router()


const countryMok =[
    {
      title: 'Италия',
      popular: true,
      flag: 'https://psv4.userapi.com/c520036/u173154522/docs/d19/146e8d27744d/263-italy.png?extra=esiGkehJn4ylCbEtUdh4KJwoHJDHm7wwUMh31-qR8GArd8E-EiH-pViiHpMWCic6mHw5PlimHoJ3ge0aNx-v0m8793VV2asyZRxne88di61lrdVdNiS4bwi5rtKlsV93gXygWR2UZHSFyzNHcLOysEaLvYE'
    },
    {
      title: 'Россия',
      popular: true,
      flag: 'https://psv4.userapi.com/c536436/u173154522/docs/d17/5ecfc55d6a0d/044-russia.png?extra=zEVjI383dCnjKbCYvrIRece4m_FnhMmeM9wpHggz_jqqkwkBMXTm-y2gljlT7Y-ttVaPwtzdQS_kbcZj2uE1ItfFw8El7F_Q4P0GzhfmQdXhtEuAXm2OeAWXZOZnd-mbuSTx-Ngnsw6VHpcjhHBsVJWZ3eI'
    },
    {
      title: 'Япония',
      popular: true,
      flag: 'https://psv4.userapi.com/c534536/u173154522/docs/d20/69fda6d3c2a5/241-japan.png?extra=w3T0XSLN3XzPX0_wu-zr_15BBjHQ3JQT3JbXRsR6dMn29MSqNm0upDJgi0QpOHqz_y5iCXB75qpk2XsYcP6CytxNB71NED8g367QJIbOs8O2gz1qGBC48hdD5nafAHvXqqYlo0fRuy2l96XrBjQv2VPbdOs'
    },
    {
      title: 'Новая Зеландия',
      popular: false,
      flag: 'https://psv4.userapi.com/c536132/u173154522/docs/d50/b7c2acc724ef/215-new_zealand.png?extra=dmvKAMWajIozi667ONdyzguWbAzY8vH3MLjYP9l4iPqaOCw4i7jRDjETauWzkSKOmefAyuOFTGaCk6AStKyPLYXfxiBzgeoQn5I_O34vszw8xPmFH1vAb3teBmWUsmsExvYK79s2MNtcq2qWlCKfAvGtUGw'
    },
    {
      title: 'Австралия',
      popular: false,
      flag: 'https://psv4.userapi.com/c532036/u173154522/docs/d43/a8fb81979530/143-australia.png?extra=mGu1ZipRnp14X6ns7yi6Z1aGYc1RJgbGUOwE97GWVUCxmrZmkHBzY31H5nDyJ7Om3HYuRm8444ycwdF2eAQqZQZJqjaBQcARXvyANMSJoBALDoWOnSnb9i0QHl820F0sqnsPog_KJmC8ykTT3ENqbVsYhI8'
    },
    {
      title: 'Аргентина',
      popular: false,
      flag: 'https://psv4.userapi.com/c505536/u173154522/docs/d33/445616f0c9fc/199-argentina.png?extra=iHUHi0Lka-ddUgQpIfDu5X36kX2UDAu6unw-jvjEF6XYq-ftsWF3xOTLx1viug3UXymg4KET4SVQEXWKIUmYZDdWo5MmfoKLeqY5WHN1XCxGcX3Yt1hr7d7DArhHiaPiAFsMZlb2DAUto3r59iEEQYZJGl8'
    },
]

const cityMok = [
  {}
]

// const author = new Person({
//   _id: new Types.ObjectId,
//   name: 'Ian Fleming',
//   age: 50
// })

// const story1 = new Story({
//   title: 'New title',
//   author: '609a8a79d2936f8d7e36db82'
// })

// story1.save(function (err) {
//   if (err) return handleError(err)
// })

// author.save(function (err) {
//   if (err) return handleError(err)

//   const story1 = new Story({
//     title: 'Casino Royale',
//     author: author._id
//   })

//   story1.save(function (err) {
//     if (err) return handleError(err)
//   })
// })

Story.findOne({ title: 'just title' }, function (err, story) {
  if (err) return handleError(err)
  
  console.log(story)
})

// Story.
//   findOne({ title: 'New title' }).
//   populate('author').
//   exec(function (err, story) {
//     if (err) return handleError(err)
//     console.log('The author is %s', story.author.name)
//   })






// countriesMok.map((item) => {
//     item = new Countries({
//     title: item.title,
//     price: item.price,
//     popular: item.popular,
//     flag: item.flag
//   })
//   item.save(function (err) {
//   if (err) return console.error(err);
// })
// })

let country = ''



Country.find( (err, items) => {
  if (err) return console.error(err)
  country = items
})

router.get('/test', async (req, res) =>{
  res.send(country)
})

module.exports = router