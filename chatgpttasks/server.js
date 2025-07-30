// Ek server.js file banao jo:

// GET / par index.html file serve kare public/index.html folder se.

// Agar file na mile to error message de: "File not found".


import { createServer } from 'http'
import { readFile } from 'fs/promises'
import path from 'path'

const server = createServer(async (req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        try {
            const filePath = path.join("public", 'index.html')
            const file = await readFile(filePath)
            res.writeHead(200, { 'Content-Type': "text/html" })
            res.end(file)
        } catch (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': "text/plain" })
                console.error('File not found', error)
            }
        }

    }
})

const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})