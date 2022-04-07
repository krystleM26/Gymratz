const bcrypt = require('bcryptjs')
const { JsonWebTokenError } = require('jsonwebtoken')
const router = require('express').Router()
const Users = require('../../db-model/users-model')

router.post('/register', (req, res, next) => {
   console.log('I work')
  const { name, username, password, type } = req.body
 const hash = bcrypt.hashSync(password, 8)
  Users.add({name, username, password: hash, type})
  .then(user => {
      console.log(user)
      res.status(201).json(user)
    })
    .catch(next())
})

router.post('/login', (req, res, next) => {
let {username, password} = req.body
Users.findBy(req.body)
    .then( user => {
        if (user && bcrypt.compareSync(password, password)) {
            const token = buildToken(user)
            res.status(200).json({ message: `Welcome ${user.username}!`, token })
        } else {
            res.status(401).json({ message: 'Invalid Credentials' })
        }
    })
    .catch(next)

})

function buildToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    }
  
    const options = {
        expiresIn: '2d',
    }
    return jwt.sign(payload, secrets.JWT_SECRET, options)
}
module.exports = router
