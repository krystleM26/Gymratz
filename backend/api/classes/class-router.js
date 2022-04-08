const router = require('express').Router()
const Classes = require('./classes-model')




router.get('/', (req,res) => {
    
    console.log(Classes);
   
    Classes.get()
    .then(res => {
        res.status(200).json(res)
    }).catch((err) => {
        res.status(500).json({message: 'Class not found'})
    })
})

router.post('/classinfo', (req,res) => {
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