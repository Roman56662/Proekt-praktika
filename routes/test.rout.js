const {Router} = require('express')
const router = Router()

router.get('/test',(req,res) => {
    res.send('1234')
})







module.exports = router
