const {Router} = require('express')
const router = Router()

let test 

router.post('/pay',(req,res) => {
    test = req.body
})

router.get('/pay',(req,res) => {
    res.send(test)
})


module.exports = router
