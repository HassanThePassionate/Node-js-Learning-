
// 📄 Q1:
// Tum fs module use kar rahay ho.Tumhara goal ha ke agar file 'notes.txt' exist kare, tu usay read karo warna 'File not found!' message print karo.
//     Node.js(ES Module) mein aisa code likho jo async ho aur try/catch use kare.

// import { readFile } from 'fs/promises'
// import path from 'path'

// const readFileTask = async () => {
//     try {
//         const filePath = path.join('chatgpttasks', 'notes.txt')
//         if (filePath) {
//             const res = await readFile(filePath, 'utf-8')
//             console.log(res)
//         }

//     } catch (error) {
//         if (error.code === 'ENOENT') {
//             console.log('File not found!')

//         }
//     }
// }

// readFileTask()

// 🔥 Q2:
// Tum CLI par input lena chahte ho:

// Pehle poocha jaye: "Enter your name:"

// Jab user name de de, tu likho: "Hello, Ali!" (Ali ho ya user ka koi bhi name ho)

// Use only the readline module.
// Code likho ES module ke format mein.




// import { createInterface } from "readline";

// const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question('Enter your name: ', (user) => {
//     console.log(`Hello ${user}`)
//     rl.close()
// })




// 👨‍💻 Task:
// Prompt lo user se 2 numbers:

// "Enter first number:"

// "Enter second number:"

// Dono ko add karo

// Output do: "The sum is: 42" (user input ke according)



// import { createInterface } from "readline";

// const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question('Enter first number: ', (num1) => {
//     rl.question('Enter second number: ', (num2) => {
//         console.log(`The sum is: ${Number(num1) + Number(num2)}`)
//         rl.close()
//     })

// })





// const makeFile = async () => {
//     try {
//         const filePath = path.join(__dirname, 'notes.txt')
//         await fs.writeFile(filePath, "This is async data", 'utf-8')
//         console.log('The file is created')
//     } catch (error) {
//         console.error(error)
//     }
// }

// makeFile()


// const EventEmitters = require('events')
// const emitter = new EventEmitters()

// emitter.on('greet', () => {
//     console.log('Hello from event')
// })

// emitter.emit('greet')





// import { writeFile } from 'fs/promises'
// import path from 'path'

// const createFile = async () => {
//     try {
//         const filePath = path.join('data', 'info.txt')
//         await writeFile(filePath, 'Name: Ali \nLearning: Node.js', 'utf-8')
//         console.log('File created successfully')
//     } catch (error) {
//         console.log(error)
//     }
// }
// createFile()


import { createServer } from 'http'

const server = createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": 'text/plain' })
        res.end("Welcome to Ali's Server")
    }
    if (req.url === '/about') {
        res.writeHead(200, { "Content-Type": 'text/plain' })
        res.end("About Ali: Learning Node.js")
    }
})
const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})