require('dotenv').config()
const express = require('express')

const server = express()



const PORT = process.env.PORT || 3200

server.listen(PORT, () => {
    console.log(` Listen on ${PORT}`)
})