// const fs = require('fs')




// fs.mkdirSync('project/logs', { recursive: true })

// fs.writeFileSync('project.txt', 'Hello world', 'utf-8')

// const os = require('os')
// const type = os.type()
// const totalMemory = os.totalmem()
// const freeMemory = os.freemem()
// const homeDir = os.homedir()
// console.log({ totalMemory, type, freeMemory, homeDir })


const fs = require('fs/promises')
const path = require('path')

// const makeDir = async () => {
//     try {
//         const filePath = path.join('fs', 'fs_module.js')
//         await fs.writeFile(filePath, 'Hello World', 'utf-8')
//     } catch (error) {
//         console.error(error)
//     }
// }
// makeDir()

// const readDir = async () => {
//     try {
//         const folderPath = path.join(__dirname, 'fs')
//         const files = await fs.readdir(folderPath)
//         console.log(files)
//     } catch (error) {
//         console.log(error)
//     }
// }
// readDir()

// const updateDir = async () => {
//     try {
//         const filePath = path.join('fs', 'fs_module.js')
//         await fs.appendFile(filePath, '\n Hello World', 'utf-8')
//     } catch (error) {
//         console.log(error)
//     }
// }
// updateDir()

const deleteDir = async () => {
    try {
        const filePath = path.join(__dirname, 'fs', 'fs_module.js')
        await fs.unlink(filePath)
        console.log('deleted')
    } catch (error) {
        console.error(error)
    }
}
deleteDir()


console.table({ 'hello': 'hell' })