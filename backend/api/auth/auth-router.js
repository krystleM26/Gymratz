const bcrypt = require('bcryptjs')
const router = require('express').Router()

router.post('/register', (req,res, next) => {
 console.log('Hey')
})

router.post('/login',  (req,res,next) => {
    console.log('Hey Login')
    const { username, passowrd } = req.body

   
})




module.exports = router