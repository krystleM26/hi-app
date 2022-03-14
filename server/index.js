const server = require('./api/server')
const path = require('path')
const PORT =  process.env.PORT || 8080;


server.listen(PORT, () => {
    console.log(`Server is Listening on ${PORT}` )
})
