import readline from 'readline'
import path from 'path'
import fs from 'fs/promises'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



const createFile = () => {
    rl.question('Enter a File Name: ', (file) => {

        rl.question('Enter File Content: ', async (content) => {
            try {
                const filePath = path.join('project', file + '.txt')
                await fs.writeFile(filePath, content, 'utf-8')
                console.log(`your ${file} file is created successfully`)
                rl.close()
            } catch (error) {
                console.error(error)
            }

        })
    })

}

createFile()