require('dotenv').config()
const server = require('./backend/api/server')
const express = require('express')
const path = require("path")


server.use(express.static(path.join(__dirname, 'client/build')))

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html' ))
})

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html' ))
});

const PORT = process.env.PORT || 3200

server.listen(PORT, () => {
    console.log(` Listen on ${PORT}`)
})