const express = require('express')
const server = express()
const joyRouter = require('./api/joy-router')

server.use(express.json())
server.use('/joy', joyRouter)

module.exports = server


//    "@eslint/js": "^9.4.0",     "globals": "^15.3.0",
