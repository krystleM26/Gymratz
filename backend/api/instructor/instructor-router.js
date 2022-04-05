const router = require('express').Router()
// const {restrict} = require('./instructor-middleware')

router.get('/login', (req,res,next) => {
    console.log('hey here');
    res.status(200).json({msg: 'Hello from login'})
} ) 





module.exports = router