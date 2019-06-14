const server = require('./server')

// get port from dotENV otherwise it will use 3000
server.listen(process.env.PORT || 3000)
