const express = require("express") ;

const router = express.Router()

const users = [
    {
        firstName : 'John',
        lastName: 'Doe',
        age: 27,
    }
]

router.get('/', (req, res) => {
    console.log(users)
   res.send(' Pending Users')
})

module.exports= router;