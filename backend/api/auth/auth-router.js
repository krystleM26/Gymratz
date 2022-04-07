const bcrypt = require('bcryptjs')
const router = require('express').Router()
const Users = require('../../db-model/users-model')

router.post('/register', (req, res, next) => {
   console.log('I work')
  const { name, username, password, type } = req.body
  
  Users.add({name, username, password, type})
  .then(user => {
      console.log(user)
      res.status(201).json(user)
    })
    .catch(next())
})

router.post('/login', (req, res, next) => {
  console.log('Hey Login')
  // const { username, passowrd } = req.body
})

module.exports = router
