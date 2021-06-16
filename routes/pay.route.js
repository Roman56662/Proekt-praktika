// router init
const { Router } = require('express')

// crypt
const crypto = require('crypto');
const bcrypt = require('bcrypt')
let salt = bcrypt.genSaltSync(10);

//models
const Tour = require('../models/Tour');
const Tourist = require('../models/Tourist');

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

const tourist = {
  email: null,
  phone: null,
  fam: null,
  name: null,
  birth: null,
  ipassport: null,
  ipassportDate: null,
  identifier: null
}

// cipher
const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const iv = crypto.randomBytes(16);

const encrypt = (text) => {

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

const decrypt = (hash) => {

    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrpyted.toString();
};
//

// const hash = encrypt('1623498122093');
// console.log(hash);

// const test = decrypt(hash)
// console.log(test)


router.post('/pay/tourist', function (req, res) {
  tourist.email = req.body.email
  tourist.phone = req.body.phone
  tourist.fam = req.body.fam
  tourist.name = req.body.name
  tourist.birth = req.body.birth
  tourist.ipassport = req.body.ipassport
  tourist.ipassportDate = req.body.ipassportDate
  tourist.identifier = encrypt(`'${req.body.identifier}'`)
  let tour_id = req.body.tour_id
  // tourist.ipassportDate = new Date(tourist.ipassportDate)
  // tourist.birth = new Date(tourist.birth)
  console.log('tour_id => ',tour_id)
  console.log('tourist => ',tourist)
  
  const touristBase = new Tourist({
    name: tourist.name,
    fam: tourist.fam,
    email: tourist.email,
    phone: tourist.phone,
    birth: tourist.birth,
    ipassport: tourist.ipassport,
    ipassportDate: tourist.ipassportDate,
    identifier: tourist.identifier.content,
    tour: tour_id

  })

  touristBase.save(function (err) {
    if (err) return handleError(err)
  })

  console.log('touristBase => ',touristBase)

})

router.get('/pay/tourist', function (req, res) {
  res.send( tourist )
  

})




module.exports = router