import { readFile, writeFile } from "fs/promises";
import { createServer } from "http";
import path from 'path';
import crypto from 'crypto'
const DATA_FILE_NAME = path.join('data', 'links.json')
const serveFiles = async (res, filePath, contentType) => {
    try {
        const data = await filePath
        res.writeHead(200, { "Content-Type": contentType })
        res.end(data)
    } catch (error) {
        res.writeHead(404, { "Content-Type": contentType })
        res.end('404 error occurred')
    }
}
const loadLink = async () => {
    try {
        const data = await readFile(DATA_FILE_NAME, 'utf-8')
        return JSON.parse(data)

    } catch (error) {
        if (error.code === "ENOENT") {
            await writeFile(DATA_FILE_NAME, JSON.stringify({}))
            return {}
        }
    }
}

const saveLinks = async (links) => {
    writeFile(DATA_FILE_NAME, JSON.stringify(links))
}


const server = createServer(async (req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            await serveFiles(res, readFile(path.join('public', 'index.html')), "text/html")

        } else if (req.url === '/style.css') {
            await serveFiles(res, readFile(path.join('public', 'style.css')), "text/css")
        } else if (req.url === '/links') {
            const links = await loadLink()
            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify(links))
        } else {
            const links = await loadLink()
            const shortCode = req.url.slice(1)
            console.log(req.url.slice(1))
            if (links[shortCode]) {
                res.writeHead(302, { location: links[shortCode] })
                return res.end()
            }
        }
    }
    if (req.method === 'POST' && req.url === '/shorten') {
        const links = await loadLink()
        let body = '';
        req.on('data', (chunks) => {
            body += chunks
        })
        req.on('end', async () => {
            const { url, shortCode } = JSON.parse(body)
            if (!url) {
                res.writeHead(400, { 'Content-Type': 'text/plain' })
                return console.log('URL is required')
            }
            const finalShortCode = shortCode || crypto.randomBytes(4).toString('hex')

            if (links[finalShortCode]) {
                res.writeHead(400, { 'Content-Type': 'text/plain' })
                return console.log('ShortCode is already Exist. Please Try Another')
            }
            links[finalShortCode] = url
            await saveLinks(links)
            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify({ success: true, shortCode: finalShortCode }))
        })
    }
})


server.listen(3004, () => {
    console.log('Server is running')
})
