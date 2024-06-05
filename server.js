const express = require('express')
const server = express()
const joyRouter = require('./api/joyRouter')

server.use(express.json())
server.use('/joy', joyRouter)

module.exports = server
