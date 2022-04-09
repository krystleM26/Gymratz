const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = require('express').Router()
const Users = require('../../db-model/users-model')
const secret = require('../../../data/configSecrets')
const Classes = require('../classes/classes-model')

router.post('/register', (req, res, next) => {
   console.log('I work')
  const { name, username, password, type } = req.body
 const hash = bcrypt.hashSync(password, 8)
  Users.add({name, username, password: hash, type})
  .then(user => {
      console.log(user)
      res.status(201).json(user)
    })
    .catch(err => res.status(400).json(err))
})



router.post('/login', (req, res, next) => {
let {username, password} = req.body;
console.log(req.body)
Users.findBy({username})
.first()
.then(user => {
        console.log('user',user);
        console.log('hey');
        if (user && bcrypt.compareSync(password, user.password )) {
            console.log('if');
            const token = buildToken(user)
            res.status(200).json({ message: `Welcome ${user.name}!`, token})
        } else {
            console.log('else');
            res.status(401).json({ message: 'Invalid Credentials' })
        }
})
.catch(err => res.status(400).json({msg:'error'}))

})


function buildToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    }
  
    const options = {
        expiresIn: '2d',
    }
    return jwt.sign(payload, secret.JWT_SECRET, options)
}
module.exports = router

// Classes

router.post('/classes', (req,res,next) => {
    const {date, time, duration, type, intensity, location  } = req.body
    
})
