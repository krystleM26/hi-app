require('dotenv').config()
const express = require('express')

const server = express()

server.get('/api/blog', (req, res) => {
  console.log('hey')
  res.json(
  '<h1>Healing Intentions Natural</h1>'
  )
})

module.exports = server
