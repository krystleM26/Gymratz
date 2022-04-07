 const jwt = require('jsonwebtoken')
 const bcrypt = require('bcryptjs')


 const restrict = (req,res,next) => {
     next()
 }

 module.exports = {
     restrict
 }