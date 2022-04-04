require('dotenv').config()
const express = require('express')
const path = require("path")

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'client/build')))

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html' ))
})

const PORT = process.env.PORT || 3200

server.listen(PORT, () => {
    console.log(` Listen on ${PORT}`)
})