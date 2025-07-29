const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', "text/plain")
        res.write('Hello This is my first server')
        res.end
    }
})
const PORT = 5000;
server.listen(PORT, () => {
    console.log('Server is runing')
})