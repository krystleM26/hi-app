const express = require('express')
const User = require('./users-model')

const router = express.Router()

const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 27,
  },

  {
    firstName: 'Krystle',
    lastName: 'Mitchell',
    age: 32,
  },
]

router.get('/', (req, res) => {
  res.send(users)
})

router.post('/', (req, res) => {
    console.log(req.body)
  const users = req.body
 
  res.send(`User ${users} was added to the database`)
})

module.exports = router
