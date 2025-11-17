// first step
const http = require('http')
const fs = require('fs')


//Creating a server
const server = http.createServer((req, res) =>{
    fs.readFile('image.jpg', (error, data) =>{
        res.writeHead(200, {'Content-type': 'image/jpeg'})
        res.end(data)
    })
})

//Listen the server in port
server.listen(3000, () => {
    console.log('Server is running on port 3000')
})