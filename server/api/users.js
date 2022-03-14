const express = require("express") ;

const router = express.Router()

const user = [
    {
        "firstName" : "John",
        "lastName": "Doe",
        "age": "27",
    }
]

router.get('/', (req, res) => {
   res.send(' Pending Users')
})

module.exports= router;