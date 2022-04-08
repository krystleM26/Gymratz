const router = require('express').Router()
const Classes = require('./classes-model')
const Users = require('../../db-model/users-model')


router.get('/', (req,res,next) => {
    console.log('hahdhasd')
    console.log(Classes);
    // console.log('Hey I still work')
    Classes.get()
    .then(res => {
        res.status(200).json(res)
    }).catch((err) => {
        res.status(500).json({message: 'Class not found'})
    })
})

// router.get('/:id', (req,res,next) => {
//     Classes.getById(id)
//     .then((class => {
//         res.status(200).json(class)
//      }).catch(err)
//     })
    
    
    
   

module.exports = router