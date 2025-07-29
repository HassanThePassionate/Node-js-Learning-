const fs = require('fs/promises')
const path = require('path')

const makeFile = async () => {
    try {
        const filePath = path.join(__dirname, 'notes.txt')
        await fs.writeFile(filePath, "This is async data", 'utf-8')
        console.log('The file is created')
    } catch (error) {
        console.error(error)
    }
}

makeFile()


const EventEmitters = require('events')
const emitter = new EventEmitters()

emitter.on('greet', () => {
    console.log('Hello from event')
})

emitter.emit('greet')