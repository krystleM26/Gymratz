const express = require('express')
const server = express()

const authRouter = require('./auth/auth-router')
const instructorRouter = require('./instructor/instructor-router')


server.use('/api/auth', authRouter)
module.exports = server
server.use('/api/instructor', instructorRouter)


server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
  });