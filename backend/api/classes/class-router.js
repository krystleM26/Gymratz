const router = require('express').Router()
const Classes = require('./classes-model')
const Users = require('../../db-model/users-model');
const res = require('express/lib/response');


router.get('/', (req,res) => {
    
    console.log(Classes);
    // console.log('Hey I still work')
    Classes.get()
    .then(res => {
        res.status(200).json(res)
    }).catch((err) => {
        res.status(500).json({message: 'Class not found'})
    })
})

router.post('/classInfo', (req,res) => {
    console.log('Add Some Classes')
    const {date, time, duration, type, intensity, location} = req.body
    Classes.add({date, time, duration, type, intensity, location})
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err => {
        res.status(400).json({ message: 'Missing Feilds'})
    })

})
    
    
   

module.exports = router