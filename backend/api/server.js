const express = require('express')
const server = express()
var cors = require('cors')

// server.use(express.json())

const authRouter = require('./auth/auth-router')
const instructorRouter = require('./instructor/instructor-router')

server.use(cors()) // Use this after the variable declaration

server.use('/api/auth', authRouter)
server.use('/api/instructor', instructorRouter)


server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
  });

module.exports = server
