require('dotenv').config()
const path = require('path')
const express = require('express')
const usersRoute = require('./users/users-router')

const server = express()

server.use('/users', usersRoute)
server.use(express.static(path.join(__dirname, 'client/build')))





server.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(Buffer.from('<h2>Healing Intentions Natural </h2>'));
  
  
})
// Front-end with React

server.get('/client', (req,res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

module.exports = server
